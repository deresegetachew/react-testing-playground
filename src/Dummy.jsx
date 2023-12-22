import React from 'react';
import {useCustomHook} from './hooks/useCustomHook';

function DummyComponent() {
    const { handleClick } = useCustomHook();

    return <button type="button" onClick={handleClick}>Clikc Me</button>;
}

export default DummyComponent;
