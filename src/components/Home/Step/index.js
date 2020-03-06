import React, { useState, useEffect } from 'react';
import { Container, Img, Holder, Info } from './styles';
import Share from '../../ui/svg/Share';
import Edit from '../../ui/svg/Edit';
import Click from '../../ui/svg/Click';
export default () => {
    const [show, setShow] = useState(false)
    const [step1, setStep1] = useState(false)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const Animation = () => {
        if (document.getElementById('step_container') && !show) {
            const distance = document.getElementById('step_container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 200;
            if (distance < windowsHeight) {
                setShow(true)
                setTimeout(() => setStep1(true), 300)
                setTimeout(() => setStep2(true), 700)
                setTimeout(() => setStep3(true), 1100)
            }
        }
    }
    useEffect(() => {
        Animation();
        window.addEventListener('scroll', Animation);
    }, [])
    return (
        <Container id={'step_container'}>
            <Holder style={{ opacity: step1 ? 1 : 0 }}>
                <Img>
                    <Edit width={'100%'} height={'100%'} />
                </Img>
                <Info>創建服務</Info>
            </Holder>
            <Holder style={{ opacity: step2 ? 1 : 0 }}>
                <Img>
                    <Share width={'100%'} height={'100%'} />
                </Img>
                <Info>分享連結</Info>
            </Holder>
            <Holder style={{ opacity: step3 ? 1 : 0 }}>
                <Img>
                    <Click width={'100%'} height={'100%'} />
                </Img>
                <Info>收到預約</Info>
            </Holder>
        </Container>
    );
}
