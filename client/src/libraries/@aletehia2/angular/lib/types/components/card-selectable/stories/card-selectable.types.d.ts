export type CardSelectableGroupArgs = {
    'aria-label': string;
    'aria-labelledby': string;
    'disabled': boolean;
    'multiple': boolean;
    'size': string;
    'defaultSlot'?: string;
    'athValueChanged'?: (event: CustomEvent<void>) => void;
};
export type CardSelectableArgs = {
    'aria-label': string;
    'disabled': boolean;
    'heading-text': string;
    'overline': string;
    'selected': boolean;
    'size': string;
    'subtitle': string;
    'tag': string;
    'type': string;
    'bodySlot'?: string;
    'athChange'?: (event: CustomEvent<void>) => void;
    'athFocus'?: (event: CustomEvent<void>) => void;
    'athBlur'?: (event: CustomEvent<void>) => void;
};
export declare const cardSelectableOrdererArgs: Partial<CardSelectableArgs>;
export declare const cardSelectableGroupOrdererArgs: Partial<CardSelectableGroupArgs>;
export declare enum CardSelectableSlot {
    bodySlot = "<div slot=\"body\"><p class=\"ath-body--md\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>",
    defaultSlot = "<div class=\"ath-main\">\n        <div class=\"ath-container--sm ath-grid-g--2 ath-container-margin--sm ath-rowgap--sm\">\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" heading-text=\"card 1\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" disabled=\"true\" heading-text=\"card 2\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" heading-text=\"card 3\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" heading-text=\"card 4\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" heading-text=\"card 5\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n          <div class=\"ath-col--4\">\n            <ath-card-selectable overline=\"overline\" heading-text=\"card 6\" subtitle=\"Subtitle\" tag=\"tag\"></ath-card-selectable>\n          </div>\n        </div>\n      </div>"
}
