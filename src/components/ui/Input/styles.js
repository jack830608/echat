import styled from 'styled-components';

export const Container = styled.div`
    margin:5px 0;
    width:100%;
    transition:0.4s linear;
    border-radius:5px;
    overflow:hidden;
    @media only screen and (min-width:768px) {
        margin:10px 0;
        width:${props => props.width ? props.width : 'auto'};
    }
`;
export const In = styled.input`
    border:none;
    background:#EDEDED;
    padding:0.7em;
    font-size: 16px !important;
    transition:175ms ease-out;
    box-sizing:border-box;
    width:100%;
    border-radius: 5px;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #B0B0B0;
    }
    @media only screen and (min-width:768px) {
        font-size: 20px !important;
        padding:1em 0.7em;
    }
`;
export const Text = styled.textarea`
    border:none;
    background:#EDEDED;
    padding:0.7em;
    font-size: 16px !important;
    transition:175ms ease-out;
    width:100%;
    resize: none;
    box-sizing:border-box;
    border-radius: 5px;
    height:5em;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #B0B0B0;
    }
    @media only screen and (min-width:768px) {
        font-size: 20px !important;
    }
`;
export const Dot = styled.div`
    background:#D14657;
    border-radius:50%;
    width:8px;
    height:8px;
    position:absolute;
    right: 10px;
    top: calc(50% - 4px);
    opacity:0.7;
    @media only screen and (min-width:768px) {

    }
`;