import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    background:#EDEDED;
    justify-content:space-between;
    align-items:center;
    margin:5px 0;
    box-sizing:border-box;
    position:relative;
    width:${props => props.width ? props.width : 'auto'};
    border-radius:5px;
    @media only screen and (min-width:768px) {
        margin:10px 0;
    }
`;
export const Drop = styled.select`
    border:none;
    background:#EDEDED;
    font-size: 16px !important;
    transition:175ms ease-out;
    width:100%;
    box-sizing:border-box;
    color:${props => props.change ? '#000' : '#B5B5B5'};
    -moz-appearance: none;
    -webkit-appearance: none;
    padding:0.9em 0.7em;
    height:50px;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #B0B0B0;
    }
    ::-ms-expand {
        display: none;
    }
    ::-webkit-scrollbar{
        width:1px;
        background-color:transparent;
    }
    @media only screen and (min-width:768px) {
        font-size: 20px !important;
        height:64px;
    }
`;
