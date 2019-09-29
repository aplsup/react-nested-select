import React from "react";
import { NestedSelectItem } from "./NestedSelectItem";
import { SelectOption } from "./types";
import { isLeafElement } from "./utils";
import * as styles from "./styles";

interface OptionsContainerProps {
    showGoUp: boolean;
    options: SelectOption[];
    selectedValue?: string;
    onValueChange: (value: SelectOption) => void;
    onGoUp: () => void;
    show: boolean;
}

export const OptionsContainer = (props: OptionsContainerProps): React.ReactElement => {
    const { selectedValue, onValueChange, options, showGoUp, show } = props;
    const style = styles.optionsContainer(show);
    return (
        <div style={style}>
            {showGoUp && <div onClick={(): void => props.onGoUp()}>
                {"..."}
            </div>}
            {options.map((option: SelectOption, index: number) => {
                return (<NestedSelectItem
                    isLeaf={isLeafElement(option)}
                    isSelected={option.value === selectedValue}
                    option={option}
                    key={"option_" + index}
                    onSelect={(): void => onValueChange(option)}
                />);
            })}
        </div>
    )
}
