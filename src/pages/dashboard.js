import { withRouter } from 'next/router';
import Register from '../containers/Register'


export default withRouter((props) => (
    <Register
        data={props.router.query}
    />
));