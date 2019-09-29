import * as React from "react";
import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { NestedSelect } from "../src/NestedSelect";
import { SelectOption } from "../src/types";

const options: SelectOption[] = [
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

const App = (): React.ReactElement => {

  const [value, setValue] = React.useState("");
  console.log("Value", value);

  return (
    <div style={{width: "200px"}}>
      <NestedSelect value={value}
         options={options}
         onSelect={(value): void => {
           console.log(">>>>>");
           setValue(value)
        }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
