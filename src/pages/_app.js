import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import NextNprogress from '../components/ProgressBar';

const initState = {
    name: '',
    number: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'CHANGE_NUMBER':
            return {
                ...state,
                number: state.number + action.payload
            }
        default:
            return state
    }
};


const makeStore = () => {
    return createStore(reducer, initState);
};

class MyApp extends App {


    render() {
        const { Component, store } = this.props;
        return (
            <Container>
                <NextNprogress/>
                <Provider store={store}>
                    <Component />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);