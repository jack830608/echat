import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store';
import FormComponent from '../../components/Form'

class Form extends React.Component {
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
                <FormComponent/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
