import React from "react";
import {
  Config,
  createStory,
  DemoContainer,
  DesignTemplate,
  Story,
  Variations,
} from "@sb/index";
import { GroupedSelect, GroupedSelectProps } from "./GroupedSelect";
import {
  DefaultExample,
  DisabledExample,
  FullWidthExample,
} from "./GroupedSelect.examples";

// ----- VARIATIONS ----- //

const variations: Variations = [
  {
    components: [
      <DemoContainer direction="column" grow label="active">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="disabled">
        <DisabledExample />
      </DemoContainer>,
    ],
    description: "A select can either be active or disabled.",
    title: "Active States",
  },
  {
    components: [
      <DemoContainer direction="column" grow label="not full width">
        <DefaultExample />
      </DemoContainer>,
      <DemoContainer direction="column" grow label="full width">
        <FullWidthExample />
      </DemoContainer>,
    ],
    description:
      "The component can take up the full width of its parent container.",
    title: "Full Width",
  },
];

// ----- INVOCATION ----- //

const config: Config = {
  folder: "inputs",
  root: "atoms",
  title: "Grouped Select",
};

export default createStory(GroupedSelect, config);

export const GroupedSelectDocs: Story<GroupedSelectProps> = (args) => (
  <DefaultExample {...args} />
);

export const GroupedSelectComponent: Story = () => (
  <DesignTemplate
    config={config}
    demo={<DefaultExample />}
    variations={variations}
  />
);
