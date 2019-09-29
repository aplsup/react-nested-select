import * as React from "react";
import { SelectOption, OnChangeHandler } from "./types";
import { OptionsContainer } from "./OptionsContainer";
import { isLeafElement, findLevel } from "./utils";
import { input } from "./styles"

export interface NestedSelectProps {
    options: SelectOption[];
    value?: string;
    onSelect: OnChangeHandler;
    name: string;
}

export interface NestedSelectState {

    previousValue?: string;
    currentOptions: SelectOption[];
    level: number;
}

export const NestedSelect = ({options, value, onSelect, name}: NestedSelectProps): React.ReactElement => {

    const defaultState: NestedSelectState = {
        currentOptions: options,
        level: 0,
    }

    const [state, setState] = React.useState<Readonly<NestedSelectState>>(defaultState);

    const onValueChange = (selection: SelectOption): void => {
        if (isLeafElement(selection)) {
            onSelect(selection.value);
            setState((prevState) => ({ ...prevState, 
                selectedValue: selection.value }));
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
    // eslint-disable-next-line
    const onGoUp = (): void => {
        setState((prevState) =>
                ({
                    ...prevState,
                    selectedValue: prevState.previousValue,
                    currentOptions: findLevel(options, prevState.currentOptions),
                    level: state.level - 1
                })
            );
    }

    const { currentOptions, level } = state;
    return (<div>
        <div style={input}>
            <input type="hidden" name={name}
                value={value ? value : ""} />
            <span>{value ? value : "---"}</span>
        </div>
        <div style={{marginTop: "5px"}}>
            <OptionsContainer
                onGoUp={onGoUp}
                showGoUp={level > 0}
                selectedValue={value}
                options={currentOptions}
                onValueChange={onValueChange} />
        </div>
    </div>);
}