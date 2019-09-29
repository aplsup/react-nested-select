import * as React from "react"
import { SelectOption } from "./types";
import { listItem } from "./styles";

export interface OptionProps {
    onSelect: (event: React.SyntheticEvent) => void;
    isSelected: boolean;
    option: SelectOption;
    isLeaf?: boolean;
}

export const NestedSelectItem = ({ isLeaf, onSelect, option, isSelected = false }: OptionProps): React.ReactElement => {
    return isLeaf ?
        <div onClick={onSelect} style={listItem}>
            {option.label} {isSelected ? "*" : ""}
        </div> :
        <div onClick={onSelect} style={listItem}>
            {option.label} {" >"}
        </div>;
}