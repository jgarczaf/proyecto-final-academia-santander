'use strict';

var index = require('./index--hWT2F8k.js');
var menuHorizontal_model = require('./menu-horizontal.model-cZ5JfpMN.js');

const AthMenuHorizontalItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * The accessible text of the badge
     */
    badgeLabel;
    /**
     * The value of the badge
     */
    badgeValue = undefined;
    /**
     * The maximum value inside the badge
     */
    badgeMax;
    /**
     * Whether the item is disabled or not
     */
    disabled;
    /**
     * Additional text to be appended to the aria-label to indicate that this is an external link
     */
    externalLabel = '(Se abre en una nueva ventana)';
    /**
     * The URL of the item
     */
    href;
    /**
     * The label of the item
     */
    label;
    /**
     * Whether the item is selected or not
     */
    selected;
    /**
     * Specifies the relationship of the linked URL
     */
    rel;
    /**
     * The target of the link
     */
    target = menuHorizontal_model.TargetType.Self;
    /*
     * Value of the item
     */
    value;
};

exports.ath_menu_horizontal_item = AthMenuHorizontalItem;
//# sourceMappingURL=ath-menu-horizontal-item.entry.cjs.js.map
