const Component = (props: {
    config: {
        foo: string;
        whatever: {
            test: number;
            test2: string;
        };
    };
}) => {
    return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
<>
    <Component
        config={{
            foo: 'bar',
            whatever: {
                test: 1,
                test2: 'test',
            },
        }}
    />
</>;
