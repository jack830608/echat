import React, { useState, useEffect } from 'react';
import Banner from '../../components/Home/Banner';
import Content_top from '../../components/Home/Content_top';
import Content_bottom from '../../components/Home/Content_bottom';
import Step from '../../components/Home/Step';
import Bar from '../../components/Bar';
export default () => {
    const [op, setOp] = useState(0)

    useEffect(() => {
        setOp(1)
    }, [])
    
    return (
        <div
            style={{ opacity: op, transition: '1s', overflow: 'hidden' }}
        >
            <Bar change={true} />
            <Banner />
            <Step />
            <Content_top />
            <Content_bottom />
        </div>
    );
}
