import { withActions } from "@storybook/addon-actions/decorator";
import { getAttributesFromArgs, iconNamesList } from "../../../../utils/storybook/index";
import { defaultArgs } from "./segmented-control-item.types";
import { segmentedControlItemArgTypes } from "./segmented-control-item.argtypes";
const meta = {
    title: 'Componentes/Segmented Control/Segmented Control Item',
    component: 'ath-segmented-control-item',
    args: { ...defaultArgs },
    argTypes: {
        ...segmentedControlItemArgTypes,
        icon: {
            ...segmentedControlItemArgTypes.icon,
            control: { type: 'select' },
            options: iconNamesList,
        },
    },
    decorators: [withActions],
    parameters: {
        actions: { handles: ['athChange'] },
        componentSubtitle: 'Ítem individual del componente Segmented Control.',
    },
    tags: ['autodocs'],
};
export default meta;
export const Playground = {
    render: (args) => {
        const attributes = getAttributesFromArgs(args, { exclude: ['athChange', 'defaultSlot'], boolean: ['disabled', 'selected'] });
        return `
    <ath-segmented-control>
      <ath-segmented-control-item ${attributes}>
        ${args.defaultSlot}
      </ath-segmented-control-item>
    </ath-segmented-control>`;
    },
    args: {
        ...defaultArgs,
    },
    tags: ['!autodocs'],
    parameters: {
        storyClass: 'flex-col w200',
    },
};
export const Selected = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: ['athChange', 'defaultSlot'], boolean: ['disabled', 'selected'] });
        return `
  <div class="story__item">
    <div class="story__item__label">Selected, color: primary</div>
    <ath-segmented-control color="primary">
      <ath-segmented-control-item>Not Selected</ath-segmented-control-item>
      <ath-segmented-control-item ${attributes}>Selected</ath-segmented-control-item>
    </ath-segmented-control>
  </div>
  <div class="story__item">
    <div class="story__item__label">Selected, color: secondary</div>
    <ath-segmented-control color="secondary">
      <ath-segmented-control-item>Not Selected</ath-segmented-control-item>
      <ath-segmented-control-item ${attributes}>Selected</ath-segmented-control-item>
    </ath-segmented-control>
  </div>
    `;
    },
    args: {
        ...defaultArgs,
        selected: true,
    },
    parameters: {
        controls: {
            exclude: ['selected', 'athChange'],
        },
        storyClass: 'flex',
    },
};
export const Disabled = {
    render: args => {
        const attributes = getAttributesFromArgs(args, { exclude: ['athChange', 'defaultSlot'], boolean: ['disabled', 'selected'] });
        return `
  <div class="story__item">
    <ath-segmented-control>
      <ath-segmented-control-item>Enabled</ath-segmented-control-item>
      <ath-segmented-control-item ${attributes}>Disabled</ath-segmented-control-item>
    </ath-segmented-control>
  </div>
   `;
    },
    args: {
        ...defaultArgs,
        disabled: true,
    },
    parameters: {
        controls: {
            exclude: ['disabled', 'athChange', 'defaultSlot'],
        },
        storyClass: 'flex',
    },
};
//# sourceMappingURL=segmented-control-item.stories.js.map
