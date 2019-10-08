import {
    Container, Drop
} from './styles';
import Arrow from '../../ui/svg/DownArrow'
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            change: false,
        };
    }
    handelChange(e){
        if(e.target.value >= 0){
            this.setState({change:true})
        }
    }
    render() {
        return (

            <Container
                width={this.props.width}
                focus={this.state.focus}
            >
                <Drop
                    onFocus={() => this.setState({ focus: true })}
                    onBlur={() => this.setState({ focus: false })}
                    onChange={(e) =>{
                        this.props.onChange(e);
                        this.handelChange(e)
                    }}
                    focus={this.state.focus}
                    placeholder={this.props.placeholder}
                    change={this.state.change}
                    id={this.props.id}
                >
                    {this.props.children}
                </Drop>
                <Arrow
                    width={'15px'}
                    fill={'#B5B5B5'}
                    top={'10%'}
                    right={'5%'}
                />
            </Container>
        );
    }
}