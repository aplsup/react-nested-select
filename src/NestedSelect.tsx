import * as React from "react";
import { SelectOption, OnChangeHandler } from "./types";
import { OptionsContainer } from "./OptionsContainer";
import { isLeafElement, findLevel, findLevelBySelectedValue, InitialLevel } from "./utils";
import { Select } from "./Select";

export interface NestedSelectProps {
    options: SelectOption[];
    value?: string;
    onSelect: OnChangeHandler;
    name: string;
}

export interface NestedSelectState {
    currentOptions: SelectOption[];
    level: number;
    showOptions: boolean;
}

export const NestedSelect = ({ options, value, onSelect, name }: NestedSelectProps): React.ReactElement => {

    const initialLevel: InitialLevel = value ? findLevelBySelectedValue(options, value) :
        { options, level: 0, selectedOption: null };

    const defaultState: NestedSelectState = {
        currentOptions: initialLevel.options,
        level: initialLevel.level,
        showOptions: false,
    }

    const [state, setState] = React.useState<Readonly<NestedSelectState>>(defaultState);

    const onToggle = (): void => {
        setState((prevState) => ({ ...prevState, showOptions: !prevState.showOptions }));
    }

    const onValueChange = (selection: SelectOption): void => {
        if (isLeafElement(selection)) {
            onSelect(selection.value);
            setState((prevState) => ({
                ...prevState,
                selectedValue: selection.value,
                showOptions: false,
            }));
        } else {
            setState((prevState) =>
                ({
                    ...prevState,
                    selectedValue: selection.value,
                    currentOptions: selection.children as SelectOption[],
                    level: state.level + 1
                })
            );
        }
    }

    const onGoUp = (): void => {
        setState((prevState) =>
            ({
                ...prevState,
                currentOptions: findLevel(options, prevState.currentOptions),
                level: state.level - 1
            })
        );
    }

    const { currentOptions, level, showOptions } = state;
    return (
        <div>
            <Select value={initialLevel.selectedOption} name={name} onToggle={onToggle} />
            <div style={{ marginTop: "5px" }}>
                <OptionsContainer
                    show={showOptions}
                    onGoUp={onGoUp}
                    showGoUp={level > 0}
                    selectedValue={value}
                    options={currentOptions}
                    onValueChange={onValueChange} />
            </div>
        </div>
    );
}