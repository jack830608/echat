import { withRouter } from 'next/router';
import Dashboard from '../containers/Dashboard'


export default withRouter((props) => (
    <Dashboard
        data={props.router.query}
    />
));