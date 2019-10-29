import {
    Container, BannerButton, Title, SubTitle,
    SVGHolder,
} from './styles';
import Link from 'next/link'
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tran: '0s',
            down: '0px',
            op: 0,
            downOP: 1,
        };
    }
    render() {
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
}
