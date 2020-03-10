import React, { useState, useEffect } from 'react';
import {
    Container, Top, Name, Form, Title, Select,
    Option, InfoBox, InfoTitle, InfoData, Alert,
    Button, SelectBox, SelectDate,
} from './style'
import Input from '../ui/Input';
import Dropdown from '../ui/Dropdown';
import axios from 'axios';

export default (props) => {
    const [section, setSection] = useState(1)
    const [alert, setAlert] = useState('')
    const [email, setEmail] = useState(props.data.user.email)
    const [mobile, setMobile] = useState(props.data.user.mobile)
    const [event, setEvent] = useState(props.data.event[0].name)
    const [date, setDate] = useState(props.data.event[0].date)
    const [option, setOption] = useState([]);
    const [startTime, setStartTime] = useState(props.data.event[0].startTime)
    const [endTime, setEndTime] = useState(props.data.event[0].endTime)
    const [price, setPrice] = useState(props.data.event[0].price)
    const [info, setInfo] = useState(props.data.event[0].info)
    console.log(props)
    useEffect(() => {
        const time = [];
        for (let i = 0; i <= 23; i++) {
            time.push(
                <option key={i} value={i} >{`${i}:00`}</option>
            )
        }
        setOption(time)
    }, [])
    const changeSection = (s) => {
        setAlert('')
        setSection(s)
    }
    const validateEmail = (email) => {
        if (!email) {
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.length > 0 && re.test(email);
    };
    const updateUser = () => {
        if (!email) {
            setAlert('* Email為必填欄位')
            return
        } else if (!validateEmail(email)) {
            setAlert('* Email格式錯誤')
            return
        }
        const data = {
            id: props.data.user.id,
            email,
            mobile
        }
        axios.post('/update/user', data)
            .then((res) => {
                if (res) {
                    setAlert('* 更新成功')
                }
            })
    }
    const updateEvent = () => {
        if (!event) {
            setAlert('* 服務名稱為必填欄位')
            return
        } else if (date.length <= 0) {
            setAlert('* 服務時段為必填')
            return
        } else if (!startTime || !endTime) {
            setAlert('* 服務時段為必填')
            return
        } else if (!price) {
            setAlert('* 價格為必填欄位')
            return
        }
        const data = {
            id:props.data.event[0].id,
            name: event,
            date,
            startTime,
            endTime,
            price,
            info
        }
        axios.post('/update/event', data)
        .then((res) => {
            if (res) {
                setAlert('* 更新成功')
            }
        })

    }
    const handleDate = (d) => {
        let newDate = [...date]
        const check = newDate.findIndex((e) => e === d)
        if (check >= 0) {
            newDate.splice(check, 1)
            setDate(newDate)
        } else {
            newDate.push(d)
            newDate.sort((a, b) => a - b)
            setDate(newDate)
        }
    }
    const section1 = (
        <Form>
            <Title>個人資訊</Title>
            <Alert alert={alert ? true : false}>
                {alert}
            </Alert>
            <InfoBox>
                <InfoTitle>您使用的登入平台</InfoTitle>
                <InfoData>echat</InfoData>
            </InfoBox>
            <InfoBox>
                <InfoTitle>您使用的網址</InfoTitle>
                <InfoData>{`https://echat.store/${props.data.user.id}`}</InfoData>
            </InfoBox>
            <Input
                type="input"
                placeholder={email ? email : 'email'}
                width={'100%'}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="input"
                placeholder={mobile ? mobile : '手機'}
                width={'100%'}
                onChange={(e) => setMobile(e.target.value)}
            />
            <Button onClick={updateUser}>更新資訊</Button>
        </Form>
    )
    const section2 = (
        <Form>
            <Title>我的服務</Title>
            <Alert alert={alert ? true : false}>
                {alert}
            </Alert>
            <Input
                type="input"
                placeholder={event ? event : '服務名稱'}
                width={'100%'}
                onChange={(e) => setEvent(e.target.value)}
                required
            />
            <SelectBox>
                <SelectDate
                    selected={date.findIndex((e) => e === 1) >= 0 ? 1 : ''}
                    onClick={() => handleDate(1)}
                >
                    一
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 2) >= 0 ? 1 : ''}
                    onClick={() => handleDate(2)}
                >
                    二
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 3) >= 0 ? 1 : ''}
                    onClick={() => handleDate(3)}
                >
                    三
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 4) >= 0 ? 1 : ''}
                    onClick={() => handleDate(4)}
                >
                    四
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 5) >= 0 ? 1 : ''}
                    onClick={() => handleDate(5)}
                >
                    五
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 6) >= 0 ? 1 : ''}
                    onClick={() => handleDate(6)}
                >
                    六
                    </SelectDate>
                <SelectDate
                    selected={date.findIndex((e) => e === 7) >= 0 ? 1 : ''}
                    onClick={() => handleDate(7)}
                >
                    日
                    </SelectDate>
            </SelectBox>
            <SelectBox>
                <Dropdown
                    width={'49%'}
                    onChange={(e) => {
                        if (Number(e.target.value) < Number(endTime)) {
                            setStartTime(e.target.value)
                        } else {
                            e.target.selectedIndex = 0
                            setAlert('* 開始時間不可大於結束時間')
                        }
                    }}
                >
                    <option selected disabled>{startTime ? `${startTime}:00` : '開始時間'}</option>
                    {option}
                </Dropdown>
                <Dropdown
                    width={'49%'}
                    onChange={(e) => {
                        if (Number(startTime) < Number(e.target.value)) {
                            setEndTime(e.target.value)
                        } else {
                            e.target.selectedIndex = 0
                            setAlert('* 結束時間不可小於開始時間')

                        }
                    }}
                >
                    <option selected disabled>{endTime ? `${endTime}:00` : '結束時間'}</option>
                    {option}
                </Dropdown>
            </SelectBox>
            <Input
                type="input"
                placeholder={price ? `$${price} /hr` : '每小時how much ? (TWD)'}
                width={'100%'}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder={info ? info : '服務說明'}
                width={'100%'}
                onChange={(e) => setInfo(e.target.value)}
            />
            <Button
                style={{ marginTop: '10px' }}
                onClick={updateEvent}
            >
                更新資訊
            </Button>
        </Form>
    )
    const section3 = (
        <Form>
            <Title>訂單查詢</Title>
        </Form>
    )
    const section4 = (
        <Form>
            <Title>我要請款</Title>
        </Form>
    )
    return (
        <Container>
            <Top>
                <Name>
                    {props.data.user.name}
                </Name>
                <Select>
                    <Option
                        selected={section === 1 ? true : false}
                        style={{ marginLeft: 0 }}
                        onClick={() => changeSection(1)}
                    >
                        個人資訊
                    </Option>
                    <Option
                        selected={section === 2 ? true : false}
                        onClick={() => changeSection(2)}
                    >
                        我的服務
                    </Option>
                    <Option
                        selected={section === 3 ? true : false}
                        onClick={() => changeSection(3)}
                    >
                        訂單查詢
                    </Option>
                    <Option
                        selected={section === 4 ? true : false}
                        style={{ marginRight: 0 }}
                        onClick={() => changeSection(4)}
                    >
                        我要請款
                    </Option>
                </Select>
            </Top>
            {section === 1 && section1}
            {section === 2 && section2}
            {section === 3 && section3}
            {section === 4 && section4}
        </Container>
    )
}