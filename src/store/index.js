import {changeName , changeNumber} from '../actions';

export const mapStateToProps = (state) => {
    return state;
};

export const mapDispatchToProps = (dispatch) => {
    return {
        changeNameAction: (name) => dispatch(changeName(name)),
        changeNumberAction: (number) => dispatch(changeNumber(number)),
    };
};