import {
    Container, Form, Left, Right, Subtitle, Button,
    Filter, Box, LeftHolder, RightHolder, Img, Require,
    RequireBox, Triangle, BackPage, BackImg,
} from './styles';
import Input from '../ui/Input'
import Calendar from '../Calendar'
import Dropdown from '../ui/Dropdown'
import Carousel from '../ui/Carousel'
import Back from '../ui/svg/Back'
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
            back: false,
            event: '',
            location: '',
            remark: '',
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            name: '',
            mail: '',
        };
    }
    eventInput;
    endDateInput;
    startDateInput;
    nameInput;
    mailInput;
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
        if (type === 'startTime' && this.state.endTime && Number(e.target.value) > Number(this.state.endTime)) {
            if (this.state.startDate && this.state.endDate && new Date(this.state.endDate).getTime() > new Date(this.state.startDate).getTime()) {
                this.setState({ [type]: e.target.value, alert: false })
            } else {
                document.getElementById("startTime").selectedIndex = 0
                this.setState({ alert: '開始時間不可大於結束時間', startTime: '' })
            }
        } else if (type === 'endTime' && this.state.startTime && Number(e.target.value) < Number(this.state.startTime)) {
            if (this.state.startDate && this.state.endDate && new Date(this.state.endDate).getTime() > new Date(this.state.startDate).getTime()) {
                this.setState({ [type]: e.target.value, alert: false })
            } else {
                document.getElementById("endTime").selectedIndex = 0
                this.setState({ alert: '結束時間不可小於開始時間', endTime: '' })
            }
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
        const {
            event, location, remark,
            startDate, endDate, startTime,
            endTime, name, mail
        } = this.state
        if (!event) {
            this.eventInput.focus();
            return this.setState({ alert: '* 為必填欄位' });
        }
        if (!startDate) {
            this.startDateInput.focus();
            return this.setState({ alert: '* 為必填欄位' });
        }
        if (!endDate) {
            this.endDateInput.focus();
            return this.setState({ alert: '* 為必填欄位' });
        }
        if (!name) {
            this.nameInput.focus();
            return this.setState({ alert: '* 為必填欄位' });
        }
        if (!mail) {
            this.mailInput.focus();
            return this.setState({ alert: '* 為必填欄位' });
        }
        if (!validateEmail(mail)) {
            this.mailInput.focus();
            return this.setState({ alert: '請確認e-mail格式' });
        }
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
    render() {
        return (
            <Container onClick={() => this.setState({ ShowStart: false, ShowEnd: false })}>
                <Link href="/">
                    <BackPage
                        onMouseOver={() => this.setState({ back: true })}
                        onMouseLeave={() => this.setState({ back: false })}
                    >
                        <Triangle back={this.state.back} />
                        <BackImg back={this.state.back}>
                            <Back />
                        </BackImg>
                    </BackPage>
                </Link>
                <Form>
                    <Left>
                        <RequireBox>
                            <Subtitle>活動資訊</Subtitle>
                            <Require alert={this.state.alert}>
                                {this.state.alert ? this.state.alert : '* 為必填欄位'}
                            </Require>
                        </RequireBox>
                        <Box>
                            <LeftHolder>
                                <Input
                                    type="input"
                                    placeholder={'活動名稱 *'}
                                    width={'100%'}
                                    onChange={(e) => this.handleInput(e, 'event')}
                                    ref={(ref) => this.eventInput = ref}
                                    onBlur={() => this.setState({ alert: false })}
                                />
                            </LeftHolder>
                            <RightHolder>
                                <Input
                                    type="input"
                                    placeholder={'活動地點'}
                                    width={'100%'}
                                    onChange={(e) => this.handleInput(e, 'location')}
                                />
                            </RightHolder>
                        </Box>
                        <Input
                            type="input"
                            placeholder={'活動簡介'}
                            width={'100%'}
                            onChange={(e) => this.handleInput(e, 'remark')}
                        />
                        <Subtitle>日期</Subtitle>
                        <Box>
                            <LeftHolder>
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
                            </LeftHolder>
                            <RightHolder>
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
                            </RightHolder>
                        </Box>
                        <Subtitle>時間</Subtitle>
                        <Box>
                            <LeftHolder>
                                <Dropdown
                                    width={'100%'}
                                    onChange={(e) => this.handleInput(e, 'startTime')}
                                    id={'startTime'}
                                >
                                    <option selected disabled>開始時間</option>
                                    {this.state.time}
                                </Dropdown>
                            </LeftHolder>
                            <RightHolder>
                                <Dropdown
                                    width={'100%'}
                                    onChange={(e) => this.handleInput(e, 'endTime')}
                                    id={'endTime'}
                                >
                                    <option selected disabled>結束時間</option>
                                    {this.state.time}
                                </Dropdown>
                            </RightHolder>
                        </Box>
                        <Subtitle style={{ margin: '20px 0' }}>主揪人資訊</Subtitle>
                        <Input
                            type="input"
                            placeholder={'姓名 *'}
                            width={'100%'}
                            onChange={(e) => this.handleInput(e, 'name')}
                            ref={(ref) => this.nameInput = ref}
                            onBlur={() => this.setState({ alert: false })}
                        />
                        <Input
                            type="input"
                            placeholder={'E-mail *'}
                            width={'100%'}
                            onChange={(e) => this.handleInput(e, 'mail')}
                            ref={(ref) => this.mailInput = ref}
                            onBlur={() => this.setState({ alert: false })}
                        />
                        <Button
                            onClick={this.handleSubmit}
                            check={this.state.event && this.state.startDate && this.state.endDate && this.state.name && this.state.mail}
                        >
                            開揪
                        </Button>
                    </Left>
                    <Right>
                        <Carousel autoPlay={true}>
                            <Img img={'form_1.jpg'}>
                                <Filter />
                            </Img>
                            <Img img={'form_2.jpg'}>
                                <Filter />
                            </Img>
                            <Img img={'form_3.jpg'}>
                                <Filter />
                            </Img>
                            <Img img={'form_4.jpg'}>
                                <Filter />
                            </Img>
                            <Img img={'form_5.jpg'}>
                                <Filter />
                            </Img>
                        </Carousel>
                    </Right>
                </Form>
            </Container>
        );
    }
}
