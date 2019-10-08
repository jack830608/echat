import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:10px 0;
    padding:0 3px;
    box-sizing:border-box;
    position:relative;
    width:100%;
    border-bottom:${props => props.focus ? '1px solid #ff6859' : '1px solid #ababab'};
    @media only screen and (min-width:768px) {
        width:${props => props.width ? props.width : 'auto'};
        margin:20px 0;
        padding:0 13px;
    }
`;
export const Drop = styled.select`
    border:none;
    background:#FFF;
    font-size: 16px !important;
    transition:175ms ease-out;
    width:100%;
    box-sizing:border-box;
    height: 34px;
    color:${props => props.change ? '#000' : '#B5B5B5'};
    -moz-appearance: none;
    -webkit-appearance: none;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #B5B5B5;
    }
    ::-ms-expand {
        display: none;
    }
    ::-webkit-scrollbar{
        width:1px;background-color:transparent
    }
    @media only screen and (min-width:768px) {
        height: 43px;
    }
`;
