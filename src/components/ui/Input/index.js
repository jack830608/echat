import React, { useState, useEffect } from 'react';
import { Container, In, Text, Dot } from './styles';

export default (props) => {
    const [focus, setFocus] = useState(false)
    const focusAction = () => {
        inputElm.focus();
    }
    const inputElm = React.createRef();
    return (
        <Container
            onClick={props.onClick}
            width={props.width}
            type={props.type}
            focus={focus}
        >
            {props.type === 'input' &&
                <label style={{ position: 'relative' }}>
                    <In
                        onFocus={() => { setFocus(true) }}
                        onBlur={
                            () => {
                                setFocus(false);
                                if (props.onBlur) {
                                    props.onBlur();
                                }
                            }}
                        placeholder={props.placeholder}
                        readOnly={props.readonly}
                        value={props.value}
                        onChange={props.onChange}
                        ref={inputElm}
                    />
                    {props.required && <Dot />}
                </label>}
            {props.type === 'text' &&
                <Text
                    onFocus={() => setFocus(true)}
                    onBlur={
                        () => {
                            setFocus(false)
                            if (props.onBlur) {
                                props.onBlur();
                            }
                        }}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    ref={inputElm}
                />
            }
        </Container>
    );
}