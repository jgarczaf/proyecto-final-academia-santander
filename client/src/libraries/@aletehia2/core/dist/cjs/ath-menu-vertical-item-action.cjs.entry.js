'use strict';

var index = require('./index--hWT2F8k.js');

const AthMenuVerticalItemAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Whether the item is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Whether an item with children is open by default.
     */
    open = false;
    /**
     * Whether the item is selected
     */
    selected = false;
    /**
     * Title of the item
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
};

exports.ath_menu_vertical_item_action = AthMenuVerticalItemAction;
//# sourceMappingURL=ath-menu-vertical-item-action.entry.cjs.js.map
