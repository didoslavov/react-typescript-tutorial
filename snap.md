# Root TSConfig Snapshot

```txt
,src/01-introduction/03-navigating-jsx-types.problem.tsx(5,21): error TS17000: JSX attributes must only be assigned a non-empty 'expression'.
src/02-components/04-typing-components.problem.tsx(4,29): error TS18046: 'props' is of type 'unknown'.
src/02-components/04-typing-components.problem.tsx(10,8): error TS2578: Unused '@ts-expect-error' directive.
src/02-components/04-typing-components.problem.tsx(13,15): error TS2322: Type '{ className: string; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'className' does not exist on type 'IntrinsicAttributes'.
src/02-components/05-typing-components-as-functions.problem.tsx(7,1): error TS2578: Unused '@ts-expect-error' directive.
src/02-components/05-typing-components-as-functions.problem.tsx(17,8): error TS2786: 'Button' cannot be used as a JSX component.
  Its type '(props: Props) => { ohDear: string; }' is not a valid JSX element type.
    Type '(props: Props) => { ohDear: string; }' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
      Type '{ ohDear: string; }' is not assignable to type 'ReactNode'.
src/02-components/06-typing-children.problem.tsx(4,25): error TS2339: Property 'children' does not exist on type '{}'.
src/02-components/06-typing-children.problem.tsx(10,8): error TS2578: Unused '@ts-expect-error' directive.
src/02-components/06-typing-children.problem.tsx(12,8): error TS2559: Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes'.
src/02-components/07-typing-onclick-handlers.problem.tsx(8,47): error TS2339: Property 'onClick' does not exist on type 'ButtonProps'.
src/02-components/08-using-html-props.problem.tsx(3,26): error TS2339: Property 'className' does not exist on type '{}'.
src/02-components/08-using-html-props.problem.tsx(10,18): error TS2322: Type '{ onClick: () => void; type: string; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'onClick' does not exist on type 'IntrinsicAttributes'.
src/02-components/09-html-props-with-one-changed.problem.tsx(23,28): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/02-components/10-extracting-props-from-custom-components.problem.tsx(18,3): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/03-hooks/11-use-state.problem.tsx(8,30): error TS2339: Property 'id' does not exist on type 'never'.
src/03-hooks/11-use-state.problem.tsx(8,39): error TS2339: Property 'value' does not exist on type 'never'.
src/03-hooks/11-use-state.problem.tsx(13,13): error TS2322: Type '{ id: number; value: string; }' is not assignable to type 'never'.
src/03-hooks/11-use-state.problem.tsx(14,13): error TS2322: Type '{ id: number; value: string; }' is not assignable to type 'never'.
src/03-hooks/12-use-state-with-undefined.problem.ts(18,15): error TS2345: Argument of type '{ id: number; name: string; }' is not assignable to parameter of type 'SetStateAction<undefined>'.
  Type '{ id: number; name: string; }' provides no match for the signature '(prevState: undefined): undefined'.
src/03-hooks/12-use-state-with-undefined.problem.ts(22,23): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/03-hooks/13-use-state-excess-properties.problem.tsx(22,17): error TS2578: Unused '@ts-expect-error' directive.
src/03-hooks/13-use-state-excess-properties.problem.tsx(40,17): error TS2578: Unused '@ts-expect-error' directive.
src/03-hooks/14-use-effect.problem.ts(6,7): error TS2322: Type 'Timeout' is not assignable to type 'void | Destructor'.
src/03-hooks/15-use-callback.problem.tsx(5,31): error TS2344: Type 'string' does not satisfy the constraint 'Function'.
src/03-hooks/15-use-callback.problem.tsx(6,6): error TS7006: Parameter 'buttonName' implicitly has an 'any' type.
src/03-hooks/15-use-callback.problem.tsx(12,22): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/03-hooks/15-use-callback.problem.tsx(16,30): error TS2349: This expression is not callable.
  Type 'String' has no call signatures.
src/03-hooks/15-use-callback.problem.tsx(17,30): error TS2349: This expression is not callable.
  Type 'String' has no call signatures.
src/03-hooks/15-use-callback.problem.tsx(18,30): error TS2349: This expression is not callable.
  Type 'String' has no call signatures.
src/03-hooks/16-use-memo.problem.tsx(5,52): error TS2345: Argument of type '() => string[]' is not assignable to parameter of type '() => () => string[]'.
  Type 'string[]' is not assignable to type '() => string[]'.
    Type 'string[]' provides no match for the signature '(): string[]'.
src/03-hooks/16-use-memo.problem.tsx(12,22): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/03-hooks/17-use-ref-basics.problem.tsx(7,5): error TS2322: Type '"Random value!"' is not assignable to type 'undefined'.
src/03-hooks/18-element-refs.explainer.tsx(19,7): error TS2322: Type 'undefined' is not assignable to type 'HTMLDivElement | null'.
src/03-hooks/19-use-ref-with-elements.problem.tsx(6,15): error TS2322: Type 'MutableRefObject<HTMLDivElement | undefined>' is not assignable to type 'LegacyRef<HTMLDivElement> | undefined'.
  Type 'MutableRefObject<HTMLDivElement | undefined>' is not assignable to type 'RefObject<HTMLDivElement>'.
    Types of property 'current' are incompatible.
      Type 'HTMLDivElement | undefined' is not assignable to type 'HTMLDivElement | null'.
        Type 'undefined' is not assignable to type 'HTMLDivElement | null'.
src/03-hooks/20-why-is-my-ref-readonly.problem.tsx(7,7): error TS2540: Cannot assign to 'current' because it is a read-only property.
src/03-hooks/20-why-is-my-ref-readonly.solution.tsx(10,18): error TS2540: Cannot assign to 'current' because it is a read-only property.
src/03-hooks/21-use-reducer.problem.ts(5,11): error TS18046: 'action' is of type 'unknown'.
src/03-hooks/21-use-reducer.problem.ts(7,23): error TS18046: 'state' is of type 'unknown'.
src/03-hooks/21-use-reducer.problem.ts(7,37): error TS18046: 'action' is of type 'unknown'.
src/03-hooks/21-use-reducer.problem.ts(9,23): error TS18046: 'state' is of type 'unknown'.
src/03-hooks/21-use-reducer.problem.ts(9,37): error TS18046: 'action' is of type 'unknown'.
src/03-hooks/21-use-reducer.problem.ts(21,1): error TS2578: Unused '@ts-expect-error' directive.
src/03-hooks/21-use-reducer.problem.ts(24,1): error TS2578: Unused '@ts-expect-error' directive.
src/03-hooks/21-use-reducer.problem.ts(27,1): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/22-discriminated-union-props.problem.tsx(34,9): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/23-destructuring-discriminated-unions.problem.tsx(19,34): error TS2339: Property 'title' does not exist on type 'ModalProps'.
src/04-advanced-props/23-destructuring-discriminated-unions.solution.1.tsx(18,31): error TS2339: Property 'title' does not exist on type '{} | { title: string; }'.
  Property 'title' does not exist on type '{}'.
src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx(21,36): error TS2339: Property 'buttonColor' does not exist on type '{ variant: "no-title"; }'.
src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx(34,36): error TS2339: Property 'buttonColor' does not exist on type '{ variant: "title"; title: string; }'.
src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx(50,9): error TS2322: Type '{ buttonColor: string; variant: "no-title"; title: string; }' is not assignable to type 'IntrinsicAttributes & ModalProps'.
  Property 'buttonColor' does not exist on type 'IntrinsicAttributes & { variant: "no-title"; }'.
src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx(52,9): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx(55,44): error TS2322: Type '{ variant: "title"; title: string; buttonColor: string; }' is not assignable to type 'IntrinsicAttributes & ModalProps'.
  Property 'buttonColor' does not exist on type 'IntrinsicAttributes & { variant: "title"; title: string; }'.
src/04-advanced-props/25-toggle-props.problem.tsx(38,5): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/25-toggle-props.problem.tsx(42,4): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/27-either-all-these-props-or-none.problem.tsx(40,8): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/27-either-all-these-props-or-none.problem.tsx(43,8): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(15,30): error TS2345: Argument of type 'ReactNode' is not assignable to parameter of type '(value: number, index: number, array: number[]) => ReactNode'.
  Type 'undefined' is not assignable to type '(value: number, index: number, array: number[]) => ReactNode'.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(22,19): error TS2322: Type '(index: any) => Element' is not assignable to type 'ReactNode'.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(22,21): error TS7006: Parameter 'index' implicitly has an 'any' type.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(23,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(28,19): error TS2322: Type '(index: any) => null' is not assignable to type 'ReactNode'.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(28,21): error TS7006: Parameter 'index' implicitly has an 'any' type.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(33,9): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(37,9): error TS2322: Type '(index: any) => any' is not assignable to type 'ReactNode'.
src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx(37,21): error TS7006: Parameter 'index' implicitly has an 'any' type.
src/04-advanced-props/31-as-const.problem.ts(13,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/04-advanced-props/31-as-const.problem.ts(14,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/04-advanced-props/32-satisfies-vs-annotation-vs-as.problem.tsx(6,3): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/32-satisfies-vs-annotation-vs-as.problem.tsx(11,4): error TS2322: Type '{ children: string; type: string; illegalProperty: string; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
  Type '{ children: string; type: string; illegalProperty: string; }' is not assignable to type 'ButtonHTMLAttributes<HTMLButtonElement>'.
    Types of property 'type' are incompatible.
      Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'.
src/04-advanced-props/32-satisfies-vs-annotation-vs-as.problem.tsx(16,20): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/04-advanced-props/33-prop-groups-with-variants.problem.tsx(7,5): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/33-prop-groups-with-variants.problem.tsx(13,5): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/33-prop-groups-with-variants.problem.tsx(19,5): error TS2578: Unused '@ts-expect-error' directive.
src/04-advanced-props/33-prop-groups-with-variants.problem.tsx(48,11): error TS2322: Type '{ children: string; className: string; type: string; illegalProperty: string; } | { children: string; className: string; type: string; illegalProperty: string; } | { children: string; className: string; type: string; illegalProperty: string; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
  Type '{ children: string; className: string; type: string; illegalProperty: string; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
    Type '{ children: string; className: string; type: string; illegalProperty: string; }' is not assignable to type 'ButtonHTMLAttributes<HTMLButtonElement>'.
      Types of property 'type' are incompatible.
        Type 'string' is not assignable to type '"button" | "submit" | "reset" | undefined'.
src/05-generics/36-type-helpers-with-constraints.problem.tsx(14,3): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/36-type-helpers-with-constraints.problem.tsx(16,3): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/36-type-helpers-with-constraints.problem.tsx(18,3): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/37-generic-localstorage-hook.problem.ts(28,30): error TS2558: Expected 0 type arguments, but got 1.
src/05-generics/37-generic-localstorage-hook.problem.ts(35,24): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/37-generic-localstorage-hook.problem.ts(41,5): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/38-generic-hooks.problem.ts(23,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/38-generic-hooks.problem.ts(25,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/38-generic-hooks.problem.ts(35,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/38-generic-hooks.problem.ts(36,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/39-generic-props.problem.tsx(41,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/39-generic-props.problem.tsx(45,17): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/40-generic-class-components.problem.tsx(37,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/40-generic-class-components.problem.tsx(41,17): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/41-passing-types-to-components.problem.tsx(29,5): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/41-passing-types-to-components.problem.tsx(32,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/41-passing-types-to-components.problem.tsx(33,23): error TS2339: Property 'name' does not exist on type 'number'.
src/05-generics/41-passing-types-to-components.problem.tsx(44,9): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/41-passing-types-to-components.problem.tsx(51,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/42-generic-inference-through-multiple-helpers.problem.tsx(44,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/05-generics/43-inference-flow-with-constraints.problem.ts(42,1): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/43-inference-flow-with-constraints.problem.ts(52,5): error TS2578: Unused '@ts-expect-error' directive.
src/05-generics/43-inference-flow-with-constraints.problem.ts(60,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/45-tuple-return-type.problem.ts(23,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/45-tuple-return-type.problem.ts(24,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/46-required-context.problem.tsx(33,55): error TS2558: Expected 0 type arguments, but got 1.
src/06-advanced-hooks/46-required-context.problem.tsx(37,57): error TS2558: Expected 0 type arguments, but got 1.
src/06-advanced-hooks/46-required-context.problem.tsx(42,16): error TS2554: Expected 1 arguments, but got 0.
src/06-advanced-hooks/46-required-context.problem.tsx(45,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/46-required-context.problem.tsx(53,17): error TS2554: Expected 1 arguments, but got 0.
src/06-advanced-hooks/46-required-context.problem.tsx(56,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/46-required-context.problem.tsx(70,21): error TS2322: Type '{ name: string; }' is not assignable to type 'null'.
src/06-advanced-hooks/46-required-context.problem.tsx(72,11): error TS2322: Type '{ primaryColor: string; }' is not assignable to type 'null'.
src/06-advanced-hooks/47-unions-in-usestate.problem.tsx(45,3): error TS2578: Unused '@ts-expect-error' directive.
src/06-advanced-hooks/47-unions-in-usestate.problem.tsx(62,22): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/48-discriminated-unions-in-usestate.problem.tsx(28,37): error TS2353: Object literal may only specify known properties, and 'error' does not exist in type 'SetStateAction<{ status: string; }>'.
src/06-advanced-hooks/48-discriminated-unions-in-usestate.problem.tsx(36,3): error TS2578: Unused '@ts-expect-error' directive.
src/06-advanced-hooks/48-discriminated-unions-in-usestate.problem.tsx(46,25): error TS2339: Property 'error' does not exist on type '{ status: string; }'.
src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.problem.tsx(46,25): error TS18048: 'value' is possibly 'undefined'.
src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.problem.tsx(46,31): error TS2339: Property 'message' does not exist on type 'Error | { title: string; }'.
  Property 'message' does not exist on type '{ title: string; }'.
src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.problem.tsx(49,16): error TS18048: 'value' is possibly 'undefined'.
src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.problem.tsx(49,22): error TS2339: Property 'title' does not exist on type 'Error | { title: string; }'.
  Property 'title' does not exist on type 'Error'.
src/06-advanced-hooks/50-use-state-overloads.problem.ts(36,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/51-function-overloads-in-hooks.problem.ts(37,22): error TS2554: Expected 1 arguments, but got 0.
src/06-advanced-hooks/51-function-overloads-in-hooks.problem.ts(40,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/51-function-overloads-in-hooks.problem.ts(42,5): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/06-advanced-hooks/52-currying-hooks.problem.ts(38,22): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/07-types-deep-dive/54-understanding-jsx-element.problem.tsx(52,3): error TS2322: Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
src/07-types-deep-dive/54-understanding-jsx-element.solution.tsx(52,3): error TS2322: Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
src/07-types-deep-dive/55-strongly-typing-children.problem.tsx(32,3): error TS2322: Type 'Element' is not assignable to type 'OptionType'.
  Type 'ReactElement<any, any>' is not assignable to type '{ __brand: "OPTION_TYPE"; } & ReactPortal'.
    Property '__brand' is missing in type 'ReactElement<any, any>' but required in type '{ __brand: "OPTION_TYPE"; }'.
src/07-types-deep-dive/55-strongly-typing-children.solution.tsx(32,3): error TS2322: Type 'Element' is not assignable to type 'OptionType'.
  Type 'ReactElement<any, any>' is not assignable to type '{ __brand: "OPTION_TYPE"; } & ReactPortal'.
    Property '__brand' is missing in type 'ReactElement<any, any>' but required in type '{ __brand: "OPTION_TYPE"; }'.
src/07-types-deep-dive/56-understanding-jsx-intrinsic-elements.problem.tsx(30,1): error TS2339: Property 'myNewElement' does not exist on type 'JSX.IntrinsicElements'.
src/07-types-deep-dive/56-understanding-jsx-intrinsic-elements.solution.tsx(30,1): error TS2339: Property 'myNewElement' does not exist on type 'JSX.IntrinsicElements'.
src/07-types-deep-dive/58-appending-to-global-namespace.problem.ts(15,20): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/07-types-deep-dive/58-appending-to-global-namespace.problem.ts(15,32): error TS2694: Namespace 'React' has no exported member 'MyInterface'.
src/07-types-deep-dive/59-declaration-merging-in-global-namespace.problem.ts(25,3): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/07-types-deep-dive/60-add-new-global-element.problem.tsx(14,3): error TS2339: Property 'something' does not exist on type 'JSX.IntrinsicElements'.
src/07-types-deep-dive/60-add-new-global-element.problem.tsx(14,23): error TS2339: Property 'something' does not exist on type 'JSX.IntrinsicElements'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(10,8): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(11,10): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(12,10): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(13,6): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(14,9): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx(15,12): error TS2322: Type '{ testId: string; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'testId' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
src/08-advanced-patterns/63-lazy-load-component.problem.tsx(20,44): error TS2345: Argument of type 'unknown' is not assignable to parameter of type '() => Promise<{ default: ComponentType<any>; }>'.
src/08-advanced-patterns/63-lazy-load-component.problem.tsx(30,62): error TS2322: Type '{ loader: () => Promise<typeof import("/Users/matt/repos/total-typescript/react-typescript-tutorial/src/fake-external-lib/component")>; id: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'id' does not exist on type 'IntrinsicAttributes & Props'.
src/08-advanced-patterns/63-lazy-load-component.problem.tsx(38,4): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/64-render-props.problem.tsx(43,9): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/08-advanced-patterns/64-render-props.problem.tsx(44,28): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(16,10): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(19,12): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(22,14): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(28,21): error TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ text: (props: any) => Element; number: (props: any) => Element; password: (props: any) => Element; }'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(28,32): error TS18046: 'props' is of type 'unknown'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(29,25): error TS2698: Spread types may only be created from object types.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(34,5): error TS2322: Type '{ type: string; onChange: (e: any) => void; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'type' does not exist on type 'IntrinsicAttributes'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(35,16): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(37,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(40,10): error TS2322: Type '{ type: string; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'type' does not exist on type 'IntrinsicAttributes'.
src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx(41,10): error TS2322: Type '{ type: string; }' is not assignable to type 'IntrinsicAttributes'.
  Property 'type' does not exist on type 'IntrinsicAttributes'.
src/08-advanced-patterns/65-forward-ref-with-generics.explainer.1.tsx(52,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/65-forward-ref-with-generics.explainer.2.tsx(26,28): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/65-forward-ref-with-generics.explainer.3.tsx(31,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/66-forward-ref-as-local-function.problem.tsx(37,21): error TS7006: Parameter 'row' implicitly has an 'any' type.
src/08-advanced-patterns/66-forward-ref-as-local-function.problem.tsx(38,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/66-forward-ref-as-local-function.problem.tsx(43,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/66-forward-ref-as-local-function.problem.tsx(46,21): error TS7006: Parameter 'row' implicitly has an 'any' type.
src/08-advanced-patterns/67-hoc.problem.tsx(28,5): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/67.5-hoc-for-generic-components.problem.tsx(40,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/67.5-hoc-for-generic-components.problem.tsx(48,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/69-as-prop.problem.tsx(41,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/69-as-prop.problem.tsx(48,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/69-as-prop.problem.tsx(50,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/69-as-prop.problem.tsx(67,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/69-as-prop.problem.tsx(74,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/69-as-prop.problem.tsx(75,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(12,32): error TS2304: Cannot find name 'AsProps'.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(26,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(33,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(35,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(52,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(59,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/69-as-prop.solution.1.tsx(60,30): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/70-as-prop-with-custom-components.problem.tsx(67,16): error TS2322: Type '(props: {    thisIsRequired: boolean;}) => JSX.Element' is not assignable to type 'keyof IntrinsicElements'.
src/08-advanced-patterns/70-as-prop-with-custom-components.problem.tsx(69,9): error TS2322: Type '(props: {    thisIsRequired: boolean;}) => JSX.Element' is not assignable to type 'keyof IntrinsicElements'.
src/08-advanced-patterns/70-as-prop-with-custom-components.problem.tsx(70,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/71-as-prop-with-default.problem.tsx(20,8): error TS2741: Property 'as' is missing in type '{ doesNotExist: true; }' but required in type '{ as: ElementType; }'.
src/08-advanced-patterns/71-as-prop-with-default.problem.tsx(21,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/71-as-prop-with-default.problem.tsx(25,8): error TS2741: Property 'as' is missing in type '{ onClick: (e: any) => void; }' but required in type '{ as: ElementType; }'.
src/08-advanced-patterns/71-as-prop-with-default.problem.tsx(27,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/71-as-prop-with-default.problem.tsx(29,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(12,11): error TS2322: Type 'Omit<{ as?: T | undefined; } & ComponentPropsWithoutRef<PermittedElements extends T ? "p" : T>, "as">' is not assignable to type 'IntrinsicAttributes & ((ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ClassAttributes<...> & LabelHTMLAttributes<...> & ClassAttributes<...> & HTMLAttributes<...>) | LibraryManagedAttributes<...>)'.
  Type 'Omit<{ as?: T | undefined; } & ComponentPropsWithoutRef<PermittedElements extends T ? "p" : T>, "as">' is not assignable to type 'IntrinsicAttributes & LibraryManagedAttributes<T, ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ClassAttributes<...> & LabelHTMLAttributes<...> & ClassAttributes<...> & HTMLAttributes<...>>'.
    Type 'Omit<{ as?: T | undefined; } & ComponentPropsWithoutRef<PermittedElements extends T ? "p" : T>, "as">' is not assignable to type 'LibraryManagedAttributes<T, ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ClassAttributes<...> & LabelHTMLAttributes<...> & ClassAttributes<...> & HTMLAttributes<...>>'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(29,19): error TS7006: Parameter 'e' implicitly has an 'any' type.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(31,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(47,9): error TS2322: Type '"button"' is not assignable to type 'PermittedElements | undefined'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(48,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(53,9): error TS2322: Type '"button"' is not assignable to type 'PermittedElements | undefined'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(57,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(79,19): error TS2322: Type '(props: {    thisIsRequired: boolean;}, ref: React.ForwardedRef<HTMLAnchorElement>) => JSX.Element' is not assignable to type 'PermittedElements | undefined'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(81,9): error TS2322: Type '(props: {    thisIsRequired: boolean;}, ref: React.ForwardedRef<HTMLAnchorElement>) => JSX.Element' is not assignable to type 'PermittedElements | undefined'.
src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx(82,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(42,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(80,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(95,13): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(121,25): error TS2322: Type '{ as: ForwardRefExoticComponent<{ thisIsRequired: boolean; } & RefAttributes<HTMLAnchorElement>>; thisIsRequired: true; }' is not assignable to type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
  Property 'thisIsRequired' does not exist on type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(128,8): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(131,35): error TS2322: Type '{ as: ForwardRefExoticComponent<{ thisIsRequired: boolean; } & RefAttributes<HTMLAnchorElement>>; ref: RefObject<HTMLAnchorElement>; thisIsRequired: true; }' is not assignable to type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
  Property 'thisIsRequired' does not exist on type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(135,9): error TS2578: Unused '@ts-expect-error' directive.
src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx(137,9): error TS2322: Type '{ as: ForwardRefExoticComponent<{ thisIsRequired: boolean; } & RefAttributes<HTMLAnchorElement>>; ref: RefObject<HTMLDivElement>; thisIsRequired: true; }' is not assignable to type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
  Property 'thisIsRequired' does not exist on type 'IntrinsicAttributes & { as?: ElementType | undefined; } & Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & RefAttributes<...>'.
src/09-external-libraries/73-react-hook-form.problem.tsx(70,28): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/09-external-libraries/73-react-hook-form.problem.tsx(75,8): error TS2578: Unused '@ts-expect-error' directive.
src/09-external-libraries/74-react-hook-form-wrapper.problem.tsx(33,3): error TS2578: Unused '@ts-expect-error' directive.
src/09-external-libraries/74-react-hook-form-wrapper.problem.tsx(46,5): error TS2344: Type 'boolean' does not satisfy the constraint 'true'.
src/09-external-libraries/75-react-select.problem.tsx(10,24): error TS7006: Parameter 'props' implicitly has an 'any' type.
src/09-external-libraries/75-react-select.problem.tsx(33,16): error TS7006: Parameter 'option' implicitly has an 'any' type.
src/09-external-libraries/75-react-select.problem.tsx(36,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/09-external-libraries/75-react-select.problem.tsx(43,16): error TS7006: Parameter 'option' implicitly has an 'any' type.
src/09-external-libraries/75-react-select.problem.tsx(45,26): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/09-external-libraries/77-react-query-wrapper.problem.ts(30,12): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/09-external-libraries/77-react-query-wrapper.problem.ts(44,10): error TS2344: Type 'false' does not satisfy the constraint 'true'.
src/09-external-libraries/77-react-query-wrapper.problem.ts(51,12): error TS2344: Type 'false' does not satisfy the constraint 'true'.
,
```



# Vitest Snapshot

```json
{
  "success": false,
  "testResults": [
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/01-introduction/01-react-in-typescript.explainer.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/01-introduction/02-typescript-in-react-frameworks.explainer.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Transform failed with 1 error:\n/Users/matt/repos/total-typescript/react-typescript-tutorial/src/01-introduction/03-navigating-jsx-types.problem.tsx:5:21: ERROR: Unexpected \"}\"",
      "name": "src/01-introduction/03-navigating-jsx-types.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/01-introduction/03-navigating-jsx-types.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/04-typing-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/04-typing-components.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/04-typing-components.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/04-typing-components.solution.3.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/04-typing-components.solution.4.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/05-typing-components-as-functions.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/05-typing-components-as-functions.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/06-typing-children.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/06-typing-children.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/07-typing-onclick-handlers.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/07-typing-onclick-handlers.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/08-using-html-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/08-using-html-props.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/08-using-html-props.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/09-html-props-with-one-changed.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/09-html-props-with-one-changed.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/09-html-props-with-one-changed.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/09-html-props-with-one-changed.solution.3.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/09-html-props-with-one-changed.solution.4.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/10-extracting-props-from-custom-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/02-components/10-extracting-props-from-custom-components.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/11-use-state.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/11-use-state.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/12-use-state-with-undefined.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/12-use-state-with-undefined.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/12-use-state-with-undefined.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/13-use-state-excess-properties.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/13-use-state-excess-properties.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/14-use-effect.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/14-use-effect.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/15-use-callback.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/15-use-callback.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/16-use-memo.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/16-use-memo.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/16-use-memo.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/16-use-memo.solution.3.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/17-use-ref-basics.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/17-use-ref-basics.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/18-element-refs.explainer.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/19-use-ref-with-elements.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/19-use-ref-with-elements.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/20-why-is-my-ref-readonly.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/03-hooks/20-why-is-my-ref-readonly.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useReducer')",
      "name": "src/03-hooks/21-use-reducer.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useReducer')",
      "name": "src/03-hooks/21-use-reducer.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useReducer')",
      "name": "src/03-hooks/21-use-reducer.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useReducer')",
      "name": "src/03-hooks/21-use-reducer.solution.3.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/22-discriminated-union-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/22-discriminated-union-props.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/23-destructuring-discriminated-unions.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/23-destructuring-discriminated-unions.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/23-destructuring-discriminated-unions.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/24-discriminated-union-with-other-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/24-discriminated-union-with-other-props.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/25-toggle-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/25-toggle-props.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/26-empty-object-type.explainer.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/27-either-all-these-props-or-none.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/27-either-all-these-props-or-none.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/28-passing-react-components-vs-passing-react-nodes.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/29-variants-with-classnames.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/29-variants-with-classnames.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/30-partial-autocomplete.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/30-partial-autocomplete.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/31-as-const.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/31-as-const.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/32-satisfies-vs-annotation-vs-as.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/32-satisfies-vs-annotation-vs-as.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/33-prop-groups-with-variants.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/04-advanced-props/33-prop-groups-with-variants.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/34-type-helpers.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/34-type-helpers.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/35-type-helpers-2.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/35-type-helpers-2.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/36-type-helpers-with-constraints.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/36-type-helpers-with-constraints.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/36-type-helpers-with-constraints.solution.2.tsx"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should let you set and get values",
          "status": "passed",
          "title": "Should let you set and get values",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should not let you set a value that is not the same type as the type argument passed",
          "status": "passed",
          "title": "Should not let you set a value that is not the same type as the type argument passed",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/37-generic-localstorage-hook.problem.ts"
    },
    {
      "assertionResults": [
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should let you set and get values",
          "status": "passed",
          "title": "Should let you set and get values",
          "failureMessages": []
        },
        {
          "ancestorTitles": [
            ""
          ],
          "fullName": " Should not let you set a value that is not the same type as the type argument passed",
          "status": "passed",
          "title": "Should not let you set a value that is not the same type as the type argument passed",
          "failureMessages": []
        }
      ],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/37-generic-localstorage-hook.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.solution.3.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.solution.4.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/38-generic-hooks.solution.5.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/39-generic-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/39-generic-props.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/40-generic-class-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/40-generic-class-components.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/41-passing-types-to-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/41-passing-types-to-components.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/42-generic-inference-through-multiple-helpers.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/42-generic-inference-through-multiple-helpers.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/43-inference-flow-with-constraints.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/05-generics/43-inference-flow-with-constraints.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/44-generics-vs-discriminated-unions.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/05-generics/44-generics-vs-discriminated-unions.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/45-tuple-return-type.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/45-tuple-return-type.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/45-tuple-return-type.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/46-required-context.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/46-required-context.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/46-required-context.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/47-unions-in-usestate.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/47-unions-in-usestate.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/48-discriminated-unions-in-usestate.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/48-discriminated-unions-in-usestate.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/49-discriminated-tuples-from-custom-hooks.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/50-use-state-overloads.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/50-use-state-overloads.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/50-use-state-overloads.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/51-function-overloads-in-hooks.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/51-function-overloads-in-hooks.solution.1.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useState')",
      "name": "src/06-advanced-hooks/51-function-overloads-in-hooks.solution.2.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/52-currying-hooks.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/06-advanced-hooks/52-currying-hooks.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/53-understand-react-namespace-export.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/53-understand-react-namespace-export.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/54-understanding-jsx-element.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/54-understanding-jsx-element.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/55-strongly-typing-children.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/55-strongly-typing-children.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/56-understanding-jsx-intrinsic-elements.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/56-understanding-jsx-intrinsic-elements.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "React is not defined",
      "name": "src/07-types-deep-dive/57-react-component-type.explainer.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/58-appending-to-global-namespace.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/58-appending-to-global-namespace.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/59-declaration-merging-in-global-namespace.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/59-declaration-merging-in-global-namespace.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/60-add-new-global-element.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/60-add-new-global-element.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/61-html-attributes.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/61-html-attributes.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/62-add-attribute-to-all-elements.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/07-types-deep-dive/62-add-attribute-to-all-elements.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/63-lazy-load-component.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/63-lazy-load-component.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/64-render-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/64-render-props.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/64.5-record-of-components-with-same-props.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/64.5-record-of-components-with-same-props.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/64.5-record-of-components-with-same-props.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/65-forward-ref-with-generics.explainer.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/65-forward-ref-with-generics.explainer.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/65-forward-ref-with-generics.explainer.3.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/66-forward-ref-as-local-function.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/66-forward-ref-as-local-function.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/66-forward-ref-as-local-function.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/67-hoc.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/67-hoc.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/67.5-hoc-for-generic-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/67.5-hoc-for-generic-components.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/69-as-prop.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/69-as-prop.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/69-as-prop.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/70-as-prop-with-custom-components.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/70-as-prop-with-custom-components.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/71-as-prop-with-default.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/71-as-prop-with-default.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/71-as-prop-with-default.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/72-as-prop-with-forward-ref.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/08-advanced-patterns/72-as-prop-with-forward-ref.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-external-libraries/73-react-hook-form.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-external-libraries/73-react-hook-form.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useRef')",
      "name": "src/09-external-libraries/74-react-hook-form-wrapper.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useRef')",
      "name": "src/09-external-libraries/74-react-hook-form-wrapper.solution.1.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useRef')",
      "name": "src/09-external-libraries/74-react-hook-form-wrapper.solution.2.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-external-libraries/75-react-select.problem.tsx"
    },
    {
      "assertionResults": [],
      "status": "passed",
      "message": "",
      "name": "src/09-external-libraries/75-react-select.solution.tsx"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useContext')",
      "name": "src/09-external-libraries/76-react-query.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useContext')",
      "name": "src/09-external-libraries/76-react-query.solution.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useContext')",
      "name": "src/09-external-libraries/77-react-query-wrapper.problem.ts"
    },
    {
      "assertionResults": [],
      "status": "failed",
      "message": "Cannot read properties of null (reading 'useContext')",
      "name": "src/09-external-libraries/77-react-query-wrapper.solution.ts"
    }
  ]
}
```