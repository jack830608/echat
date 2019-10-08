import styled from 'styled-components';

export const Container = styled.div`
    margin:10px 0;
    width:100%;
    transition:0.4s linear;
    border-bottom:${props => props.focus ? '1px solid #ff6859' : '1px solid #ababab'};
    @media only screen and (min-width:768px) {
        width:${props => props.width ? props.width : 'auto'};
        margin:20px 0;
    }
`;
export const In = styled.input`
    border:none;
    background:#FFF;
    padding:0.5em;
    font-size: 16px !important;
    transition:175ms ease-out;
    box-sizing:border-box;
    width:100%;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #BABABA;
    }
    @media only screen and (min-width:768px) {
        padding:0.7em;
    }
`;
export const Text = styled.textarea`
    border:none;
    background:#FFF;
    padding:0.5em;
    font-size: 16px !important;
    transition:175ms ease-out;
    width:100%;
    resize: none;
    box-sizing:border-box;
    :focus {
        outline: none;
    }
    ::placeholder{
        color: #BABABA;
    }
    @media only screen and (min-width:768px) {
        padding:0.7em;
    }
`;