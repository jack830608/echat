import React, { useState, useEffect } from 'react';
import { Container, Img, Content, Box, Title, SubTitle, SmallTitle } from './styles';

export default () => {
    const [show, setShow] = useState(false)
    const Animation = () => {
        if (document.getElementById('content_bottom_container') && !show) {
            const distance = document.getElementById('content_bottom_container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 300;
            if (distance < windowsHeight) {
                setShow(true);
            }
        }
    }
    useEffect(() => {
        Animation();
        window.addEventListener('scroll', Animation);
    })
    return (
        <Container
            id={'content_bottom_container'}
            show={show}
        >
            <Box>
                <Content>
                    <Title>
                        諮詢完成立即收款
                        </Title>
                    <SubTitle>
                        安全的交易機制
                        </SubTitle>
                    <SmallTitle>
                        付款相關，請詳閱付款條件
                        </SmallTitle>
                </Content>
            </Box>
            <Box background={'#4A90E2'}>
                <Img src="/images/message.png" />
            </Box>
        </Container>
    );
}
