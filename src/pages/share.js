import { withRouter } from 'next/router';
import Share from '../containers/Share'


export default withRouter((props) => (
    <Share
        query={props.router.query}
    />
));