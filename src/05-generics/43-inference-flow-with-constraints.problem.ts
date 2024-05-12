import { createUser } from 'fake-external-lib';
import { useState } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

type Mutation<T extends any[], K> = (...args: T) => Promise<K>;

interface UseMutationReturn<T extends any[], K> {
    mutate: Mutation<T, K>;
    isLoading: boolean;
}

interface UseMutationOptions<T extends any[], K> {
    mutation: Mutation<T, K>;
}

export const useMutation = <T extends any[], K>(opts: UseMutationOptions<T, K>): UseMutationReturn<T, K> => {
    const [isLoading, setIsLoading] = useState(false);

    return {
        mutate: async (...args) => {
            setIsLoading(true);

            try {
                const result = await opts.mutation(...args);
                return result;
            } catch (e) {
                throw e;
            } finally {
                setIsLoading(false);
            }
        },
        isLoading,
    };
};

const mutation = useMutation({
    mutation: createUser,
});

mutation.mutate({ name: 'John Doe', email: 'john@doe.com' });

// @ts-expect-error email missing!
mutation.mutate({ name: 'John Doe' });

mutation.mutate(
    {
        name: 'John Doe',
        email: 'john@doe.com',
    },
    {
        throwOnError: true,
        // @ts-expect-error extra prop
        extra: 'oh dear',
    }
);

type test = [
    Expect<Equal<typeof mutation.isLoading, boolean>>,
    Expect<
        Equal<
            typeof mutation.mutate,
            (
                user: { name: string; email: string },
                opts?: {
                    throwOnError?: boolean;
                }
            ) => Promise<{
                id: string;
                name: string;
                email: string;
            }>
        >
    >
];
