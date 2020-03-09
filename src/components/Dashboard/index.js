import React, { useState, useEffect } from 'react';
import {
    Container, Top, Name, Form, Title, Select,
    Option, InfoBox, InfoTitle, InfoData, Alert,
    Button,
} from './style'
import Input from '../ui/Input';
import axios from 'axios';

export default (props) => {
    const [section, setSection] = useState(1)
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [alert, setAlert] = useState('')
    console.log(props)
    useEffect(() => {
        setEmail(props.data.user.email)
        setMobile(props.data.user.mobile)
    }, [])
    const validateEmail = (email) => {
        if (!email) {
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return email.length > 0 && re.test(email);
    };
    const checkUpdate = (email) => {
        if (!email) {
            setAlert('* Email為必填欄位')
            return
        } else if (!validateEmail(email)) {
            setAlert('* Email格式錯誤')
            return
        }
        const data = {
            id:props.data.user.id,
            email,
            mobile
        }
        axios.post('/update', data)
        .then((res)=>{
            if(res){
                setAlert('* 更新成功')
            }
        }
        )
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
                placeholder={email}
                width={'100%'}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="input"
                placeholder={mobile}
                width={'100%'}
                onChange={(e) => setMobile(e.target.value)}
            />
            <Button onClick={() => checkUpdate(email)}>更新資訊</Button>
        </Form>
    )
    const section2 = (
        <Form>
            <Title>我的服務</Title>
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
                    <Option selected={section === 1 ? true : false} style={{ marginLeft: 0 }}>
                        個人資訊
                    </Option>
                    <Option selected={section === 2 ? true : false}>
                        我的服務
                    </Option>
                    <Option selected={section === 3 ? true : false}>
                        訂單查詢
                    </Option>
                    <Option selected={section === 4 ? true : false} style={{ marginRight: 0 }}>
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