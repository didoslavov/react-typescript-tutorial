import { useRef } from 'react';

export const Component = () => {
    const ref = useRef(null);

    return <div ref={ref} />;
};
