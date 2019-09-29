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
}

export const OptionsContainer = (props: OptionsContainerProps): React.ReactElement => {
    const { selectedValue, onValueChange, options, showGoUp } = props;
    return (
        <div style={styles.optionsContainer}>
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