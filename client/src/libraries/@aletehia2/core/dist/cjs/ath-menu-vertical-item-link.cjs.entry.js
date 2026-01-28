'use strict';

var index = require('./index--hWT2F8k.js');

const menuItemLinkTargets = {
    Blank: 'blank'};

const AthMenuVerticalItemLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Whether the link is selected
     */
    selected = false;
    /**
     * Whether the link is disabled
     */
    disabled = false;
    /**
     * Icon of the item
     **/
    icon;
    /**
     * Title of the link
     **/
    text;
    /**
     * Value of the item, in order to identify it.
     **/
    value;
    /**
     * URL of the link
     **/
    href;
    /**
     * target of the link: blank | self
     **/
    target = menuItemLinkTargets.Blank;
    /**
     * rel of the link
     **/
    rel;
    /**
     * The text that indicates that the link open a new window
     **/
    externalLabel = 'Se abre en una nueva ventana';
};

exports.ath_menu_vertical_item_link = AthMenuVerticalItemLink;
//# sourceMappingURL=ath-menu-vertical-item-link.entry.cjs.js.map
