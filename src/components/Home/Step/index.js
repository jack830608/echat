import {
    Container, Img, Dot, Holder, Info
} from './styles';
import Share from '../../ui/svg/Share';
import Edit from '../../ui/svg/Edit';
import Data from '../../ui/svg/Data';
import Click from '../../ui/svg/Click';
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            StepIn1: false,
            StepIn2: false,
            StepIn3: false,
            StepIn4: false,
        };
    }
    Animation = () => {
        if (document.getElementById('step_container') && !this.state.show) {
            const distance = document.getElementById('step_container').getBoundingClientRect().top;
            const windowsHeight = window.innerHeight - 200;
            if (distance < windowsHeight) {
                this.setState({ show: true });
                setTimeout(() => this.setState({ StepIn1: true }), 100)
                setTimeout(() => this.setState({ StepIn2: true }), 500)
                setTimeout(() => this.setState({ StepIn3: true }), 900)
                setTimeout(() => this.setState({ StepIn4: true }), 1300)
            }
        }
    }
    componentDidMount() {
        this.Animation();
        window.addEventListener('scroll', this.Animation);
    }
    render() {
        return (
            <Container id={'step_container'}>
                <Holder style={{ opacity: this.state.StepIn1 ? 1 : 0 }}>
                    <Img>
                        <Edit width={'100%'}height={'100%'}/>
                    </Img>
                    <Info>創建服務</Info>
                </Holder>
                <Holder style={{ opacity: this.state.StepIn2 ? 1 : 0 }}>
                    <Img>
                        <Share width={'100%'}height={'100%'}/>
                    </Img>
                    <Info>分享連結</Info>
                </Holder>
                <Holder style={{ opacity: this.state.StepIn3 ? 1 : 0 }}>
                    <Img>
                        <Click width={'100%'}height={'100%'}/>
                    </Img>
                    <Info>收到預約</Info>
                </Holder>
            </Container>
        );
    }
}
