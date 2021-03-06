import * as React from "react";
import { NestedSelect } from "../src/NestedSelect";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


const options = [
    { value: "thor", label: "Thor" },
    { value: "ironman", label: "Iron Man" },
    {
        value: "loki", label: "Loki",
        children: [
            { value: "odino", label: "Odino" },
            { value: "spiderman", label: "Spider Man" },
            {
                value: "blackwidow", label: "Black Widow",
                children: [
                    { value: "vision", label: "Vision" }
                ]
            }
        ]
    }
]

const mockOnSelect = jest.fn();

describe("<NestedSelect/> suite", () => {
    it("renders all the first level options", () => {
        const { getByText } = render(<NestedSelect name={"testInput"} onSelect={mockOnSelect} options={options} />);
        expect(getByText(/Thor/)).toHaveTextContent("Thor");
        expect(getByText(/Iron/)).toHaveTextContent("Iron Man");
        expect(getByText(/Loki/)).toHaveTextContent("Loki");
    });

    it("renders the selected input value", () => {
        const selectedValue = "blackwidow"
        const { getByText } = render(<NestedSelect value={selectedValue} name={"testInput"} onSelect={mockOnSelect} options={options} />);
        expect(getByText("Black Widow")).toBeInTheDocument();
    });

    it("renders the the options at the value level", () => {
        const selectedValue = "blackwidow"
        const { getByText } = render(<NestedSelect value={selectedValue} name={"testInput"} onSelect={mockOnSelect} options={options} />);
        //expect(getByDisplayValue("selection")).toContainHTML("input");
        expect(getByText(/Vision/)).toBeInTheDocument();
    });
});
