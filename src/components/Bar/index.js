import {
    Container, Button, RightPart, Img,
} from './styles';
import axios from 'axios'
import Link from 'next/link'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackId: '',
            scroll: false,
            Mounted: false,
            result: '',
        };
    }
    componentDidMount() {
        window.addEventListener('scroll',
            () => {
                if ((window.pageYOffset + 64) >= window.innerHeight && this.props.change) {
                    this.setState({ scroll: true })
                } else {
                    this.setState({ scroll: false })
                }
            }
        );
        this.setState({ Mounted: true });
    }
    render() {
        return (
            <Container id='bar_container' scroll={this.state.scroll}>
                {this.state.Mounted &&
                    <Link href="/">
                        <Img src={`${window.location.origin}/images/logo.png`} />
                    </Link>}
                <RightPart>
                    <Link href="/register">
                        <Button>免費註冊</Button>
                    </Link>
                </RightPart>
            </Container>
        );
    }
}
