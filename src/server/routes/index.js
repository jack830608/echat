const User = require('../../models/user')
const Event = require('../../models/event')
const wrap = require('../../lib/async-wrapper')
const sendMail = require('../../lib/sendMail')
const mongoose = require('mongoose');
const crypto = require('crypto');
const QRCode = require('qrcode');


module.exports = (server, handle, app) => {
	server.get('/dashboard/:id', wrap(async (req, res) => {
		const check = await mongoose.Types.ObjectId.isValid(req.params.id);
		if (check) {
			const actualPage = '/dashboard';
			const user = await User.findById(req.params.id);
			const event = await Event.find({ owner: req.params.id })
			const data = {
				user,
				event
			}
			app.render(req, res, actualPage, data);
		} else {
			res.redirect('/');
		}

	}));

	server.post('/register', wrap(async (req, res) => {
		const data = req.body;
		const client = await User.create({
			name: data.name,
			email: data.email,
			web: data.web,
			mobile: data.mobile
		});
		const result = await Event.create({
			owner: client.id,
			name: data.event,
			price: data.price,
			info: data.info,
			date: data.date,
			startTime: data.startTime,
			endTime: data.endTime,
		});
		res.send(client.id)
	}));
	server.post('/update/user', wrap(async (req, res) => {
		console.log(req.body)
		const result = await User.findOneAndUpdate(
			{ _id: req.body.id },
			{ email: req.body.email, mobile: req.body.mobile }
		)
		res.send(result)
	}))
	server.post('/update/event', wrap(async (req, res) => {
		console.log(req.body)
		const result = await Event.findOneAndUpdate(
			{ _id: req.body.id },
			{	name: req.body.name,
				date: req.body.date,
				startTime: req.body.startTime,
				endTime: req.body.endTime,
				price: req.body.price,
				info: req.body.info,
			}
		)
		res.send(result)
	}))
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