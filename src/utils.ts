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
