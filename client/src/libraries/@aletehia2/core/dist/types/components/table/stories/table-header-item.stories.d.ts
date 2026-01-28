import type { Meta, StoryObj } from '@storybook/html';
type TableHeaderItemArgs = {
    'alignment': string;
    'cell-width': string;
    'frozen': string;
    'has-interactivity': boolean;
    'defaultSlot': string;
};
declare const meta: Meta<TableHeaderItemArgs>;
export default meta;
type Story = StoryObj<TableHeaderItemArgs>;
export declare const Playground: Story;
export declare const CellWidth: Story;
export declare const Alignment: Story;
