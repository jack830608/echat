const User = require('../../models/user')
const Event = require('../../models/event')
const wrap = require('../../lib/async-wrapper')
const sendMail = require('../../lib/sendMail')
const mongoose = require('mongoose');
const crypto = require('crypto');
const QRCode = require('qrcode');


module.exports = (server, handle, app) => {
	server.get('/share/:id', wrap(async (req, res) => {
		const actualPage = '/share';
		let check = await mongoose.Types.ObjectId.isValid(req.params.id);
		let event = check ? await Event.findById(req.params.id) : null;
		queryParams = {
			id: req.params.id,
			event,
		};
		app.render(req, res, actualPage, queryParams);
	}));

	server.post('/event', wrap(async (req, res) => {
		let data = req.body;
		let leader = await User.create({
			name: data.name,
			mail: data.mail,
			leader: true,
		});
		let randomString = () => {
			let code = crypto.randomBytes(64).toString('hex').substr(0, 5);
			let repeat = Event.find({ code });
			if (repeat && repeat.length > 0) {
				return randomString()
			} else {
				return code
			}
		}
		let result = await Event.create({
			name: data.event,
			location: data.location,
			remark: data.remark,
			startDate: data.startDate,
			endDate: data.endDate,
			startTime: data.startTime,
			endTime: data.endTime,
			attendance: leader.id,
			code: randomString(),
		});
		QRCode.toDataURL(`https://jojo.cool/friend/${result.id}`, (err, qr) => {
			if (err) throw err;
			Event.findOneAndUpdate(
				{ _id: result.id },
				{ qrcode: qr },
				{ new: true },
				(err , newResult) => {
					if (err) {
						throw err
					}
					else {
						sendMail(newResult, leader)
						res.send(newResult)
					}
				}
			);
		});
	}));

	// server.get('/search_result/:id', wrap(async (req, res) => {
	// 	const actualPage = '/search_result';
	// 	let check = req.params.id;
	// 	let event = check ? await Event.find({code: req.params.id}) : null;
	// 	let leader = event ? await User.find({_id: event[0].attendance[0]}) : null;
	// 	console.log('-xx-')
	// 	var sy = event[0].startDate.getFullYear();
	// 	var sm = event[0].startDate.getMonth()+1;
	// 	var sd = event[0].startDate.getDate();
	// 	var ey = event[0].endDate.getFullYear();
	// 	var em = event[0].endDate.getMonth()+1;
	// 	var ed = event[0].endDate.getDate();

	// 	let start = sy + '/' + sm + '/' + sd;
	// 	let end = ey + '/' + em + '/' + ed;
	// 	queryParams = {
	// 		id: req.params.id,
	// 		event: event,
	// 		leader: leader,
	// 		startDate: start,
	// 		endDate: end
	// 	};
	// 	app.render(req, res, actualPage, queryParams);
	// }));

	server.post('/search', wrap(async (req, res) => {
		let data = req.body;
		let result = await Event.find({ code: data.trackId });
		res.send(result);
	}));

	server.get('*', (req, res) => {
		return handle(req, res)
	})
}