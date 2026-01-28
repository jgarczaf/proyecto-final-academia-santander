'use strict';

var index = require('./index--hWT2F8k.js');
var menuLateral_model = require('./menu-lateral.model-CzojsaWw.js');

const AthMenuLateralItemLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The aria-label of the item
     */
    ariaLabel;
    /**
     * The accesible label of the badge
     */
    badgeLabel;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * The value inside the badge
     */
    badgeValue;
    /**
     * Weather the button is disabled
     */
    disabled = false;
    /**
     * The icon of the menu-button-item-link
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
    /**
     * The text that indicates that the link open a new window
     */
    externalLabel = 'Se abre en una nueva ventana';
    /**
     * The URL of the link
     */
    href;
    /**
     * The rel of the link
     */
    rel;
    /**
     * The target of the link
     */
    target = menuLateral_model.TargetType.Self;
};

exports.ath_menu_lateral_item_link = AthMenuLateralItemLink;
//# sourceMappingURL=ath-menu-lateral-item-link.entry.cjs.js.map
