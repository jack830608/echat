import {
    Container, Img, Content, Box, Title, SubTitle, SmallTitle
} from './styles';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }
    Animation = () => {
        if (document.getElementById('content_top_container') && !this.state.show) {
            const distance = document.getElementById('content_top_container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 300;
            if (distance < windowsHeight) {
                this.setState({ show: true });
            }
        }
    }
    componentDidMount() {
        this.Animation();
        window.addEventListener('scroll', this.Animation);
    }
    render() {
        return (
            <Container
                id={'content_top_container'}
                show={this.state.show}
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
}
