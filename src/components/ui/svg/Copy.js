
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <svg xmlns="http://www.w3.org/2000/svg"  style={{cursor: 'pointer'}}viewBox="0 0 24 24" height={'100%'}>
            <path  fill={this.props.color}  d="M24 4h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/>
        </svg>
        );
    }
}
