interface SelectOption {
    readonly label: string;
    value: string;
    children?: SelectOption[];
}

type OnChangeHandler = (value: string) => void;

export { SelectOption, OnChangeHandler }