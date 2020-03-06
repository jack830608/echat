import React, { useState, useEffect } from 'react';
import { Container, Img, Content, Box, Title, SubTitle, SmallTitle } from './styles';

export default () => {
    const [show, setShow] = useState(false)
    const Animation = () => {
        if (document.getElementById('content_top_container') && !show) {
            const distance = document.getElementById('content_top_container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 300;
            if (distance < windowsHeight) {
                setShow(true)
            }
        }
    }
    useEffect(() => {
        Animation();
        window.addEventListener('scroll', Animation);
    }, [])
    return (
        <Container
            id={'content_top_container'}
            show={show}
        >
            <Box background={'#50E3C2'}>
                <Img src="/images/lock.png" />
            </Box>
            <Box>
                <Content>
                    <Title>
                        1hr, 1 on 1
                        </Title>
                    <SubTitle>
                        限時且私密
                        </SubTitle>
                    <SmallTitle>
                        一對一的線上諮詢，沒有複雜的步驟
                        </SmallTitle>
                </Content>
            </Box>
        </Container>
    );
}
