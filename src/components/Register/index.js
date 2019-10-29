import {
    Container, Title, Form, Subtitle, Button, CheckBox,
    Require,
} from './styles';
import Input from '../ui/Input'
import Calendar from '../Calendar'
import Dropdown from '../ui/Dropdown'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'
import { validateEmail } from '../../lib/check'
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: [],
            alert: false,
            ShowStart: false,
            ShowEnd: false,
            name: '',
            email: '',
            web: '',
            mobile: '',
            step: 1,
            privacy:false,
        };
    }
    componentDidMount() {
        const time = [];
        for (let i = 0; i <= 23; i++) {
            time.push(
                <option key={i} value={i} >{`${i}:00`}</option>
            )
        }
        this.setState({ time })
    }
    handleStartDate = (y, m, d) => {
        if (this.state.endDate && new Date(`${y}-${m}-${d}`).getTime() > new Date(this.state.endDate).getTime()) {
            this.setState({ alert: '開始日期不可大於結束日期' });
        } else {
            this.setState({ startDate: `${y}-${m}-${d}`, ShowStart: false, alert: false })
        }
    }
    handleEndDate = (y, m, d) => {
        if (this.state.startDate && new Date(`${y}-${m}-${d}`).getTime() < new Date(this.state.startDate).getTime()) {
            this.setState({ alert: '結束日期不可小於開始日期' });
        } else {
            this.setState({ endDate: `${y}-${m}-${d}`, ShowEnd: false, alert: false })
        }
    }
    handleInput = (e, type) => {
        this.setState({ [type]: e.target.value, alert: false })
    }
    validateEmail = (email) => {
        if (!email) {
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.length > 0 && re.test(email);
    };
    handleSubmit = async () => {
        const {step, name, email, mobile, privacy} = this.state
        if (step === 1) {
            if (!name) {
                return this.setState({ alert: '* 姓名為必填欄位' });
            }
            if (!email) {
                return this.setState({ alert: '* Email為必填欄位' });
            }
            if (!validateEmail(email)) {
                return this.setState({ alert: '* Email格式錯誤' });
            }
            if (!privacy) {
                return this.setState({ alert: '* 請勾選同意隱私權條款' });
            }
            this.setState({ step: 2 })
        } else if (step === 2) {
            if (!event) {
                return this.setState({ alert: '* 為必填欄位' });
            }
            if (!startDate) {
                return this.setState({ alert: '* 為必填欄位' });
            }
            if (!endDate) {
                return this.setState({ alert: '* 為必填欄位' });
            }
        } else {
            const data = {
                event,
                location,
                remark,
                startDate,
                endDate,
                startTime,
                endTime,
                name,
                mail,
            }
            axios.post('/event', data)
                .then((res) => {
                    Router.push({
                        pathname: `/share/${res.data.id}`,
                    })
                })
                .catch((error) => {
                    console.log(error);
                    alert('發生錯誤');
                });
        }
    }
    render() {
        return (
            <Container onClick={() => this.setState({ ShowStart: false, ShowEnd: false })}>
                <Title>限時且私密</Title>
                <Form>
                    <Subtitle>蒐集個資({this.state.step} / 3)</Subtitle>
                    <Require>
                            {this.state.alert ? this.state.alert : ''}
                    </Require>
                    <Input
                        type="input"
                        placeholder={'請輸入真實姓名'}
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'name')}
                        onBlur={() => this.setState({ alert: false })}
                        required
                    />
                    <Input
                        type="input"
                        placeholder={'請輸入Email'}
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'email')}
                        onBlur={() => this.setState({ alert: false })}
                        required
                    />
                    {/* <Subtitle>日期</Subtitle>
                    <Input
                        type="input"
                        placeholder={'開始日期 *'}
                        width={'100%'}
                        onClick={
                            (e) => {
                                this.setState({ ShowStart: true, ShowEnd: false });
                                e.stopPropagation();
                            }}
                        readonly={true}
                        value={this.state.startDate}
                        ref={(ref) => this.startDateInput = ref}
                        onBlur={() => this.setState({ alert: false })}
                    />
                    {this.state.ShowStart &&
                        <Calendar
                            side={'left'}
                            selectDate={this.handleStartDate}
                        />
                    }
                    <Input
                        type="input"
                        placeholder={'結束日期 *'}
                        width={'100%'}
                        onClick={
                            (e) => {
                                this.setState({ ShowStart: false, ShowEnd: true });
                                e.stopPropagation();
                            }}
                        readonly={true}
                        value={this.state.endDate}
                        ref={(ref) => this.endDateInput = ref}
                        onBlur={() => this.setState({ alert: false })}
                    />
                    {this.state.ShowEnd &&
                        <Calendar
                            side={'right'}
                            selectDate={this.handleEndDate}
                        />}
                    <Subtitle>時間</Subtitle>
                    <Dropdown
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'startTime')}
                        id={'startTime'}
                    >
                        <option selected disabled>開始時間</option>
                        {this.state.time}
                    </Dropdown>
                    <Dropdown
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'endTime')}
                        id={'endTime'}
                    >
                        <option selected disabled>結束時間</option>
                        {this.state.time}
                    </Dropdown> */}
                    <Input
                        type="input"
                        placeholder={'個人網址'}
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'web')}
                    />
                    <Input
                        type="input"
                        placeholder={'手機'}
                        width={'100%'}
                        onChange={(e) => this.handleInput(e, 'mobile')}
                    />
                    <CheckBox>
                        <input
                            type="checkbox"
                            onChange={() => this.setState({privacy: !this.state.privacy})}
                        />
                        同意讓我們蒐集個資，<a href="#">隱私權條款</a>與<a href="#">服務條款</a>在這裡
                    </CheckBox>
                    <Button
                        onClick={this.handleSubmit}
                    >
                        下一步
                    </Button>
                </Form>
            </Container>
        );
    }
}
