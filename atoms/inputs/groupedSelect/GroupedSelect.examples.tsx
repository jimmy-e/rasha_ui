import React, { useState } from "react";
import { GroupedSelect } from "./GroupedSelect";

const options = [
  {
    label: "fruits",
    children: [
      { label: "apple", value: "apple" },
      { label: "banana", value: "banana" },
      { label: "cantaloupe", value: "cantaloupe" },
    ],
  },
  {
    label: "vegetables",
    children: [
      { label: "asparagus", value: "asparagus" },
      { label: "broccoli", value: "broccoli" },
      { label: "carrot", value: "carrot" },
    ],
  },
  {
    label: "dairy",
    children: [
      { label: "almond milk", value: "almond milk" },
      { label: "butter", value: "butter" },
      { label: "cheese", value: "cheese" },
    ],
  },
];

export const DefaultExample: React.FC = (props) => {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <GroupedSelect
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
      {...props}
    />
  );
};

export const DisabledExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <GroupedSelect
      disabled
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};

export const FullWidthExample: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>();

  return (
    <GroupedSelect
      fullWidth
      onChange={(value) => setSelectedValue(value)}
      options={options}
      value={selectedValue}
    />
  );
};
