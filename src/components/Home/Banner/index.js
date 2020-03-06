import React, { useState, useEffect } from 'react';
import { Container, BannerButton, Title, SubTitle } from './styles';
import Link from 'next/link'
export default () => {

    return (
        <Container>
            <Title>限時聊天室</Title>
            <SubTitle>限時且私密</SubTitle>
            <Link href="/register">
                <BannerButton>
                    免費註冊
                </BannerButton>
            </Link>
        </Container>
    );
}
