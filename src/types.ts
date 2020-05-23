interface SelectOption {
    readonly label: string;
    value: string;
    children?: SelectOption[];
}

type OnSelect = (value: string) => void;

interface NestedSelectProps {
    options: SelectOption[];
    value?: string;
    onSelect: OnSelect;
    name: string;
}

interface NestedSelectState {
    currentOptions: SelectOption[];
    level: number;
    showOptions: boolean;
}

export { SelectOption, OnSelect, NestedSelectProps, NestedSelectState }
