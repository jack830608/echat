import styled from 'styled-components';

export const Svg = styled.svg`
        width:15px;
    @media only screen and (min-width:768px) {
        width:20px;
    }
`;
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Svg version="1.1" viewBox="0 0 9 14" style={{ position: 'absolute', top: this.props.top, right: this.props.right, transition: '0.6s', opacity: this.props.downOP }}>
                <path fill={this.props.fill ? this.props.fill : '#FFF'} d={'M8.398 5.75q0 0.102-0.078 0.18l-3.641 3.641q-0.0780.078-0.18 0.078t-0.18-0.078l-3.641-3.641q-0.078-0.078-0.078-0.18t0.078-0.18l0.391-0.391q0.078-0.078 0.18-0.078t0.18 0.078l3.070 3.070 3.070-3.070q0.078-0.078 0.18-0.078t0.18 0.078l0.391 0.391q0.078 0.078 0.078 0.18z'} />
            </Svg>
        );
    }
}
