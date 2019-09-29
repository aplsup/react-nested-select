import { SelectOption } from "./types";

export const isLeafElement = (option: SelectOption): boolean => {
    return !option.children || option.children.length === 0;
}


export const findLevel = (model: SelectOption[], displayedOptions: SelectOption[]): SelectOption[] => {
    for (const element of model) {
        if (element.children) {
            if (element.children === displayedOptions) {
                return model;
            } else {
                return findLevel(element.children, displayedOptions);
            }
        }
    }
    throw new Error("Cannot find model");
}

export type InitialLevel = {
    options: SelectOption[];
    level: number;
    selectedOption: SelectOption | null;
}

export const findLevelBySelectedValue = (model: SelectOption[], value?: string, level = 0): InitialLevel => {
    if (!value) {
        return { options: model, level, selectedOption: null };
    }
    for (const option of model) {
        if (option.value === value) {
            return option.children ? { options: option.children, level, selectedOption: option } :
                { options: model, level, selectedOption: option };
        } else if (option.children && option.children.length > 0) {
            return findLevelBySelectedValue(option.children, value, level + 1);
        }
    }
    throw new Error("Cannot find options for value " + value);
}
