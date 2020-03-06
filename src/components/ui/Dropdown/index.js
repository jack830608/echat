import React, { useState, useEffect } from 'react';
import { Container, Drop } from './styles';
import Arrow from '../../ui/svg/DownArrow'
export default (props) => {
    const [focus, setFocus] = useState(false)
    const [change, setChange] = useState(false)
    const handelChange = (e) => {
        if (e.target.value >= 0) {
            setChange('true')
        }
    }
        return (

            <Container
                width={props.width}
                focus={focus}
            >
                <Drop
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={(e) => {
                        props.onChange(e);
                        handelChange(e)
                    }}
                    focus={focus}
                    placeholder={props.placeholder}
                    change={change}
                    id={props.id}
                >
                    {props.children}
                </Drop>
                <Arrow
                    width={'15px'}
                    fill={'#B5B5B5'}
                    top={'20%'}
                    right={'5%'}
                />
            </Container>
        );
}