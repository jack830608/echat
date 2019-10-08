import { withRouter } from 'next/router';
import Search_result from '../containers/Search_result'


export default withRouter((props) => (
    <Search_result
        query={props.router.query}
    />
));