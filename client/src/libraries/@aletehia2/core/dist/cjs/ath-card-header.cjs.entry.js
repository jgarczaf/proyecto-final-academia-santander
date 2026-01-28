'use strict';

var index = require('./index--hWT2F8k.js');

const AthCardHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Title of the card header
     **/
    headingText;
    /**
     * date of the card header
     **/
    date;
    /**
     * Overline of the card header
     **/
    overline;
    /**
     * Subtitle of the card
     **/
    subtitle;
};

exports.ath_card_header = AthCardHeader;
//# sourceMappingURL=ath-card-header.entry.cjs.js.map
