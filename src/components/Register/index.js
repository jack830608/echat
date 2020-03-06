import {
    Container, Title, SmallTitle, Form, SubTitle, Button, CheckBox,
    Step, SelectDate, SelectBox, TimeBox, Info, StepImg, Img, ImgInfo,
    UrlBox, Url
} from './styles';
import Input from '../ui/Input';
import Carousel from '../ui/Carousel';
import Dropdown from '../ui/Dropdown';
import axios from 'axios';
import Link from 'next/link';
import { validateEmail } from '../../lib/check';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: [],
            alert: false,
            showStart: false,
            showEnd: false,
            name: '',
            email: '',
            web: '',
            mobile: '',
            event: '',
            price: '',
            info: '',
            date: [],
            startTime: '',
            endTime: '',
            step: 1,
            privacy: false,
            eventId: '',
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
    handleDate = (d) => {
        this.setState({ alert: false });
        let date = this.state.date
        const check = date.findIndex((e) => e === d)
        if (check >= 0) {
            date.splice(check, 1)
            this.setState({ date })
        } else {
            date.push(d)
            date.sort((a, b) => a - b)
            this.setState({ date })
        }
    }
    handleInput = (e, type) => {
        if (type === 'startTime' && this.state.endTime && Number(e.target.value) > Number(this.state.endTime)) {
            document.getElementById("startTime").selectedIndex = 0
            this.setState({ alert: '* 開始時間不可大於結束時間', startTime: '' })
        } else if (type === 'endTime' && this.state.startTime && Number(e.target.value) < Number(this.state.startTime)) {
            document.getElementById("endTime").selectedIndex = 0
            this.setState({ alert: '* 結束時間不可小於開始時間', endTime: '' })
        } else {
            this.setState({ [type]: e.target.value, alert: false })
        }
    }
    validateEmail = (email) => {
        if (!email) {
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.length > 0 && re.test(email);
    };
    handleSubmit = async () => {
        const { step, name, email, web, mobile, privacy, event,
            date, startTime, endTime, price, info } = this.state
        if (step === 1) {
            if (!name) {
                return this.setState({ alert: '* 姓名為必填欄位' });
            } else if (!email) {
                return this.setState({ alert: '* Email為必填欄位' });
            } else if (!validateEmail(email)) {
                return this.setState({ alert: '* Email格式錯誤' });
            } else if (!privacy) {
                return this.setState({ alert: '* 請勾選同意隱私權條款' });
            } else {
                this.setState({ step: 2 })
            }
        } else if (step === 2) {
            if (!event) {
                return this.setState({ alert: '* 服務名稱為必填欄位' });
            } else if (date.length <= 0) {
                return this.setState({ alert: '* 服務時段為必填' });
            } else if (!startTime || !endTime) {
                return this.setState({ alert: '* 服務時段為必填' });
            } else if (!price) {
                return this.setState({ alert: '* 價格為必填欄位' });
            }
            this.setState({ step: 3 })
        } else {
            const data = {
                name,
                email,
                web,
                mobile,
                event,
                date,
                startTime,
                endTime,
                price,
                info,
            }
            axios.post('/register', data)
                .then((res) => {
                    if (res.data) {
                        this.setState({
                            eventId: res.data,
                            step: 4
                        })
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert('發生錯誤');
                });
        }
    }
    render() {
        const step1 = (
            <Step>
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
                    <label>
                        <input
                            type="checkbox"
                            onChange={() => this.setState({ privacy: !this.state.privacy })}
                        />
                        同意讓我們蒐集個資，
                    </label><a href="#">隱私權條款</a>與<a href="#">服務條款</a>在這裡
                </CheckBox>
            </Step>
        )
        const step2 = (
            <Step>
                <Input
                    type="input"
                    placeholder={'請輸入服務名稱'}
                    width={'100%'}
                    onChange={(e) => this.handleInput(e, 'event')}
                    onBlur={() => this.setState({ alert: false })}
                    required
                />
                <TimeBox>
                    <SmallTitle>服務時段</SmallTitle>
                    <SelectBox>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 1) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(1)}
                        >
                            一
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 2) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(2)}
                        >
                            二
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 3) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(3)}
                        >
                            三
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 4) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(4)}
                        >
                            四
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 5) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(5)}
                        >
                            五
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 6) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(6)}
                        >
                            六
                    </SelectDate>
                        <SelectDate
                            selected={this.state.date.findIndex((e) => e === 7) >= 0 ? 1 : ''}
                            onClick={() => this.handleDate(7)}
                        >
                            日
                    </SelectDate>
                    </SelectBox>
                    <SelectBox>
                        <Dropdown
                            width={'49%'}
                            onChange={(e) => this.handleInput(e, 'startTime')}
                            id={'startTime'}
                        >
                            <option selected disabled>開始時間</option>
                            {this.state.time}
                        </Dropdown>
                        <Dropdown
                            width={'49%'}
                            onChange={(e) => this.handleInput(e, 'endTime')}
                            id={'endTime'}
                        >
                            <option selected disabled>結束時間</option>
                            {this.state.time}
                        </Dropdown>
                    </SelectBox>
                </TimeBox>
                <Input
                    type="input"
                    placeholder={'每小時how much ? (TWD)'}
                    width={'100%'}
                    onChange={(e) => this.handleInput(e, 'price')}
                    onBlur={() => this.setState({ alert: false })}
                    required
                />
                <Input
                    type="text"
                    placeholder={'服務說明'}
                    width={'100%'}
                    onChange={(e) => this.handleInput(e, 'info')}
                />
            </Step>
        )
        const step3 = (
            <Step>
                <Carousel autoPlay>
                    <StepImg>
                        <Img src="/images/step1.png" />
                        <ImgInfo>客戶預約，立即收款</ImgInfo>
                    </StepImg>
                    <StepImg>
                        <Img src="/images/step2.png" />
                        <ImgInfo>立即寄送聊天室連結，即時有效</ImgInfo>
                    </StepImg>
                    <StepImg>
                        <Img src="/images/step3.png" />
                        <ImgInfo>聊天結束，款項結算*</ImgInfo>
                        <ImgInfo style={{ fontSize: '10px' }}>可收取款項累積滿1000元可申請</ImgInfo>
                    </StepImg>
                </Carousel>
            </Step>
        )
        const step4 = (
            <Step>
                <CopyToClipboard
                    text={`https://echat.store/${this.state.eventId}`}
                    onCopy={() => alert('複製成功！')}
                >
                    <UrlBox>
                        {`https://echat.store/${this.state.eventId}`}
                    </UrlBox>
                </CopyToClipboard>
                <Info style={{ color: '#A1A1A1' }}>
                    管理後台
                </Info>
                <Link href={`/dashboard/${this.state.eventId}`}>
                    <Url>
                        {`https://echat.store/dashboard/${this.state.eventId}`}
                    </Url>
                </Link>
            </Step>
        )
        return (
            <Container onClick={() => this.setState({ showStart: false, showEnd: false })}>
                <Title>限時且私密</Title>
                <Form>
                    {this.state.step === 1 && <SubTitle>蒐集個資(1 / 3)</SubTitle>}
                    {this.state.step === 1 && <Info alert={this.state.alert ? true : false}>{this.state.alert ? this.state.alert : ''}</Info>}
                    {this.state.step === 1 && step1}

                    {this.state.step === 2 && <SubTitle>創建服務(2 / 3)</SubTitle>}
                    {this.state.step === 2 && <Info alert={this.state.alert ? true : false}>{this.state.alert ? this.state.alert : '固定一個小時，收10趴服務費'}</Info>}
                    {this.state.step === 2 && step2}

                    {this.state.step === 3 && <SubTitle>跟錢有關(3 / 3)</SubTitle>}
                    {this.state.step === 3 && <Info alert={this.state.alert ? true : false}>{this.state.alert ? this.state.alert : '服務沒有很複雜，但很實用'}</Info>}
                    {this.state.step === 3 && step3}

                    {this.state.step === 4 && <SubTitle>開始斂財</SubTitle>}
                    {this.state.step === 4 && <Info alert={this.state.alert ? true : false}>{this.state.alert ? this.state.alert : '下面是你的服務預約連結'}</Info>}
                    {this.state.step === 4 && step4}

                    {this.state.step !== 4 && <Button
                        onClick={this.handleSubmit}
                    >
                        {this.state.step === 3 ? '取得連結' : '下一步'}
                    </Button>}
                </Form>
            </Container>
        );
    }
}
