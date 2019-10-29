import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store';
import Register from '../../components/Register'

class Register_C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            op: 0,
        };
    }
    componentDidMount() {
        this.setState({ op: 1 });
    }
    render() {
        return (
            <div style={{ opacity: this.state.op, transition: '1s', overflow:'hidden' }}>
                <Register/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register_C);
