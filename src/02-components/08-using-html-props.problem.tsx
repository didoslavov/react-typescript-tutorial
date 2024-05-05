import React from 'react';

export const Button = ({ className, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <button {...rest} className={`default-classname ${className}`}></button>;
};

const Parent = () => {
    return <Button onClick={() => {}} type="button"></Button>;
};
