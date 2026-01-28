'use strict';

var index = require('./index--hWT2F8k.js');

const AthMenuLateralItemAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The aria-label of the item
     */
    ariaLabel;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * The accesible label of the badge
     */
    badgeLabel;
    /**
     * The value inside the badge
     */
    badgeValue;
    /**
     * Weather the button is disabled
     */
    disabled = false;
    /**
     * The icon of the menu-button-item-action
     */
    icon;
    /**
     * The name of the item, usefull in order to identify the selected item
     */
    name;
    /**
     * Weather the button is selected
     */
    selected = false;
    /**
     * Tooltip text
     */
    tooltipText;
};

exports.ath_menu_lateral_item_action = AthMenuLateralItemAction;
//# sourceMappingURL=ath-menu-lateral-item-action.entry.cjs.js.map
