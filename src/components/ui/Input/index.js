import {
    Container, In, Text,
} from './styles';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
        };
    }
    focus = () => {
        this.inputElm.focus();
    }
    inputElm;
    render() {
        return (
            <Container
                onClick={this.props.onClick}
                width={this.props.width}
                type={this.props.type}
                focus={this.state.focus}
            >
                {this.props.type === 'input' &&
                    <In
                        onFocus={() => { this.setState({ focus: true }) }}
                        onBlur={
                            () => {
                                this.setState({ focus: false });
                                if (this.props.onBlur) {
                                    this.props.onBlur();
                                }
                            }}
                        focus={this.state.focus}
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readonly}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        ref={(ref) => this.inputElm = ref}
                    />}
                {this.props.type === 'text' &&
                    <Text
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={
                            () => {
                                this.setState({ focus: false });
                                if (this.props.onBlur) {
                                    this.props.onBlur();
                                }
                            }}
                        focus={this.state.focus}
                        placeholder={this.props.placeholder}
                        onChange={this.props.onChange}
                        ref={(ref) => this.inputElm = ref}
                    />
                }
            </Container>
        );
    }
}