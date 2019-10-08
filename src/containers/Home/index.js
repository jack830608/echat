import React from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/Home/Banner';
import Content_top from '../../components/Home/Content_top';
import Content_bottom from '../../components/Home/Content_bottom';
import Step from '../../components/Home/Step';
import Bar from '../../components/Bar';
import { mapStateToProps, mapDispatchToProps } from '../../store';
class Home extends React.Component {
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
            <div
                style={{ opacity: this.state.op, transition: '1s', overflow:'hidden' }}
            >
                <Bar change={true}/>
                <Banner />
                <Step />
                <Content_top />
                <Content_bottom />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
