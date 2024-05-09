import {
  Select,
  SelectArrow,
  SelectItem,
  SelectItemCheck,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import { useEffect, useLayoutEffect, useState } from "react";
import list from "./list.js";
import "./styles.css";

function renderValue(value) {
  if (value.length === 0) return "No Locations selected";
  if (value.length === 1) return value[0];
  return `${value.length} Locations selected`;
}

export default function Example() {
  const [value, setValue] = useState(["Church"]);

  return (
    <div className="w-100">
      <SelectProvider value={value} setValue={setValue}>
        {/* <SelectLabel>Favorite food</SelectLabel> */}
        <Select className="button">
          {renderValue(value)}
          <SelectArrow />
        </Select>
        <SelectPopover gutter={4} sameWidth unmountOnHide className="popover">
          {list.map((value) => (
            <SelectItem key={value} value={value} className="select-item">
              <SelectItemCheck />
              {value}
            </SelectItem>
          ))}
        </SelectPopover>
      </SelectProvider>

      <div></div>
    </div>
  );
}
