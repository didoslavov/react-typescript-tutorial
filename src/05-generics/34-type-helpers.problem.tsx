type Icon = 'home' | 'settings' | 'about';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type LooseComponent<T> = T | (string & {});

// How do we refactor this to make it DRY?
type LooseIcon = LooseComponent<Icon>;
type LooseButtonVariant = LooseComponent<ButtonVariant>;

export const icons: LooseIcon[] = [
    'home',
    'settings',
    'about',
    'any-other-string',
    // I should get autocomplete if I add a new item here!
];

export const buttonVariants: LooseButtonVariant[] = [
    'primary',
    'secondary',
    'tertiary',
    'any-other-string',
    // I should get autocomplete if I add a new item here!
];
