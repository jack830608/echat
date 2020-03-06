import React, { useState, useEffect } from 'react';
import { Container, Button, RightPart, Img } from './styles';
import Link from 'next/link'

export default () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',
            () => {
                if ((window.pageYOffset + 64) >= window.innerHeight) {
                    setScroll(true)
                } else {
                    setScroll(false)
                }
            }
        );
    }, [])

    return (
        <Container id='bar_container' scroll={scroll}>
            <Link href="/">
                <Img src="/images/logo.png" />
            </Link>
            <RightPart>
                <Link href="/register">
                    <Button>免費註冊</Button>
                </Link>
            </RightPart>
        </Container>
    );
}
