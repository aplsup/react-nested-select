import * as React from "react"
import { SelectOption } from "./types";
import { listItem } from "./styles";
import SvgArrow from "./shapes/SvgArrow";

export interface OptionProps {
    onSelect: (event: React.SyntheticEvent) => void;
    isSelected: boolean;
    option: SelectOption;
    isLeaf?: boolean;
}

export const NestedSelectItem = ({ isLeaf, onSelect, option }: OptionProps): React.ReactElement => {
    return isLeaf ?
        <div onClick={onSelect} style={listItem}>
            {option.label}
        </div> :
        <div onClick={onSelect} style={listItem}>
            <div>{option.label} </div>
            <SvgArrow />
        </div>;
}
