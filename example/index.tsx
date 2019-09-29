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

interface AppProps {
  value? : string;
}

const App = ({value}: AppProps): React.ReactElement => {

  const [stateValue, setValue] = React.useState(value);
  console.log("Value", value);

  return (
    <div style={{width: "200px"}}>
      <NestedSelect value={stateValue}
         name={"sample"}
         options={options}
         onSelect={(selectedValue): void => {
           console.log(">>>>>");
           setValue(selectedValue)
        }} />
    </div>
  );
};

ReactDOM.render(<App value={"odino"} />, document.getElementById("root"));
