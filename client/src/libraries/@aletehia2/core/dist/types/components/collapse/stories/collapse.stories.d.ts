import type { Meta, StoryObj } from '@storybook/html';
type CollapseArgs = {
    show: boolean;
    defaultSlot: string;
    athCollapseState: (event: CustomEvent<{
        id: string;
        isExpanded: boolean;
    }>) => void;
    athToggleCollapse: (event: CustomEvent<string>) => void;
};
declare const meta: Meta<CollapseArgs>;
export default meta;
type Story = StoryObj<CollapseArgs>;
export declare const Playground: Story;
export declare const Show: Story;
