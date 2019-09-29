import * as React from "react";
import { input } from "./styles"
import { SelectOption } from "./types";

export interface SelectProps {
    value: SelectOption | null;
    name: string;
    onToggle: () => void;
}

export const Select = ({value, name, onToggle}: SelectProps): React.ReactElement => {
    return (<div style={input} onClick={(): void => onToggle()}>
        <input type="hidden" name={name}
            value={value ? value.value : ""} />
        <span>{value ? value.label : "---"}</span>
    </div>);
}