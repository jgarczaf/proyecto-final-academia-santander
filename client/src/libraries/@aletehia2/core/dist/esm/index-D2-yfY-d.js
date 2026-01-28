const NAMESPACE = 'aletheia2';
const BUILD = /* aletheia2 */ { hydratedSelectorName: "hydrated", lazyLoad: true, slotRelocation: true, updatable: true};

const globalScripts = () => {};
const globalStyles = "input,button,select,textarea{font-weight:normal;font-style:normal;font-size:100%;text-decoration:none;box-sizing:border-box}audio:not([controls]){display:none;height:0}a{cursor:pointer}button,input[type=button],input[type=reset],input[type=submit]{cursor:pointer}button[disabled],input[disabled]{cursor:default}a:not([class]){text-decoration-skip-ink:auto}@media (prefers-reduced-motion: reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}html{font-size:100%}@font-face{font-family:\"Aletheia\";font-weight:300;src:url(\"assets/fonts/aletheia/Aletheia-Light.ttf\") format(\"truetype\")}@font-face{font-family:\"Aletheia\";font-weight:400;src:url(\"assets/fonts/aletheia/Aletheia-Regular.ttf\") format(\"truetype\")}@font-face{font-family:\"Aletheia\";font-weight:500;src:url(\"assets/fonts/aletheia/Aletheia-Medium.ttf\") format(\"truetype\")}@font-face{font-family:\"Aletheia\";font-weight:700;src:url(\"assets/fonts/aletheia/Aletheia-Bold.ttf\") format(\"truetype\")}@font-face{font-family:\"Aletheia\";font-weight:600;src:url(\"assets/fonts/aletheia/Aletheia-Italic.ttf\") format(\"truetype\")}:root{--ath-spacing-multiply-4:0.25rem;--ath-spacing-multiply-8:0.5rem;--ath-color-blue-ntt-10:#070F26;--ath-color-blue-ntt-15:#012E4C;--ath-color-blue-ntt-20:#013D65;--ath-color-blue-ntt-30:#004A7A;--ath-color-blue-ntt-40:#005B96;--ath-color-blue-ntt-50:#0072BC;--ath-color-blue-ntt-60:#038BE3;--ath-color-blue-ntt-65:#19A3FC;--ath-color-blue-ntt-70:#68C3FD;--ath-color-blue-ntt-80:#9AD7FE;--ath-color-blue-ntt-90:#B3E1FE;--ath-color-blue-ntt-95:#E6F5FF;--ath-color-turquoise-ntt-10:#003033;--ath-color-turquoise-ntt-15:#00484D;--ath-color-turquoise-ntt-20:#009099;--ath-color-turquoise-ntt-30:#009AA4;--ath-color-turquoise-ntt-40:#00C0CC;--ath-color-turquoise-ntt-50:#00DFED;--ath-color-turquoise-ntt-60:#00F0FF;--ath-color-turquoise-ntt-65:#5CF5FF;--ath-color-turquoise-ntt-70:#7BF7FF;--ath-color-turquoise-ntt-80:#99F9FF;--ath-color-turquoise-ntt-90:#CCFCFF;--ath-color-turquoise-ntt-95:#E5FDFF;--ath-color-green-ntt-10:#003317;--ath-color-green-ntt-15:#004D23;--ath-color-green-ntt-20:#00662F;--ath-color-green-ntt-30:#068941;--ath-color-green-ntt-40:#00B252;--ath-color-green-ntt-50:#00CB5D;--ath-color-green-ntt-60:#00EB6B;--ath-color-green-ntt-65:#38F990;--ath-color-green-ntt-70:#6AFBAC;--ath-color-green-ntt-80:#9CFCC8;--ath-color-green-ntt-90:#CDFEE3;--ath-color-green-ntt-95:#E6FEF1;--ath-color-gray-ntt-10:#1A1A1A;--ath-color-gray-ntt-15:#262626;--ath-color-gray-ntt-20:#333333;--ath-color-gray-ntt-30:#4D4D4D;--ath-color-gray-ntt-40:#666666;--ath-color-gray-ntt-50:#949494;--ath-color-gray-ntt-60:#A1A1A1;--ath-color-gray-ntt-65:#ADADAD;--ath-color-gray-ntt-70:#BFBFBF;--ath-color-gray-ntt-80:#D9D9D9;--ath-color-gray-ntt-90:#E8E8E8;--ath-color-gray-ntt-95:#F2F2F2;--ath-color-gray-ntt-100:#FFFFFF;--ath-color-gray-ntt-00:#121212;--ath-color-slate-gray-ntt-10:#131B20;--ath-color-slate-gray-ntt-15:#1D2830;--ath-color-slate-gray-ntt-20:#263540;--ath-color-slate-gray-ntt-30:#2E404D;--ath-color-slate-gray-ntt-40:#3D5566;--ath-color-slate-gray-ntt-50:#506F86;--ath-color-slate-gray-ntt-60:#86A2B7;--ath-color-slate-gray-ntt-65:#8FA9BC;--ath-color-slate-gray-ntt-70:#9FB6C6;--ath-color-slate-gray-ntt-80:#BFCED9;--ath-color-slate-gray-ntt-90:#DFE7EC;--ath-color-slate-gray-ntt-95:#EFF3F5;--ath-color-green-10:#0C2A09;--ath-color-green-15:#123E0E;--ath-color-green-20:#185313;--ath-color-green-30:#257D1C;--ath-color-green-40:#30A626;--ath-color-green-50:#3CD02F;--ath-color-green-60:#65D959;--ath-color-green-65:#77DE6E;--ath-color-green-70:#8BE382;--ath-color-green-80:#B2ECAC;--ath-color-green-90:#D8F6D5;--ath-color-green-95:#ECFAEA;--ath-color-red-10:#330600;--ath-color-red-15:#4C0900;--ath-color-red-20:#660B00;--ath-color-red-30:#991100;--ath-color-red-40:#CC1700;--ath-color-red-50:#FF1C00;--ath-color-red-60:#FF4A33;--ath-color-red-65:#FF604D;--ath-color-red-70:#FF7766;--ath-color-red-80:#FFA599;--ath-color-red-90:#FFC9C2;--ath-color-red-95:#FFEDEB;--ath-color-yellow-10:#321E01;--ath-color-yellow-15:#4B2D01;--ath-color-yellow-20:#653D01;--ath-color-yellow-30:#975B02;--ath-color-yellow-40:#CA7902;--ath-color-yellow-50:#FC9703;--ath-color-yellow-60:#FDAC35;--ath-color-yellow-65:#FDB74F;--ath-color-yellow-70:#FDC168;--ath-color-yellow-80:#FED59A;--ath-color-yellow-90:#FEEECD;--ath-color-yellow-95:#FFF6E6;--ath-color-blue-10:#001433;--ath-color-blue-15:#001F4D;--ath-color-blue-20:#002966;--ath-color-blue-30:#003D99;--ath-color-blue-40:#0057DB;--ath-color-blue-50:#0166FF;--ath-color-blue-60:#3385FF;--ath-color-blue-65:#4D94FF;--ath-color-blue-70:#66A2FF;--ath-color-blue-80:#92BDFF;--ath-color-blue-90:#CCE0FF;--ath-color-blue-95:#E5F0FF;--ath-color-black-alpha-0:rgba(18,18,18,0.00);--ath-color-black-alpha-5:rgba(18,18,18,0.05);--ath-color-black-alpha-10:rgba(18,18,18,0.1);--ath-color-black-alpha-20:rgba(18,18,18,0.2);--ath-color-black-alpha-30:rgba(18,18,18,0.3);--ath-color-black-alpha-40:rgba(18,18,18,0.4);--ath-color-black-alpha-50:rgba(18,18,18,0.5);--ath-color-black-alpha-60:rgba(18,18,18,0.6);--ath-color-black-alpha-65:rgba(18,18,18,0.65);--ath-color-black-alpha-70:rgba(18,18,18,0.7);--ath-color-black-alpha-80:rgba(18,18,18,0.8);--ath-color-white-alpha-0:rgba(255,255,255,0.00);--ath-color-white-alpha-5:rgba(255,255,255,0.05);--ath-color-white-alpha-10:rgba(255,255,255,0.1);--ath-color-white-alpha-20:rgba(255,255,255,0.2);--ath-color-white-alpha-30:rgba(255,255,255,0.3);--ath-color-white-alpha-40:rgba(255,255,255,0.4);--ath-color-white-alpha-50:rgba(255,255,255,0.5);--ath-color-white-alpha-60:rgba(255,255,255,0.6);--ath-color-white-alpha-70:rgba(255,255,255,0.7);--ath-color-white-alpha-80:rgba(255,255,255,0.82);--ath-color-white-alpha-90:rgba(255,255,255,0.9);--ath-color-canary-10:#292000;--ath-color-canary-15:#4D3B00;--ath-color-canary-20:#664F00;--ath-color-canary-30:#997700;--ath-color-canary-40:#CC9E00;--ath-color-canary-50:#FFC600;--ath-color-canary-60:#FFD133;--ath-color-canary-65:#FFD74D;--ath-color-canary-70:#FFDD66;--ath-color-canary-80:#FFE899;--ath-color-canary-90:#FFF4CC;--ath-color-canary-95:#FFF9E5;--ath-color-forest-10:#133300;--ath-color-forest-15:#1C4D00;--ath-color-forest-20:#266600;--ath-color-forest-30:#2F8000;--ath-color-forest-40:#358F00;--ath-color-forest-50:#3BA000;--ath-color-forest-60:#4BCC00;--ath-color-forest-65:#7EFF33;--ath-color-forest-70:#9EFF66;--ath-color-forest-80:#BFFF99;--ath-color-forest-90:#DFFFCC;--ath-color-forest-95:#EFFFE5;--ath-color-lavander-10:#260D21;--ath-color-lavander-15:#381431;--ath-color-lavander-20:#4B1B41;--ath-color-lavander-30:#712862;--ath-color-lavander-40:#963683;--ath-color-lavander-50:#AE3E97;--ath-color-lavander-60:#C969B6;--ath-color-lavander-65:#D07BBF;--ath-color-lavander-70:#D78EC8;--ath-color-lavander-80:#E4B4DA;--ath-color-lavander-90:#F2D9ED;--ath-color-lavander-95:#F8ECF6;--ath-color-orange-10:#331800;--ath-color-orange-15:#4D2400;--ath-color-orange-20:#663000;--ath-color-orange-30:#994900;--ath-color-orange-40:#CC6100;--ath-color-orange-50:#FF7900;--ath-color-orange-60:#FF9433;--ath-color-orange-65:#FFA14D;--ath-color-orange-70:#FFAF66;--ath-color-orange-80:#FFC999;--ath-color-orange-90:#FFE4CC;--ath-color-orange-95:#FFF2E5;--ath-font-family-noto:Noto Sans;--ath-font-family-roboto:Roboto;--ath-font-family-mulish:Mulish;--ath-font-family-poppins:Poppins;--ath-font-size-1:1rem;--ath-font-size-2:2rem;--ath-font-size-3:3rem;--ath-font-size-0-688:0.688rem;--ath-font-size-0-75:0.75rem;--ath-font-size-0-875:0.875rem;--ath-font-size-1-125:1.125rem;--ath-font-size-1-25:1.25rem;--ath-font-size-1-375:1.375rem;--ath-font-size-1-5:1.5rem;--ath-font-size-1-625:1.625rem;--ath-font-size-1-75:1.75rem;--ath-font-size-1-875:1.875rem;--ath-font-size-2-25:2.25rem;--ath-font-size-2-5:2.5rem;--ath-font-size-2-75:2.75rem;--ath-font-size-3-25:3.25rem;--ath-font-weight-300:300;--ath-font-weight-400:400;--ath-font-weight-500:500;--ath-font-weight-700:700;--ath-font-line-height-1:1rem;--ath-font-line-height-2:2rem;--ath-font-line-height-percent-120:1.2;--ath-font-line-height-percent-130:1.3;--ath-font-line-height-percent-140:1.4;--ath-font-line-height-percent-150:1.5;--ath-font-line-height-1-5:1.5rem;--ath-font-line-height-1-25:1.25rem;--ath-border-radius-multiply-8:8px;--ath-border-width-0:0px;--ath-border-width-1:1px;--ath-border-width-2:2px;--ath-border-width-4:4px;--ath-border-width-8:8px;--ath-border-width-16:16px}:root{--ath-font-text-decoration-underline:underline;--ath-font-text-decoration-none:none;--ath-font-text-decoration-line-through:line-through;--ath-box-shadow-position-x-0:0px;--ath-box-shadow-position-y-0:0;--ath-box-shadow-position-y-2:2px;--ath-box-shadow-position-y-4:4px;--ath-box-shadow-position-y-8:8px;--ath-box-shadow-position-y-16:16px;--ath-box-shadow-blur-0:0;--ath-box-shadow-blur-4:4px;--ath-box-shadow-blur-8:8px;--ath-box-shadow-blur-16:16px;--ath-box-shadow-blur-32:32px;--ath-box-shadow-spread-0:0;--ath-spacing-base:var(--ath-spacing-multiply-8);--ath-color-primary-10:var(--ath-color-blue-ntt-10);--ath-color-primary-15:var(--ath-color-blue-ntt-15);--ath-color-primary-20:var(--ath-color-blue-ntt-20);--ath-color-primary-30:var(--ath-color-blue-ntt-30);--ath-color-primary-40:var(--ath-color-blue-ntt-40);--ath-color-primary-50:var(--ath-color-blue-ntt-50);--ath-color-primary-60:var(--ath-color-blue-ntt-60);--ath-color-primary-65:var(--ath-color-blue-ntt-65);--ath-color-primary-70:var(--ath-color-blue-ntt-70);--ath-color-primary-80:var(--ath-color-blue-ntt-80);--ath-color-primary-90:var(--ath-color-blue-ntt-90);--ath-color-primary-95:var(--ath-color-blue-ntt-95);--ath-color-secondary-10:var(--ath-color-gray-ntt-10);--ath-color-secondary-15:var(--ath-color-gray-ntt-15);--ath-color-secondary-20:var(--ath-color-gray-ntt-20);--ath-color-secondary-30:var(--ath-color-gray-ntt-30);--ath-color-secondary-40:var(--ath-color-gray-ntt-40);--ath-color-secondary-50:var(--ath-color-gray-ntt-50);--ath-color-secondary-60:var(--ath-color-gray-ntt-60);--ath-color-secondary-65:var(--ath-color-gray-ntt-65);--ath-color-secondary-70:var(--ath-color-gray-ntt-70);--ath-color-secondary-80:var(--ath-color-gray-ntt-80);--ath-color-secondary-90:var(--ath-color-gray-ntt-90);--ath-color-secondary-95:var(--ath-color-gray-ntt-95);--ath-color-secondary-100:var(--ath-color-gray-ntt-100);--ath-color-secondary-00:var(--ath-color-gray-ntt-00);--ath-color-accent-10:var(--ath-color-turquoise-ntt-10);--ath-color-accent-15:var(--ath-color-turquoise-ntt-15);--ath-color-accent-20:var(--ath-color-turquoise-ntt-20);--ath-color-accent-30:var(--ath-color-turquoise-ntt-30);--ath-color-accent-40:var(--ath-color-turquoise-ntt-40);--ath-color-accent-50:var(--ath-color-turquoise-ntt-50);--ath-color-accent-60:var(--ath-color-turquoise-ntt-60);--ath-color-accent-65:var(--ath-color-turquoise-ntt-65);--ath-color-accent-70:var(--ath-color-turquoise-ntt-70);--ath-color-accent-80:var(--ath-color-turquoise-ntt-80);--ath-color-accent-90:var(--ath-color-turquoise-ntt-90);--ath-color-accent-95:var(--ath-color-turquoise-ntt-95);--ath-color-success-10:var(--ath-color-green-10);--ath-color-success-15:var(--ath-color-green-15);--ath-color-success-20:var(--ath-color-green-20);--ath-color-success-30:var(--ath-color-green-30);--ath-color-success-40:var(--ath-color-green-40);--ath-color-success-50:var(--ath-color-green-50);--ath-color-success-60:var(--ath-color-green-60);--ath-color-success-65:var(--ath-color-green-65);--ath-color-success-70:var(--ath-color-green-70);--ath-color-success-80:var(--ath-color-green-80);--ath-color-success-90:var(--ath-color-green-90);--ath-color-success-95:var(--ath-color-green-95);--ath-color-danger-10:var(--ath-color-red-10);--ath-color-danger-15:var(--ath-color-red-15);--ath-color-danger-20:var(--ath-color-red-20);--ath-color-danger-30:var(--ath-color-red-30);--ath-color-danger-40:var(--ath-color-red-40);--ath-color-danger-50:var(--ath-color-red-50);--ath-color-danger-60:var(--ath-color-red-60);--ath-color-danger-65:var(--ath-color-red-65);--ath-color-danger-70:var(--ath-color-red-70);--ath-color-danger-80:var(--ath-color-red-80);--ath-color-danger-90:var(--ath-color-red-90);--ath-color-danger-95:var(--ath-color-red-95);--ath-color-warning-10:var(--ath-color-yellow-10);--ath-color-warning-15:var(--ath-color-yellow-15);--ath-color-warning-20:var(--ath-color-yellow-20);--ath-color-warning-30:var(--ath-color-yellow-30);--ath-color-warning-40:var(--ath-color-yellow-40);--ath-color-warning-50:var(--ath-color-yellow-50);--ath-color-warning-60:var(--ath-color-yellow-60);--ath-color-warning-65:var(--ath-color-yellow-65);--ath-color-warning-70:var(--ath-color-yellow-70);--ath-color-warning-80:var(--ath-color-yellow-80);--ath-color-warning-90:var(--ath-color-yellow-90);--ath-color-warning-95:var(--ath-color-yellow-95);--ath-color-info-10:var(--ath-color-blue-10);--ath-color-info-15:var(--ath-color-blue-15);--ath-color-info-20:var(--ath-color-blue-20);--ath-color-info-30:var(--ath-color-blue-30);--ath-color-info-40:var(--ath-color-blue-40);--ath-color-info-50:var(--ath-color-blue-50);--ath-color-info-60:var(--ath-color-blue-60);--ath-color-info-65:var(--ath-color-blue-65);--ath-color-info-70:var(--ath-color-blue-70);--ath-color-info-80:var(--ath-color-blue-80);--ath-color-info-90:var(--ath-color-blue-90);--ath-color-info-95:var(--ath-color-blue-95);--ath-font-family-primary:var(--ath-font-family-noto);--ath-font-size-10:var(--ath-font-size-2-25);--ath-font-size-11:var(--ath-font-size-2-75);--ath-font-size-01:var(--ath-font-size-0-688);--ath-font-size-02:var(--ath-font-size-0-75);--ath-font-size-03:var(--ath-font-size-0-875);--ath-font-size-04:var(--ath-font-size-1);--ath-font-size-05:var(--ath-font-size-1-125);--ath-font-size-06:var(--ath-font-size-1-25);--ath-font-size-07:var(--ath-font-size-1-5);--ath-font-size-08:var(--ath-font-size-1-75);--ath-font-size-09:var(--ath-font-size-2);--ath-font-weight-light:var(--ath-font-weight-300);--ath-font-weight-regular:var(--ath-font-weight-400);--ath-font-weight-medium:var(--ath-font-weight-500);--ath-font-weight-bold:var(--ath-font-weight-700);--ath-font-line-height-dynamic-01:var(--ath-font-line-height-percent-120);--ath-font-line-height-dynamic-02:var(--ath-font-line-height-percent-130);--ath-font-line-height-dynamic-03:var(--ath-font-line-height-percent-140);--ath-font-line-height-dynamic-04:var(--ath-font-line-height-percent-150);--ath-font-line-height-static-01:var(--ath-font-line-height-1);--ath-font-line-height-static-02:var(--ath-font-line-height-1-25);--ath-font-line-height-static-03:var(--ath-font-line-height-1-5);--ath-font-line-height-static-04:var(--ath-font-line-height-2);--ath-border-radius-100:calc(var(--ath-border-radius-multiply-8) *1);--ath-border-radius-150:calc(var(--ath-border-radius-multiply-8) *1.50);--ath-border-radius-200:calc(var(--ath-border-radius-multiply-8) *2);--ath-border-radius-250:calc(var(--ath-border-radius-multiply-8) *2.50);--ath-border-radius-300:calc(var(--ath-border-radius-multiply-8) *3);--ath-border-radius-400:calc(var(--ath-border-radius-multiply-8) *4);--ath-border-radius-999:calc(var(--ath-border-radius-multiply-8) *2000);--ath-border-radius-000:calc(var(--ath-border-radius-multiply-8) *0);--ath-border-radius-025:calc(var(--ath-border-radius-multiply-8) *0.25);--ath-border-radius-050:calc(var(--ath-border-radius-multiply-8) *0.50);--ath-border-radius-075:calc(var(--ath-border-radius-multiply-8) *0.75);--ath-spacing-100:calc(var(--ath-spacing-base) *1);--ath-spacing-150:calc(var(--ath-spacing-base) *1.50);--ath-spacing-200:calc(var(--ath-spacing-base) *2);--ath-spacing-250:calc(var(--ath-spacing-base) *2.5);--ath-spacing-300:calc(var(--ath-spacing-base) *3);--ath-spacing-400:calc(var(--ath-spacing-base) *4);--ath-spacing-500:calc(var(--ath-spacing-base) *5);--ath-spacing-600:calc(var(--ath-spacing-base) *6);--ath-spacing-700:calc(var(--ath-spacing-base) *7);--ath-spacing-800:calc(var(--ath-spacing-base) *8);--ath-spacing-900:calc(var(--ath-spacing-base) *9);--ath-spacing-1000:calc(var(--ath-spacing-base) *10);--ath-spacing-1100:calc(var(--ath-spacing-base) *11);--ath-spacing-1200:calc(var(--ath-spacing-base) *12);--ath-spacing-1300:calc(var(--ath-spacing-base) *13);--ath-spacing-2000:calc(var(--ath-spacing-base) *20);--ath-spacing-000:calc(var(--ath-spacing-base) *0);--ath-spacing-025:calc(var(--ath-spacing-base) *0.25);--ath-spacing-050:calc(var(--ath-spacing-base) *0.5);--ath-spacing-075:calc(var(--ath-spacing-base) *0.75)}:root{--ath-font-size-brand-overline:var(--ath-font-size-0-75);--ath-font-size-brand-display:var(--ath-font-size-09);--ath-font-size-brand-mobile-display:var(--ath-font-size-09);--ath-font-size-brand-heading-1:var(--ath-font-size-08);--ath-font-size-brand-heading-2:var(--ath-font-size-07);--ath-font-size-brand-heading-3:var(--ath-font-size-06);--ath-font-size-brand-heading-4:var(--ath-font-size-05);--ath-font-size-brand-heading-5:var(--ath-font-size-04);--ath-font-size-brand-heading-6:var(--ath-font-size-03);--ath-spacing-brand-vertical-none:var(--ath-spacing-000);--ath-spacing-brand-vertical-xs:var(--ath-spacing-200);--ath-spacing-brand-vertical-sm:var(--ath-spacing-300);--ath-spacing-brand-vertical-md:var(--ath-spacing-400);--ath-spacing-brand-vertical-lg:var(--ath-spacing-500);--ath-spacing-brand-vertical-xl:var(--ath-spacing-700);--ath-spacing-brand-mobile-vertical-none:var(--ath-spacing-000);--ath-spacing-brand-mobile-vertical-xs:var(--ath-spacing-200);--ath-spacing-brand-mobile-vertical-sm:var(--ath-spacing-300);--ath-spacing-brand-mobile-vertical-md:var(--ath-spacing-400);--ath-spacing-brand-mobile-vertical-lg:var(--ath-spacing-500);--ath-spacing-brand-mobile-vertical-xl:var(--ath-spacing-700)}:root{--ath-color-bg-surface-scrim:var(--ath-color-black-alpha-70);--ath-color-bg-alpha-default:var(--ath-color-black-alpha-0);--ath-color-bg-alpha-hovered:var(--ath-color-black-alpha-10);--ath-color-bg-alpha-pressed:var(--ath-color-black-alpha-20);--ath-color-bg-alpha-focus:var(--ath-color-black-alpha-5);--ath-color-bg-alpha-disabled:var(--ath-color-black-alpha-5);--ath-color-bg-alpha-boldest-inverse-disabled:var(--ath-color-white-alpha-50);--ath-color-bg-alpha-boldest-disabled:var(--ath-color-black-alpha-50);--ath-color-bg-alpha-boldest-hovered:var(--ath-color-black-alpha-60);--ath-color-bg-alpha-boldest-pressed:var(--ath-color-black-alpha-70);--ath-color-bg-alpha-bolder-default:var(--ath-color-black-alpha-20);--ath-color-bg-alpha-bolder-hovered:var(--ath-color-black-alpha-40);--ath-color-bg-alpha-subtler-default:var(--ath-color-black-alpha-5);--ath-color-bg-alpha-subtler-hovered:var(--ath-color-black-alpha-10);--ath-color-bg-alpha-subtler-pressed:var(--ath-color-black-alpha-20);--ath-color-bg-alpha-subtle-default:var(--ath-color-black-alpha-10);--ath-color-bg-alpha-subtle-hovered:var(--ath-color-black-alpha-20);--ath-color-bg-alpha-subtle-pressed:var(--ath-color-black-alpha-30);--ath-color-border-alpha-default:var(--ath-color-black-alpha-0);--ath-color-border-alpha-hovered:var(--ath-color-black-alpha-10);--ath-color-border-alpha-pressed:var(--ath-color-black-alpha-20);--ath-color-border-alpha-focus:var(--ath-color-black-alpha-5);--ath-color-border-alpha-disabled:var(--ath-color-black-alpha-0);--ath-color-border-alpha-boldest-disabled:var(--ath-color-black-alpha-50);--ath-color-border-alpha-boldest-default:var(--ath-color-black-alpha-50);--ath-color-border-alpha-bold-default:var(--ath-color-black-alpha-10);--ath-color-border-alpha-bolder-default:var(--ath-color-black-alpha-20);--ath-color-border-alpha-subtle-default:var(--ath-color-black-alpha-5);--ath-color-fg-subtle:var(--ath-color-black-alpha-65);--ath-color-fg-disabled:var(--ath-color-black-alpha-60);--ath-color-fg-inverse-disabled:var(--ath-color-white-alpha-40);--ath-color-icon-subtle:var(--ath-color-black-alpha-65);--ath-color-icon-disabled:var(--ath-color-black-alpha-60);--ath-color-icon-inverse-disabled:var(--ath-color-white-alpha-90);--ath-color-drop-shadow-default:var(--ath-color-black-alpha-40);--ath-color-bg-surface-primary:var(--ath-color-primary-50);--ath-color-bg-surface-accent:var(--ath-color-accent-60);--ath-color-bg-surface-secondary-subtlest:var(--ath-color-secondary-100);--ath-color-bg-surface-secondary-subtler:var(--ath-color-secondary-95);--ath-color-bg-surface-secondary-subtle:var(--ath-color-secondary-90);--ath-color-bg-surface-secondary-bold:var(--ath-color-secondary-80);--ath-color-bg-surface-secondary-strong:var(--ath-color-secondary-15);--ath-color-bg-primary-default:var(--ath-color-primary-50);--ath-color-bg-primary-hovered:var(--ath-color-primary-40);--ath-color-bg-primary-pressed:var(--ath-color-primary-30);--ath-color-bg-primary-subtle-default:var(--ath-color-primary-65);--ath-color-bg-primary-subtle-hovered:var(--ath-color-primary-70);--ath-color-bg-primary-subtle-pressed:var(--ath-color-primary-80);--ath-color-bg-secondary-default:var(--ath-color-secondary-100);--ath-color-bg-secondary-subtlest-default:var(--ath-color-secondary-95);--ath-color-bg-secondary-subtler-default:var(--ath-color-secondary-90);--ath-color-bg-secondary-bold-default:var(--ath-color-secondary-15);--ath-color-bg-secondary-bolder-default:var(--ath-color-secondary-10);--ath-color-bg-secondary-boldest-default:var(--ath-color-secondary-00);--ath-color-bg-accent-default:var(--ath-color-accent-40);--ath-color-bg-accent-hovered:var(--ath-color-accent-30);--ath-color-bg-accent-pressed:var(--ath-color-accent-20);--ath-color-bg-success-default:var(--ath-color-success-30);--ath-color-bg-success-hovered:var(--ath-color-success-20);--ath-color-bg-success-pressed:var(--ath-color-success-15);--ath-color-bg-success-subtle-default:var(--ath-color-success-95);--ath-color-bg-success-subtle-hovered:var(--ath-color-success-90);--ath-color-bg-success-subtle-pressed:var(--ath-color-success-80);--ath-color-bg-danger-default:var(--ath-color-danger-40);--ath-color-bg-danger-hovered:var(--ath-color-danger-30);--ath-color-bg-danger-pressed:var(--ath-color-danger-20);--ath-color-bg-danger-subtle-default:var(--ath-color-danger-90);--ath-color-bg-danger-subtle-hovered:var(--ath-color-danger-80);--ath-color-bg-danger-subtle-pressed:var(--ath-color-danger-70);--ath-color-bg-warning-default:var(--ath-color-warning-30);--ath-color-bg-warning-hovered:var(--ath-color-warning-20);--ath-color-bg-warning-pressed:var(--ath-color-warning-15);--ath-color-bg-warning-subtle-default:var(--ath-color-warning-90);--ath-color-bg-warning-subtle-hovered:var(--ath-color-warning-80);--ath-color-bg-warning-subtle-pressed:var(--ath-color-warning-65);--ath-color-bg-info-default:var(--ath-color-info-50);--ath-color-bg-info-hovered:var(--ath-color-info-40);--ath-color-bg-info-pressed:var(--ath-color-info-30);--ath-color-bg-info-subtle-default:var(--ath-color-info-90);--ath-color-bg-info-subtle-hovered:var(--ath-color-info-80);--ath-color-bg-info-subtle-pressed:var(--ath-color-info-70);--ath-color-border-primary-default:var(--ath-color-primary-50);--ath-color-border-primary-hovered:var(--ath-color-primary-40);--ath-color-border-primary-pressed:var(--ath-color-primary-30);--ath-color-border-primary-subtle-default:var(--ath-color-primary-65);--ath-color-border-primary-subtle-hovered:var(--ath-color-primary-70);--ath-color-border-primary-subtle-pressed:var(--ath-color-primary-80);--ath-color-border-focus:var(--ath-color-primary-50);--ath-color-border-inverse-focus:var(--ath-color-secondary-100);--ath-color-border-secondary-default:var(--ath-color-secondary-80);--ath-color-border-secondary-hovered:var(--ath-color-secondary-70);--ath-color-border-secondary-pressed:var(--ath-color-secondary-65);--ath-color-border-secondary-subtle-default:var(--ath-color-secondary-100);--ath-color-border-secondary-subtle-hovered:var(--ath-color-secondary-90);--ath-color-border-secondary-subtle-pressed:var(--ath-color-secondary-80);--ath-color-border-secondary-bold-default:var(--ath-color-secondary-70);--ath-color-border-secondary-bold-hovered:var(--ath-color-secondary-65);--ath-color-border-secondary-bold-pressed:var(--ath-color-secondary-60);--ath-color-border-secondary-bolder-default:var(--ath-color-secondary-50);--ath-color-border-secondary-bolder-hovered:var(--ath-color-secondary-40);--ath-color-border-secondary-bolder-pressed:var(--ath-color-secondary-30);--ath-color-border-secondary-boldest-default:var(--ath-color-secondary-30);--ath-color-border-secondary-boldest-hovered:var(--ath-color-secondary-20);--ath-color-border-secondary-boldest-pressed:var(--ath-color-secondary-10);--ath-color-border-secondary-strong-default:var(--ath-color-secondary-15);--ath-color-border-secondary-strong-hovered:var(--ath-color-secondary-10);--ath-color-border-secondary-strong-pressed:var(--ath-color-secondary-00);--ath-color-border-accent-default:var(--ath-color-accent-60);--ath-color-border-accent-hovered:var(--ath-color-accent-50);--ath-color-border-accent-pressed:var(--ath-color-accent-40);--ath-color-border-success-default:var(--ath-color-success-20);--ath-color-border-success-hovered:var(--ath-color-success-15);--ath-color-border-success-pressed:var(--ath-color-success-10);--ath-color-border-success-subtle-default:var(--ath-color-success-65);--ath-color-border-success-subtle-hovered:var(--ath-color-success-80);--ath-color-border-success-subtle-pressed:var(--ath-color-success-90);--ath-color-border-danger-default:var(--ath-color-danger-30);--ath-color-border-danger-hovered:var(--ath-color-danger-20);--ath-color-border-danger-pressed:var(--ath-color-danger-15);--ath-color-border-danger-subtle-default:var(--ath-color-danger-80);--ath-color-border-danger-subtle-hovered:var(--ath-color-danger-90);--ath-color-border-danger-subtle-pressed:var(--ath-color-danger-95);--ath-color-border-warning-default:var(--ath-color-warning-30);--ath-color-border-warning-hovered:var(--ath-color-warning-20);--ath-color-border-warning-pressed:var(--ath-color-warning-15);--ath-color-border-warning-subtle-default:var(--ath-color-warning-65);--ath-color-border-warning-subtle-hovered:var(--ath-color-warning-80);--ath-color-border-warning-subtle-pressed:var(--ath-color-warning-90);--ath-color-border-info-default:var(--ath-color-info-30);--ath-color-border-info-hovered:var(--ath-color-info-20);--ath-color-border-info-pressed:var(--ath-color-info-15);--ath-color-border-info-subtle-default:var(--ath-color-info-80);--ath-color-border-info-subtle-hovered:var(--ath-color-info-90);--ath-color-border-info-subtle-pressed:var(--ath-color-info-95);--ath-color-fg-default:var(--ath-color-secondary-00);--ath-color-fg-inverse-default:var(--ath-color-secondary-100);--ath-color-fg-primary-heading:var(--ath-color-primary-50);--ath-color-fg-primary-default:var(--ath-color-primary-40);--ath-color-fg-primary-hovered:var(--ath-color-primary-30);--ath-color-fg-primary-pressed:var(--ath-color-primary-20);--ath-color-fg-accent-default:var(--ath-color-accent-40);--ath-color-fg-accent-heading:var(--ath-color-accent-60);--ath-color-fg-feedback-success:var(--ath-color-success-30);--ath-color-fg-feedback-danger:var(--ath-color-danger-30);--ath-color-fg-feedback-warning:var(--ath-color-warning-30);--ath-color-fg-feedback-info:var(--ath-color-info-30);--ath-color-icon-default:var(--ath-color-secondary-00);--ath-color-icon-primary-default:var(--ath-color-primary-40);--ath-color-icon-primary-hovered:var(--ath-color-primary-30);--ath-color-icon-primary-pressed:var(--ath-color-primary-20);--ath-color-icon-accent-default:var(--ath-color-accent-40);--ath-color-icon-feedback-success:var(--ath-color-success-30);--ath-color-icon-feedback-danger:var(--ath-color-danger-30);--ath-color-icon-feedback-warning:var(--ath-color-warning-30);--ath-color-icon-feedback-info:var(--ath-color-info-30);--ath-color-icon-inverse-default:var(--ath-color-secondary-100);--ath-color-drop-shadow-focus:var(--ath-color-secondary-100)}:root{--ath-border-style-none-style:none;--ath-border-style-solid-style:solid;--ath-border-style-dashed-style:dashed;--ath-border-style-dotted-style:dotted;--ath-box-shadow-drop-sm-type:dropShadow;--ath-box-shadow-drop-md-type:dropShadow;--ath-box-shadow-drop-lg-type:ath.dropShadow;--ath-box-shadow-drop-xl-type:dropShadow;--ath-box-shadow-drop-solid-focus-1-blur:0;--ath-box-shadow-drop-solid-focus-1-spread:2px;--ath-box-shadow-drop-solid-focus-1-type:dropShadow;--ath-box-shadow-drop-solid-focus-1-offset-x:0;--ath-box-shadow-drop-solid-focus-1-offset-y:0;--ath-box-shadow-drop-solid-focus-2-blur:0;--ath-box-shadow-drop-solid-focus-2-spread:4px;--ath-box-shadow-drop-solid-focus-2-type:dropShadow;--ath-box-shadow-drop-solid-focus-2-offset-x:0;--ath-box-shadow-drop-solid-focus-2-offset-y:0;--ath-box-shadow-drop-outline-focus-blur:0;--ath-box-shadow-drop-outline-focus-spread:2px;--ath-box-shadow-drop-outline-focus-type:dropShadow;--ath-box-shadow-drop-outline-focus-offset-x:0;--ath-box-shadow-drop-outline-focus-offset-y:0;--ath-box-shadow-drop-clear-focus-blur:0;--ath-box-shadow-drop-clear-focus-spread:2px;--ath-box-shadow-drop-clear-focus-type:dropShadow;--ath-box-shadow-drop-clear-focus-offset-x:0;--ath-box-shadow-drop-clear-focus-offset-y:0;--ath-box-shadow-inner-focus-blur:0;--ath-box-shadow-inner-focus-spread:2px;--ath-box-shadow-inner-focus-type:innerShadow;--ath-box-shadow-inner-focus-offset-x:0;--ath-box-shadow-inner-focus-offset-y:0;--ath-box-shadow-inner-inverse-focus-1-blur:0;--ath-box-shadow-inner-inverse-focus-1-spread:2px;--ath-box-shadow-inner-inverse-focus-1-type:innerShadow;--ath-box-shadow-inner-inverse-focus-1-offset-x:0;--ath-box-shadow-inner-inverse-focus-1-offset-y:0;--ath-box-shadow-inner-inverse-focus-2-blur:0;--ath-box-shadow-inner-inverse-focus-2-spread:4px;--ath-box-shadow-inner-inverse-focus-2-type:innerShadow;--ath-box-shadow-inner-inverse-focus-2-offset-x:0;--ath-box-shadow-inner-inverse-focus-2-offset-y:0;--ath-border-width-none:var(--ath-border-width-0);--ath-border-width-xs:var(--ath-border-width-1);--ath-border-width-sm:var(--ath-border-width-2);--ath-border-width-md:var(--ath-border-width-4);--ath-border-width-lg:var(--ath-border-width-8);--ath-border-width-xl:var(--ath-border-width-16);--ath-box-shadow-drop-sm-blur:var(--ath-box-shadow-blur-4);--ath-box-shadow-drop-sm-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-drop-sm-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-drop-sm-offset-y:var(--ath-box-shadow-position-y-2);--ath-box-shadow-drop-md-blur:var(--ath-box-shadow-blur-8);--ath-box-shadow-drop-md-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-drop-md-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-drop-md-offset-y:var(--ath-box-shadow-position-y-4);--ath-box-shadow-drop-lg-blur:var(--ath-box-shadow-blur-16);--ath-box-shadow-drop-lg-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-drop-lg-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-drop-lg-offset-y:var(--ath-box-shadow-position-y-8);--ath-box-shadow-drop-xl-blur:var(--ath-box-shadow-blur-32);--ath-box-shadow-drop-xl-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-drop-xl-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-drop-xl-offset-y:var(--ath-box-shadow-position-y-16);--ath-font-family-body:var(--ath-font-family-primary);--ath-font-family-heading:var(--ath-font-family-primary);--ath-font-family-overline:var(--ath-font-family-primary);--ath-font-size-overline:var(--ath-font-size-brand-overline);--ath-font-size-body-xs:var(--ath-font-size-01);--ath-font-size-body-sm:var(--ath-font-size-02);--ath-font-size-body-md:var(--ath-font-size-03);--ath-font-size-body-lg:var(--ath-font-size-04);--ath-font-size-comp-sm:var(--ath-font-size-02);--ath-font-size-comp-md:var(--ath-font-size-03);--ath-font-size-comp-lg:var(--ath-font-size-04);--ath-font-weight-body:var(--ath-font-weight-regular);--ath-font-weight-heading:var(--ath-font-weight-medium);--ath-font-weight-display:var(--ath-font-weight-medium);--ath-font-weight-overline:var(--ath-font-weight-medium);--ath-font-line-height-body:var(--ath-font-line-height-dynamic-04);--ath-font-line-height-display:var(--ath-font-line-height-dynamic-01);--ath-font-line-height-overline:var(--ath-font-line-height-dynamic-04);--ath-font-line-height-comp-xs:var(--ath-font-line-height-static-01);--ath-font-line-height-comp-sm:var(--ath-font-line-height-static-02);--ath-font-line-height-comp-md:var(--ath-font-line-height-static-03);--ath-font-line-height-comp-lg:var(--ath-font-line-height-static-04);--ath-font-line-height-heading-1:var(--ath-font-line-height-dynamic-01);--ath-font-line-height-heading-2:var(--ath-font-line-height-dynamic-01);--ath-font-line-height-heading-3:var(--ath-font-line-height-dynamic-02);--ath-font-line-height-heading-4:var(--ath-font-line-height-dynamic-02);--ath-font-line-height-heading-5:var(--ath-font-line-height-dynamic-03);--ath-font-line-height-heading-6:var(--ath-font-line-height-dynamic-03);--ath-border-radius-square:var(--ath-border-radius-000);--ath-border-radius-2xs:var(--ath-border-radius-025);--ath-border-radius-xs:var(--ath-border-radius-050);--ath-border-radius-sm:var(--ath-border-radius-075);--ath-border-radius-md:var(--ath-border-radius-100);--ath-border-radius-lg:var(--ath-border-radius-150);--ath-border-radius-xl:var(--ath-border-radius-200);--ath-border-radius-2xl:var(--ath-border-radius-250);--ath-border-radius-3xl:var(--ath-border-radius-300);--ath-border-radius-4xl:var(--ath-border-radius-400);--ath-border-radius-circle:var(--ath-border-radius-999);--ath-spacing-around-100:var(--ath-spacing-100);--ath-spacing-around-150:var(--ath-spacing-150);--ath-spacing-around-200:var(--ath-spacing-200);--ath-spacing-around-250:var(--ath-spacing-250);--ath-spacing-around-300:var(--ath-spacing-300);--ath-spacing-around-400:var(--ath-spacing-400);--ath-spacing-around-500:var(--ath-spacing-500);--ath-spacing-around-000:var(--ath-spacing-000);--ath-spacing-around-025:var(--ath-spacing-025);--ath-spacing-around-050:var(--ath-spacing-050);--ath-spacing-around-075:var(--ath-spacing-075);--ath-spacing-between-100:var(--ath-spacing-100);--ath-spacing-between-150:var(--ath-spacing-150);--ath-spacing-between-200:var(--ath-spacing-200);--ath-spacing-between-250:var(--ath-spacing-250);--ath-spacing-between-300:var(--ath-spacing-300);--ath-spacing-between-400:var(--ath-spacing-400);--ath-spacing-between-500:var(--ath-spacing-500);--ath-spacing-between-600:var(--ath-spacing-600);--ath-spacing-between-800:var(--ath-spacing-800);--ath-spacing-between-1000:var(--ath-spacing-1000);--ath-spacing-between-1200:var(--ath-spacing-1200);--ath-spacing-between-2000:var(--ath-spacing-2000);--ath-spacing-between-000:var(--ath-spacing-000);--ath-spacing-between-025:var(--ath-spacing-025);--ath-spacing-between-050:var(--ath-spacing-050);--ath-spacing-horizontal-none:var(--ath-spacing-000);--ath-spacing-horizontal-xxs:var(--ath-spacing-100);--ath-spacing-horizontal-xs:var(--ath-spacing-200);--ath-spacing-horizontal-sm:var(--ath-spacing-300);--ath-spacing-horizontal-md:var(--ath-spacing-400);--ath-spacing-horizontal-lg:var(--ath-spacing-500);--ath-spacing-horizontal-xl:var(--ath-spacing-700);--ath-spacing-grid-gutter-1:var(--ath-spacing-200);--ath-spacing-grid-gutter-2:var(--ath-spacing-300);--ath-spacing-grid-gutter-3:var(--ath-spacing-400);--ath-spacing-container-margin-xs:var(--ath-spacing-200);--ath-spacing-container-margin-sm:var(--ath-spacing-300);--ath-spacing-container-margin-md:var(--ath-spacing-400);--ath-spacing-container-margin-lg:var(--ath-spacing-700);--ath-spacing-container-margin-xl:var(--ath-spacing-700);--ath-font-size-display:var(--ath-font-size-brand-display);--ath-font-size-heading-1:var(--ath-font-size-brand-heading-1);--ath-font-size-heading-2:var(--ath-font-size-brand-heading-2);--ath-font-size-heading-3:var(--ath-font-size-brand-heading-3);--ath-font-size-heading-4:var(--ath-font-size-brand-heading-4);--ath-font-size-heading-5:var(--ath-font-size-brand-heading-5);--ath-font-size-heading-6:var(--ath-font-size-brand-heading-6);--ath-spacing-vertical-none:var(--ath-spacing-brand-vertical-none);--ath-spacing-vertical-xs:var(--ath-spacing-brand-vertical-xs);--ath-spacing-vertical-sm:var(--ath-spacing-brand-vertical-sm);--ath-spacing-vertical-md:var(--ath-spacing-brand-vertical-md);--ath-spacing-vertical-lg:var(--ath-spacing-brand-vertical-lg);--ath-spacing-vertical-xl:var(--ath-spacing-brand-vertical-xl)}:root{--ath-color-brand-button-fg-primary-default:var(--ath-color-secondary-100);--ath-spacing-brand-accordion-item-header-text-padding-top:var(--ath-spacing-around-050);--ath-spacing-brand-title-section-padding-left:var(--ath-spacing-around-150);--ath-spacing-brand-title-section-row-gap:var(--ath-spacing-between-050);--ath-spacing-brand-title-section-col-gap:var(--ath-spacing-between-150);--ath-spacing-brand-title-section-tooltip-col-gap:var(--ath-spacing-around-100);--ath-font-size-brand-card-title:var(--ath-font-size-heading-2);--ath-font-size-brand-card-subtitle:var(--ath-font-size-heading-4)}:root{--ath-color-accordion-item-header-text-description:var(--ath-color-fg-subtle);--ath-color-accordion-box-item-bg:var(--ath-color-bg-secondary-default)}:root{--ath-border-radius-accordion-box-item:var(--ath-border-radius-3xl);--ath-spacing-accordion-item-header-padding-y:var(--ath-spacing-around-200);--ath-spacing-accordion-item-header-padding-x:var(--ath-spacing-around-250);--ath-spacing-accordion-item-header-col-gap:var(--ath-spacing-between-200);--ath-spacing-accordion-item-header-icon-col-gap:var(--ath-spacing-between-100);--ath-spacing-accordion-item-header-text-row-gap:var(--ath-spacing-between-050);--ath-spacing-accordion-item-row-gap:var(--ath-spacing-between-000);--ath-spacing-accordion-item-content-padding-y:var(--ath-spacing-around-200);--ath-spacing-accordion-item-content-padding-x:var(--ath-spacing-around-250);--ath-spacing-accordion-line-row-gap:var(--ath-spacing-between-000);--ath-spacing-accordion-box-row-gap:var(--ath-spacing-between-000);--ath-spacing-accordion-item-header-text-padding-top:var(--ath-spacing-brand-accordion-item-header-text-padding-top)}:root{--ath-color-alert-bg-info:var(--ath-color-bg-info-subtle-default);--ath-color-alert-bg-warning:var(--ath-color-bg-warning-subtle-default);--ath-color-alert-bg-success:var(--ath-color-bg-success-subtle-default);--ath-color-alert-bg-danger:var(--ath-color-bg-danger-subtle-default);--ath-color-alert-border-info:var(--ath-color-border-info-default);--ath-color-alert-border-warning:var(--ath-color-border-warning-default);--ath-color-alert-border-success:var(--ath-color-border-success-default);--ath-color-alert-border-danger:var(--ath-color-border-danger-default);--ath-color-alert-fg-info:var(--ath-color-fg-feedback-info);--ath-color-alert-fg-warning:var(--ath-color-fg-feedback-warning);--ath-color-alert-fg-success:var(--ath-color-fg-feedback-success);--ath-color-alert-fg-danger:var(--ath-color-fg-feedback-danger);--ath-color-alert-icon-info:var(--ath-color-icon-feedback-info);--ath-color-alert-icon-warning:var(--ath-color-icon-feedback-warning);--ath-color-alert-icon-success:var(--ath-color-icon-feedback-success);--ath-color-alert-icon-danger:var(--ath-color-icon-feedback-danger);--ath-color-alert-button-close-info:var(--ath-color-icon-feedback-info);--ath-color-alert-button-close-warning:var(--ath-color-icon-feedback-warning);--ath-color-alert-button-close-success:var(--ath-color-icon-feedback-success);--ath-color-alert-button-close-danger:var(--ath-color-icon-feedback-danger)}:root{--ath-spacing-alert-text-row-gap:var(--ath-spacing-075);--ath-border-radius-alert-default:var(--ath-border-radius-xl);--ath-border-radius-alert-square:var(--ath-border-radius-square);--ath-spacing-alert-padding:var(--ath-spacing-around-250);--ath-spacing-alert-row-gap:var(--ath-spacing-between-150);--ath-spacing-alert-col-gap:var(--ath-spacing-between-100);--ath-spacing-alert-text-padding-top:var(--ath-spacing-around-025);--ath-spacing-alert-title-padding-top:var(--ath-spacing-around-025);--ath-spacing-alert-button-padding-right:var(--ath-spacing-between-100);--ath-spacing-alert-content-col-gap:var(--ath-spacing-between-025);--ath-spacing-alert-content-padding-top:var(--ath-spacing-around-025)}:root{--ath-color-badge-border:var(--ath-color-secondary-100);--ath-color-badge-fg-accent:var(--ath-color-fg-inverse-default);--ath-color-badge-fg-danger:var(--ath-color-fg-inverse-default);--ath-color-badge-fg-success:var(--ath-color-fg-inverse-default);--ath-color-badge-fg-warning:var(--ath-color-fg-inverse-default);--ath-color-badge-fg-info:var(--ath-color-fg-inverse-default)}:root{--ath-sizing-badge-dot-height:8px;--ath-sizing-badge-dot-width:8px;--ath-spacing-badge-padding-y:var(--ath-spacing-000);--ath-spacing-badge-padding-x:var(--ath-spacing-075)}:root{--ath-color-button-fg-disabled:var(--ath-color-fg-disabled);--ath-color-button-bg-primary-clear-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-secondary-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-secondary-clear-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-button-border-primary-clear-default:var(--ath-color-border-alpha-default);--ath-color-button-border-secondary-clear-default:var(--ath-color-border-alpha-default);--ath-color-button-border-disabled:var(--ath-color-border-alpha-disabled);--ath-color-button-icon-disabled:var(--ath-color-icon-disabled);--ath-color-button-fg-primary-default:var(--ath-color-brand-button-fg-primary-default);--ath-color-button-fg-primary-hovered:var(--ath-color-fg-inverse-default);--ath-color-button-fg-primary-pressed:var(--ath-color-fg-inverse-default);--ath-color-button-fg-primary-clear-default:var(--ath-color-fg-primary-default);--ath-color-button-fg-primary-clear-hovered:var(--ath-color-fg-inverse-default);--ath-color-button-fg-primary-clear-pressed:var(--ath-color-fg-inverse-default);--ath-color-button-fg-secondary-default:var(--ath-color-fg-primary-default);--ath-color-button-fg-secondary-hovered:var(--ath-color-fg-inverse-default);--ath-color-button-fg-secondary-pressed:var(--ath-color-fg-inverse-default);--ath-color-button-fg-secondary-clear-default:var(--ath-color-fg-default);--ath-color-button-fg-secondary-clear-hovered:var(--ath-color-fg-inverse-default);--ath-color-button-fg-secondary-clear-pressed:var(--ath-color-fg-inverse-default);--ath-color-button-bg-primary-default:var(--ath-color-bg-primary-default);--ath-color-button-bg-primary-hovered:var(--ath-color-bg-primary-hovered);--ath-color-button-bg-primary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-primary-clear-hovered:var(--ath-color-bg-primary-default);--ath-color-button-bg-primary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-secondary-hovered:var(--ath-color-bg-primary-default);--ath-color-button-bg-secondary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-secondary-clear-hovered:var(--ath-color-bg-primary-default);--ath-color-button-bg-secondary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-primary-default:var(--ath-color-border-primary-default);--ath-color-button-border-primary-hovered:var(--ath-color-border-primary-hovered);--ath-color-button-border-primary-pressed:var(--ath-color-border-primary-pressed);--ath-color-button-border-primary-clear-hovered:var(--ath-color-border-primary-default);--ath-color-button-border-primary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-secondary-default:var(--ath-color-border-primary-default);--ath-color-button-border-secondary-hovered:var(--ath-color-border-primary-default);--ath-color-button-border-secondary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-secondary-clear-hovered:var(--ath-color-border-primary-default);--ath-color-button-border-secondary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-icon-primary-default:var(--ath-color-icon-inverse-default);--ath-color-button-icon-primary-hovered:var(--ath-color-icon-inverse-default);--ath-color-button-icon-primary-pressed:var(--ath-color-icon-inverse-default);--ath-color-button-icon-primary-clear-default:var(--ath-color-icon-primary-default);--ath-color-button-icon-primary-clear-hovered:var(--ath-color-icon-inverse-default);--ath-color-button-icon-primary-clear-pressed:var(--ath-color-icon-inverse-default);--ath-color-button-icon-secondary-default:var(--ath-color-icon-primary-default);--ath-color-button-icon-secondary-hovered:var(--ath-color-icon-inverse-default);--ath-color-button-icon-secondary-pressed:var(--ath-color-icon-inverse-default);--ath-color-button-icon-secondary-clear-default:var(--ath-color-icon-default);--ath-color-button-icon-secondary-clear-hovered:var(--ath-color-icon-inverse-default);--ath-color-button-icon-secondary-clear-pressed:var(--ath-color-icon-inverse-default)}:root{--ath-border-style-button-style:solid;--ath-border-width-button:var(--ath-border-width-xs);--ath-font-size-button-xs:var(--ath-font-size-comp-md);--ath-font-size-button-sm:var(--ath-font-size-comp-md);--ath-font-size-button-md:var(--ath-font-size-comp-lg);--ath-font-size-button-lg:var(--ath-font-size-comp-lg);--ath-font-line-height-button-xs:var(--ath-font-line-height-comp-xs);--ath-font-line-height-button-sm:var(--ath-font-line-height-comp-sm);--ath-font-line-height-button-md:var(--ath-font-line-height-comp-md);--ath-font-line-height-button-lg:var(--ath-font-line-height-comp-lg);--ath-border-radius-button:var(--ath-border-radius-circle);--ath-spacing-button-padding-x-md:var(--ath-spacing-around-200);--ath-spacing-button-padding-x-xs:var(--ath-spacing-around-100);--ath-spacing-button-padding-x-sm:var(--ath-spacing-around-150);--ath-spacing-button-padding-x-lg:var(--ath-spacing-around-300);--ath-spacing-button-padding-y-xs:var(--ath-spacing-around-050);--ath-spacing-button-padding-y-sm:var(--ath-spacing-around-075);--ath-spacing-button-padding-y-md:var(--ath-spacing-around-100);--ath-spacing-button-padding-y-lg:var(--ath-spacing-around-100);--ath-spacing-button-padding-around-xs:var(--ath-spacing-around-050);--ath-spacing-button-padding-around-sm:var(--ath-spacing-around-075);--ath-spacing-button-padding-around-md:var(--ath-spacing-around-100);--ath-spacing-button-padding-around-lg:var(--ath-spacing-around-150);--ath-spacing-button-col-gap-xs:var(--ath-spacing-between-050);--ath-spacing-button-col-gap-sm:var(--ath-spacing-between-050);--ath-spacing-button-col-gap-md:var(--ath-spacing-between-100);--ath-spacing-button-col-gap-lg:var(--ath-spacing-between-100)}:root{--ath-font-size-button-expandable-xs:var(--ath-font-size-comp-md);--ath-font-size-button-expandable-sm:var(--ath-font-size-body-sm);--ath-font-size-button-expandable-md:var(--ath-font-size-body-md);--ath-font-size-button-expandable-lg:var(--ath-font-size-body-lg);--ath-font-line-height-button-expandable-xs:var(--ath-font-line-height-body);--ath-font-line-height-button-expandable-sm:var(--ath-font-line-height-body);--ath-font-line-height-button-expandable-md:var(--ath-font-line-height-body);--ath-font-line-height-button-expandable-lg:var(--ath-font-line-height-body);--ath-spacing-button-expandable-padding-x:var(--ath-spacing-around-000);--ath-spacing-button-expandable-padding-y-xs:var(--ath-spacing-around-000);--ath-spacing-button-expandable-padding-y-sm:var(--ath-spacing-around-000);--ath-spacing-button-expandable-padding-y-md:var(--ath-spacing-around-000);--ath-spacing-button-expandable-padding-y-lg:var(--ath-spacing-around-000);--ath-spacing-button-expandable-col-gap-xs:var(--ath-spacing-between-100);--ath-spacing-button-expandable-col-gap-sm:var(--ath-spacing-between-100);--ath-spacing-button-expandable-col-gap-md:var(--ath-spacing-between-100);--ath-spacing-button-expandable-col-gap-lg:var(--ath-spacing-between-100)}:root{--ath-color-checkbox-border-default:var(--ath-color-border-alpha-boldest-default);--ath-color-checkbox-border-readonly:var(--ath-color-border-alpha-boldest-default);--ath-color-checkbox-icon-disabled:var(--ath-color-icon-inverse-disabled);--ath-color-checkbox-bg-default:var(--ath-color-bg-secondary-default);--ath-color-checkbox-bg-checked:var(--ath-color-bg-primary-default);--ath-color-checkbox-bg-indeterminated:var(--ath-color-bg-primary-default);--ath-color-checkbox-bg-readonly:var(--ath-color-bg-secondary-default);--ath-color-checkbox-border-checked:var(--ath-color-border-primary-default);--ath-color-checkbox-border-indeterminated:var(--ath-color-border-primary-default);--ath-color-checkbox-icon-default:var(--ath-color-icon-inverse-default);--ath-color-checkbox-icon-readonly:var(--ath-color-icon-primary-default)}:root{--ath-sizing-checkbox-box-height:24px;--ath-sizing-checkbox-box-width:24px;--ath-font-weight-checkbox-label:var(--ath-font-weight-regular);--ath-font-weight-checkbox-checked:var(--ath-font-weight-medium);--ath-font-weight-checkbox-indeterminated:var(--ath-font-weight-medium);--ath-font-size-checkbox-label:var(--ath-font-size-comp-md);--ath-font-line-height-checkbox-label:var(--ath-font-line-height-comp-md);--ath-border-radius-checkbox:var(--ath-border-radius-sm);--ath-spacing-checkbox-required-col-gap:var(--ath-spacing-between-025);--ath-spacing-checkbox-check-col-gap:var(--ath-spacing-between-100);--ath-spacing-checkbox-group-row-gap:var(--ath-spacing-between-100);--ath-spacing-checkbox-addons-row-gap:var(--ath-spacing-between-050)}:root{--ath-color-chip-dismiss-bg:var(--ath-color-bg-secondary-bold-default);--ath-color-chip-dismiss-fg:var(--ath-color-fg-inverse-default);--ath-color-chip-dismiss-icon:var(--ath-color-icon-inverse-default);--ath-color-chip-dismiss-button-bg-hovered:var(--ath-color-bg-secondary-default);--ath-color-chip-dismiss-button-bg-pressed:var(--ath-color-bg-info-subtle-pressed);--ath-color-chip-dismiss-button-icon-default:var(--ath-color-icon-inverse-default);--ath-color-chip-dismiss-button-border-focus:var(--ath-color-border-inverse-focus);--ath-color-chip-choice-bg-selected:var(--ath-color-bg-primary-default);--ath-color-chip-choice-fg-hovered:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-fg-pressed:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-fg-selected-default:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-fg-selected-focus:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-icon-hovered:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-icon-pressed:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-icon-selected-default:var(--ath-color-fg-inverse-default);--ath-color-chip-choice-icon-selected-focus:var(--ath-color-fg-inverse-default);--ath-box-shadow-chip-dismiss-button-focus-color:var(--ath-color-chip-dismiss-button-border-focus)}:root{--ath-box-shadow-chip-dismiss-button-focus-blur:0;--ath-box-shadow-chip-dismiss-button-focus-spread:2px;--ath-box-shadow-chip-dismiss-button-focus-type:dropShadow;--ath-box-shadow-chip-dismiss-button-focus-offset-x:0;--ath-box-shadow-chip-dismiss-button-focus-offset-y:0;--ath-font-size-chip:var(--ath-font-size-comp-md);--ath-font-line-height-chip:var(--ath-font-line-height-comp-md);--ath-border-radius-chip:var(--ath-border-radius-circle);--ath-border-radius-chip-dismiss-button:var(--ath-border-radius-circle);--ath-spacing-chip-dismiss-padding-y-sm:var(--ath-spacing-around-000);--ath-spacing-chip-dismiss-padding-y-md:var(--ath-spacing-around-050);--ath-spacing-chip-dismiss-padding-x-sm:var(--ath-spacing-around-050);--ath-spacing-chip-dismiss-padding-x-md:var(--ath-spacing-around-100);--ath-spacing-chip-dismiss-col-gap-sm:var(--ath-spacing-between-050);--ath-spacing-chip-choice-padding-y-sm:var(--ath-spacing-around-050);--ath-spacing-chip-choice-padding-x-sm:var(--ath-spacing-around-100);--ath-spacing-chip-choice-padding-md:var(--ath-spacing-around-100);--ath-spacing-chip-col-gap:var(--ath-spacing-between-100);--ath-spacing-chip-group-col-gap:var(--ath-spacing-between-100);--ath-spacing-chip-group-row-gap:var(--ath-spacing-between-100)}:root{--ath-border-width-divider-sm:var(--ath-border-width-xs);--ath-border-width-divider-md:var(--ath-border-width-sm)}:root{--ath-font-size-icon-lg:var(--ath-font-size-2);--ath-font-size-icon-xs:var(--ath-font-size-04);--ath-font-size-icon-sm:var(--ath-font-size-06);--ath-font-size-icon-md:var(--ath-font-size-07)}:root{--ath-color-input-border-default:var(--ath-color-border-alpha-boldest-default);--ath-color-input-datepicker-option-bg-selected-range-default:var(--ath-color-primary-90);--ath-color-input-datepicker-option-bg-selected-range-hovered:var(--ath-color-primary-80);--ath-color-input-datepicker-option-bg-selected-range-hovered-copy:var(--ath-color-primary-70);--ath-color-input-datepicker-overlay-border:var(--ath-color-border-alpha-boldest-default);--ath-color-input-bg-default:var(--ath-color-bg-secondary-default);--ath-color-input-dropdown-option-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-input-dropdown-option-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-input-dropdown-option-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-input-dropdown-option-icon-selected-hovered:var(--ath-color-icon-inverse-default);--ath-color-input-dropdown-option-icon-selected-pressed:var(--ath-color-icon-inverse-default);--ath-color-input-dropdown-option-fg-selected-hovered:var(--ath-color-fg-inverse-default);--ath-color-input-dropdown-option-fg-selected-pressed:var(--ath-color-fg-inverse-default);--ath-color-input-dropdown-overlay-border:var(--ath-color-border-primary-default);--ath-color-input-dropdown-overlay-bg:var(--ath-color-bg-secondary-default);--ath-color-input-dropdown-border-active:var(--ath-color-border-primary-default);--ath-color-input-datepicker-option-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-input-datepicker-option-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-input-datepicker-option-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-input-datepicker-option-fg-default:var(--ath-color-fg-primary-default);--ath-color-input-datepicker-option-fg-hovered:var(--ath-color-fg-default);--ath-color-input-datepicker-option-fg-pressed:var(--ath-color-fg-default);--ath-color-input-datepicker-option-fg-selected-hovered:var(--ath-color-fg-inverse-default);--ath-color-input-datepicker-option-fg-selected-default:var(--ath-color-fg-inverse-default);--ath-color-input-datepicker-option-fg-selected-pressed:var(--ath-color-fg-inverse-default);--ath-color-input-datepicker-option-border-current:var(--ath-color-border-primary-default)}:root{--ath-spacing-input-dropdown-option-group-row-gap:var(--ath-spacing-050);--ath-spacing-input-datepicker-calendar-cell-group-row-gap:var(--ath-spacing-025);--ath-font-size-input-text:var(--ath-font-size-comp-md);--ath-font-size-input-label:var(--ath-font-size-comp-md);--ath-font-size-input-dropdown-option:var(--ath-font-size-comp-md);--ath-font-line-height-input-text:var(--ath-font-line-height-comp-md);--ath-font-line-height-input-label:var(--ath-font-line-height-comp-md);--ath-font-line-height-input-dropdown-option:var(--ath-font-line-height-comp-md);--ath-font-line-height-input-multiselect-text-lg:var(--ath-font-line-height-comp-lg);--ath-border-radius-input-default:var(--ath-border-radius-circle);--ath-border-radius-input-readonly:var(--ath-border-radius-square);--ath-border-radius-input-dropdown-open-top:var(--ath-border-radius-2xl);--ath-border-radius-input-dropdown-open-top-lg:var(--ath-border-radius-3xl);--ath-border-radius-input-dropdown-open-bottom:var(--ath-border-radius-square);--ath-border-radius-input-dropdown-option:var(--ath-border-radius-xl);--ath-border-radius-input-datepicker-overlay:var(--ath-border-radius-3xl);--ath-border-radius-input-datepicker-cell:var(--ath-border-radius-circle);--ath-border-radius-input-textarea:var(--ath-border-radius-3xl);--ath-spacing-input-text-padding-x:var(--ath-spacing-around-100);--ath-spacing-input-field-padding-y-sm:var(--ath-spacing-around-050);--ath-spacing-input-field-padding-y-md:var(--ath-spacing-around-100);--ath-spacing-input-field-padding-y-lg:var(--ath-spacing-around-150);--ath-spacing-input-field-padding-x-sm:var(--ath-spacing-around-100);--ath-spacing-input-field-padding-x-md:var(--ath-spacing-around-150);--ath-spacing-input-field-padding-x-lg:var(--ath-spacing-around-150);--ath-spacing-input-field-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-dropdown-text-padding-x:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-field-padding-y-sm:var(--ath-spacing-around-050);--ath-spacing-input-dropdown-field-padding-y-md:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-field-padding-y-lg:var(--ath-spacing-around-150);--ath-spacing-input-dropdown-field-padding-x-sm:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-field-padding-x-md:var(--ath-spacing-around-150);--ath-spacing-input-dropdown-field-padding-x-lg:var(--ath-spacing-around-150);--ath-spacing-input-dropdown-field-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-dropdown-multiselect-field-padding-y-lg:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-option-padding-y:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-option-padding-x:var(--ath-spacing-around-150);--ath-spacing-input-dropdown-option-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-dropdown-overlay-padding-y:var(--ath-spacing-around-100);--ath-spacing-input-dropdown-overlay-padding-x:var(--ath-spacing-around-200);--ath-spacing-input-dropdown-overlay-row-gap:var(--ath-spacing-between-100);--ath-spacing-input-datepicker-text-padding-x:var(--ath-spacing-around-100);--ath-spacing-input-datepicker-field-padding-y-sm:var(--ath-spacing-around-050);--ath-spacing-input-datepicker-field-padding-y-md:var(--ath-spacing-around-100);--ath-spacing-input-datepicker-field-padding-y-lg:var(--ath-spacing-around-150);--ath-spacing-input-datepicker-field-padding-x-sm:var(--ath-spacing-around-100);--ath-spacing-input-datepicker-field-padding-x-md:var(--ath-spacing-around-150);--ath-spacing-input-datepicker-field-padding-x-lg:var(--ath-spacing-around-150);--ath-spacing-input-datepicker-field-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-datepicker-calendar-cell-padding-date:var(--ath-spacing-around-100);--ath-spacing-input-datepicker-calendar-cell-padding-month:var(--ath-spacing-around-150);--ath-spacing-input-datepicker-calendar-cell-padding-year:var(--ath-spacing-around-150);--ath-spacing-input-datepicker-calendar-cell-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-datepicker-calendar-overlay-padding-around:var(--ath-spacing-around-300);--ath-spacing-input-datepicker-calendar-overlay-row-gap:var(--ath-spacing-between-100);--ath-spacing-input-datepicker-calendar-header-col-gap:var(--ath-spacing-between-250);--ath-spacing-input-datepicker-calendar-header-date-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-datepicker-calendar-footer-button-group-col-gap:var(--ath-spacing-between-100);--ath-spacing-input-row-gap:var(--ath-spacing-between-100);--ath-spacing-input-addons-row-gap:var(--ath-spacing-between-100);--ath-spacing-input-counter-col-gap:var(--ath-spacing-between-100);--ath-spacing-label-col-gap:var(--ath-spacing-between-100);--ath-spacing-label-required-col-gap:var(--ath-spacing-between-025);--ath-spacing-feedback-text-col-gap:var(--ath-spacing-between-050);--ath-spacing-feedback-text-padding-top:var(--ath-spacing-around-025)}:root{--ath-color-scroll-track-bg:var(--ath-color-black-alpha-0)}:root{--ath-sizing-scroll:6px;--ath-border-radius-scroll:var(--ath-border-radius-circle)}:root{--ath-color-tab-header-border:var(--ath-color-black-alpha-50);--ath-color-tab-item-indicator-bg-default:var(--ath-color-bg-secondary-boldest-default);--ath-color-tab-item-box-border:var(--ath-color-border-secondary-strong-default);--ath-color-tab-item-box-bg-selected:var(--ath-color-bg-secondary-bold-default);--ath-color-tab-item-box-fg-selected:var(--ath-color-fg-inverse-default);--ath-color-tab-item-box-icon-selected:var(--ath-color-icon-inverse-default)}:root{--ath-sizing-tab-item-indicator-height:2px;--ath-border-width-tab-item-box:var(--ath-border-width-xs);--ath-border-width-tab-item-box-hovered:var(--ath-border-width-sm);--ath-border-width-tab-item-box-pressed:var(--ath-border-width-sm);--ath-spacing-tab-controls-padding:var(--ath-spacing-050);--ath-font-size-tab-item:var(--ath-font-size-comp-lg);--ath-font-line-height-tab-item:var(--ath-font-line-height-comp-md);--ath-border-radius-tab-item-indicator:var(--ath-border-radius-md);--ath-border-radius-tab-item-box:var(--ath-border-radius-xl);--ath-border-radius-tab-item-underline:var(--ath-border-radius-xl);--ath-spacing-tab-panel-padding-around:var(--ath-spacing-around-100);--ath-spacing-tab-panel-row-gap:var(--ath-spacing-between-100);--ath-spacing-tab-panel-header-row-gap:var(--ath-spacing-between-100);--ath-spacing-tab-panel-header-actions-row-gap:var(--ath-spacing-between-100);--ath-spacing-tab-item-padding-x:var(--ath-spacing-around-200);--ath-spacing-tab-item-padding-y:var(--ath-spacing-around-150);--ath-spacing-tab-item-col-gap:var(--ath-spacing-between-050);--ath-spacing-tab-box-group-col-gap:var(--ath-spacing-between-100)}:root{--ath-color-tag-bg-primary:var(--ath-color-primary-40);--ath-color-tag-bg-secondary:var(--ath-color-secondary-40);--ath-color-tag-fg-primary:var(--ath-color-fg-inverse-default);--ath-color-tag-fg-secondary:var(--ath-color-fg-inverse-default);--ath-color-tag-fg-accent:var(--ath-color-fg-inverse-default);--ath-color-tag-fg-danger:var(--ath-color-fg-inverse-default);--ath-color-tag-fg-warning:var(--ath-color-fg-inverse-default);--ath-color-tag-fg-success:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-primary:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-secondary:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-accent:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-danger:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-warning:var(--ath-color-fg-inverse-default);--ath-color-tag-icon-success:var(--ath-color-fg-inverse-default)}:root{--ath-border-radius-tag:var(--ath-border-radius-md);--ath-spacing-tag-padding-y-sm:var(--ath-spacing-around-000);--ath-spacing-tag-padding-y-md:var(--ath-spacing-around-050);--ath-spacing-tag-padding-x:var(--ath-spacing-around-150);--ath-spacing-tag-col-gap:var(--ath-spacing-between-100)}:root{--ath-color-title-section-border-primary:var(--ath-color-border-primary-default);--ath-color-title-section-border-accent:var(--ath-color-border-accent-default)}:root{--ath-font-weight-title-section-heading:var(--ath-font-weight-medium);--ath-spacing-title-section-padding-left:var(--ath-spacing-brand-title-section-padding-left);--ath-spacing-title-section-row-gap:var(--ath-spacing-brand-title-section-tooltip-col-gap);--ath-spacing-title-section-col-gap:var(--ath-spacing-brand-title-section-col-gap);--ath-spacing-title-section-tooltip-col-gap:var(--ath-spacing-brand-title-section-tooltip-col-gap)}:root{--ath-color-card-thumbnail-highlight-bg:var(--ath-color-success-60);--ath-color-card-border-hovered:var(--ath-color-bg-alpha-bolder-default);--ath-color-card-border-pressed:var(--ath-color-bg-alpha-bolder-default);--ath-color-card-drop-shadow-hovered:var(--ath-color-drop-shadow-default);--ath-color-card-drop-shadow-pressed:var(--ath-color-drop-shadow-default);--ath-color-card-thumbnail-highlight-fg:var(--ath-color-fg-default);--ath-color-card-content-bg:var(--ath-color-bg-secondary-default);--ath-color-card-selectable-border-selected:var(--ath-color-border-primary-default);--ath-color-card-selectable-icon:var(--ath-color-icon-primary-default);--ath-box-shadow-card-hovered-color:var(--ath-color-card-drop-shadow-hovered);--ath-box-shadow-card-pressed-color:var(--ath-color-card-drop-shadow-pressed)}:root{--ath-box-shadow-card-hovered-type:dropShadow;--ath-box-shadow-card-pressed-type:dropShadow;--ath-sizing-card-thumbnail-avatar-height:60px;--ath-sizing-card-thumbnail-avatar-width:60px;--ath-box-shadow-card-hovered-blur:var(--ath-box-shadow-blur-8);--ath-box-shadow-card-hovered-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-card-hovered-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-card-hovered-offset-y:var(--ath-box-shadow-position-y-4);--ath-box-shadow-card-pressed-blur:var(--ath-box-shadow-blur-8);--ath-box-shadow-card-pressed-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-card-pressed-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-card-pressed-offset-y:var(--ath-box-shadow-position-y-4);--ath-border-width-card:var(--ath-border-width-sm);--ath-font-line-height-card-title:var(--ath-font-line-height-heading-2);--ath-font-line-height-card-subtitle:var(--ath-font-line-height-heading-4);--ath-border-radius-card:var(--ath-border-radius-4xl);--ath-spacing-card-gap:var(--ath-spacing-between-000);--ath-spacing-card-content-row-gap-sm:var(--ath-spacing-between-300);--ath-spacing-card-content-row-gap-md:var(--ath-spacing-between-400);--ath-spacing-card-content-padding-around-sm:var(--ath-spacing-around-200);--ath-spacing-card-content-padding-around-md:var(--ath-spacing-around-300);--ath-spacing-card-content-header-body-row-gap:var(--ath-spacing-between-200);--ath-spacing-card-thumbnail-highlight-padding-around:var(--ath-spacing-around-200);--ath-spacing-card-header-row-gap:var(--ath-spacing-between-150);--ath-spacing-card-header-titles-row-gap:var(--ath-spacing-between-100);--ath-spacing-card-header-date-img-row-gap:var(--ath-spacing-between-150);--ath-spacing-card-footer-col-gap:var(--ath-spacing-between-100);--ath-spacing-card-footer-row-gap:var(--ath-spacing-between-100);--ath-spacing-card-selectable-indicator-col-gap:var(--ath-spacing-between-150);--ath-font-size-card-title:var(--ath-font-size-brand-card-title);--ath-font-size-card-subtitle:var(--ath-font-size-brand-card-subtitle)}:root{--ath-color-menu-button-option-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-menu-button-option-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-menu-button-option-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-menu-button-option-icon-selected-hovered:var(--ath-color-fg-inverse-default);--ath-color-menu-button-option-icon-selected-pressed:var(--ath-color-fg-inverse-default);--ath-color-menu-button-option-fg-selected-hovered:var(--ath-color-fg-inverse-default);--ath-color-menu-button-option-fg-selected-pressed:var(--ath-color-fg-inverse-default);--ath-color-menu-button-overlay-bg:var(--ath-color-bg-secondary-default)}:root{--ath-font-size-menu-button-option:var(--ath-font-size-comp-md);--ath-font-line-height-menu-button-option:var(--ath-font-line-height-comp-md);--ath-border-radius-menu-button-option:var(--ath-border-radius-xl);--ath-spacing-menu-button-option-padding-y:var(--ath-spacing-around-100);--ath-spacing-menu-button-option-padding-x:var(--ath-spacing-around-150);--ath-spacing-menu-button-option-col-gap:var(--ath-spacing-between-100);--ath-spacing-menu-button-overlay-padding:var(--ath-spacing-around-150);--ath-spacing-menu-button-overlay-row-gap:var(--ath-spacing-between-050);--ath-spacing-menu-button-row-gap:var(--ath-spacing-between-025)}:root{--ath-color-list-bg-transparent:var(--ath-color-black-alpha-0);--ath-color-list-bg-white:var(--ath-color-secondary-100)}:root{--ath-spacing-list-item-row-gap-vertical-sm:var(--ath-spacing-050);--ath-border-radius-list-fill:var(--ath-border-radius-4xl);--ath-spacing-list-item-padding-vertical-sm:var(--ath-spacing-around-250);--ath-spacing-list-item-padding-vertical-md:var(--ath-spacing-around-300);--ath-spacing-list-item-padding-vertical-lg:var(--ath-spacing-around-400);--ath-spacing-list-item-padding-horizontal-sm:var(--ath-spacing-around-250);--ath-spacing-list-item-padding-horizontal-md:var(--ath-spacing-around-300);--ath-spacing-list-item-padding-horizontal-lg:var(--ath-spacing-around-400);--ath-spacing-list-item-col-gap-md:var(--ath-spacing-between-200);--ath-spacing-list-item-col-gap-sm:var(--ath-spacing-between-100);--ath-spacing-list-item-row-gap-vertical-md:var(--ath-spacing-between-100);--ath-spacing-list-item-row-gap-vertical-lg:var(--ath-spacing-between-150);--ath-spacing-list-item-row-gap-horizontal-sm:var(--ath-spacing-between-050);--ath-spacing-list-item-row-gap-horizontal-md:var(--ath-spacing-between-100);--ath-spacing-list-item-row-gap-horizontal-lg:var(--ath-spacing-between-150);--ath-spacing-list-item-right-slot-sm:var(--ath-spacing-between-050);--ath-spacing-list-item-right-slot-md:var(--ath-spacing-between-100);--ath-spacing-list-item-right-slot-lg:var(--ath-spacing-between-150)}:root{--ath-color-table-row-item-bg-group:calc(ath.color.brand.table.row-item.bg.group);--ath-color-table-row-item-border:var(--ath-color-border-alpha-boldest-default);--ath-color-table-row-item-border-x:var(--ath-color-border-alpha-default);--ath-color-table-row-item-bg-striped:var(--ath-color-bg-alpha-subtler-default);--ath-color-table-row-item-gradient-default-1:var(--ath-color-bg-alpha-subtle-default);--ath-color-table-row-item-gradient-default-2:var(--ath-color-bg-alpha-default);--ath-color-table-row-item-gradient-striped-1:var(--ath-color-bg-alpha-bolder-default);--ath-color-table-row-item-gradient-striped-2:var(--ath-color-bg-alpha-subtler-default);--ath-color-table-col-header-border:var(--ath-color-border-alpha-boldest-default);--ath-color-table-row-item-fg-default:var(--ath-color-fg-default);--ath-color-table-row-item-gradient-group-1:var(--ath-color-brand-table-row-item-gradient-group-1);--ath-color-table-row-item-gradient-group-2:var(--ath-color-brand-table-row-item-gradient-group-2);--ath-color-table-col-header-fg-default:var(--ath-color-fg-default);--ath-color-table-col-header-bg-default:var(--ath-color-bg-secondary-default);--ath-color-table-bg-default:var(--ath-color-bg-secondary-default)}:root{--ath-border-radius-table-default:var(--ath-border-radius-3xl);--ath-spacing-table-row-item-padding-x:var(--ath-spacing-around-250);--ath-spacing-table-row-item-padding-y-sm:var(--ath-spacing-around-150);--ath-spacing-table-row-item-padding-y-md:var(--ath-spacing-around-250);--ath-spacing-table-row-item-padding-y-lg:var(--ath-spacing-around-400);--ath-spacing-table-row-item-col-gap:var(--ath-spacing-between-100);--ath-spacing-table-col-header-padding-x:var(--ath-spacing-around-250);--ath-spacing-table-col-header-padding-y-sm:var(--ath-spacing-around-150);--ath-spacing-table-col-header-padding-y-md:var(--ath-spacing-around-250);--ath-spacing-table-col-header-padding-y-lg:var(--ath-spacing-around-400);--ath-spacing-table-col-header-col-gap:var(--ath-spacing-between-100)}:root{--ath-color-modal-border:var(--ath-color-border-alpha-default);--ath-box-shadow-modal-color:var(--ath-color-drop-shadow-default)}:root{--ath-box-shadow-modal-type:dropShadow;--ath-box-shadow-modal-blur:var(--ath-box-shadow-blur-4);--ath-box-shadow-modal-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-modal-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-modal-offset-y:var(--ath-box-shadow-position-y-4);--ath-font-line-height-modal-title:var(--ath-font-line-height-heading-2);--ath-font-line-height-modal-subtitle:var(--ath-font-line-height-heading-4);--ath-border-radius-modal-default:var(--ath-border-radius-4xl);--ath-border-radius-modal-full-screen:var(--ath-border-radius-square);--ath-spacing-modal-padding-around-sm:var(--ath-spacing-around-300);--ath-spacing-modal-padding-around-md:var(--ath-spacing-around-500);--ath-spacing-modal-row-gap-sm:var(--ath-spacing-between-200);--ath-spacing-modal-row-gap-md:var(--ath-spacing-between-300);--ath-spacing-modal-header-col-gap:var(--ath-spacing-between-200);--ath-spacing-modal-header-row-gap-alert:var(--ath-spacing-between-300);--ath-spacing-modal-header-text-row-gap:var(--ath-spacing-between-100);--ath-spacing-modal-footer-col-gap:var(--ath-spacing-between-100);--ath-spacing-modal-footer-row-gap:var(--ath-spacing-between-100);--ath-font-size-modal-title:var(--ath-font-size-heading-2);--ath-font-size-modal-subtitle:var(--ath-font-size-heading-4)}:root{--ath-color-radiobutton-bg-disabled-checked:var(--ath-color-bg-alpha-boldest-disabled);--ath-color-radiobutton-bg-disabled-default:var(--ath-color-bg-alpha-subtler-default);--ath-color-radiobutton-border-default:var(--ath-color-border-alpha-boldest-default);--ath-color-radiobutton-border-readonly:var(--ath-color-border-alpha-boldest-default);--ath-color-radiobutton-border-disabled:var(--ath-color-border-alpha-boldest-disabled);--ath-color-radiobutton-indicator-disabled:var(--ath-color-icon-inverse-disabled);--ath-color-radiobutton-bg-default:var(--ath-color-bg-secondary-default);--ath-color-radiobutton-bg-checked:var(--ath-color-bg-primary-default);--ath-color-radiobutton-bg-readonly:var(--ath-color-bg-secondary-default);--ath-color-radiobutton-border-checked:var(--ath-color-border-primary-default);--ath-color-radiobutton-indicator-default:var(--ath-color-icon-inverse-default);--ath-color-radiobutton-indicator-readonly:var(--ath-color-icon-primary-default)}:root{--ath-sizing-radiobutton-height:24px;--ath-sizing-radiobutton-width:24px;--ath-border-radius-radiobutton:var(--ath-border-radius-lg);--ath-spacing-radiobutton-group-row-gap:var(--ath-spacing-between-100);--ath-spacing-radiobutton-col-gap:var(--ath-spacing-between-100);--ath-spacing-radiobutton-row-gap:var(--ath-spacing-between-050)}:root{--ath-color-pagination-page-button-bg-default:var(--ath-color-bg-alpha-default);--ath-color-pagination-page-button-bg-selected:var(--ath-color-bg-primary-default);--ath-color-pagination-page-button-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-pagination-page-button-bg-pressed:var(--ath-color-bg-primary-pressed);--ath-color-pagination-page-button-fg-default:var(--ath-color-fg-default);--ath-color-pagination-page-button-fg-hovered:var(--ath-color-fg-inverse-default);--ath-color-pagination-page-button-fg-pressed:var(--ath-color-fg-inverse-default);--ath-color-pagination-page-button-fg-selected:var(--ath-color-fg-inverse-default)}:root{--ath-border-radius-pagination-page-button:var(--ath-border-radius-circle);--ath-spacing-pagination-page-button-padding-y:var(--ath-spacing-around-075);--ath-spacing-pagination-page-button-padding-x:var(--ath-spacing-around-075);--ath-spacing-pagination-col-gap:var(--ath-spacing-between-200);--ath-spacing-pagination-page-control-col-gap:var(--ath-spacing-between-100)}:root{--ath-color-segmented-control-item-bg-secondary-hover:var(--ath-color-bg-alpha-hovered);--ath-color-segmented-control-item-bg-secondary-active:var(--ath-color-bg-alpha-pressed);--ath-color-segmented-control-item-bg-disabled-selected:var(--ath-color-bg-alpha-disabled);--ath-color-segmented-control-item-fg-disabled:var(--ath-color-fg-disabled);--ath-color-segmented-control-item-icon-disabled:var(--ath-color-icon-disabled);--ath-color-segmented-control-border-disabled:var(--ath-color-border-alpha-boldest-disabled);--ath-color-segmented-control-item-bg-primary-hover:var(--ath-color-bg-primary-hovered);--ath-color-segmented-control-item-bg-primary-active:var(--ath-color-bg-primary-pressed);--ath-color-segmented-control-item-bg-primary-selected:var(--ath-color-bg-primary-default);--ath-color-segmented-control-item-bg-secondary-selected:var(--ath-color-bg-secondary-bold-default);--ath-color-segmented-control-item-bg-disabled-default:var(--ath-color-bg-secondary-default);--ath-color-segmented-control-item-fg-primary-default:var(--ath-color-fg-primary-default);--ath-color-segmented-control-item-fg-primary-hover:var(--ath-color-fg-inverse-default);--ath-color-segmented-control-item-fg-primary-active:var(--ath-color-fg-inverse-default);--ath-color-segmented-control-item-fg-primary-focus:var(--ath-color-fg-primary-default);--ath-color-segmented-control-item-fg-primary-selected:var(--ath-color-fg-inverse-default);--ath-color-segmented-control-item-fg-secondary-default:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-hover:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-active:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-focus:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-selected:var(--ath-color-fg-inverse-default);--ath-color-segmented-control-item-icon-primary-default:var(--ath-color-icon-primary-default);--ath-color-segmented-control-item-icon-primary-hover:var(--ath-color-icon-inverse-default);--ath-color-segmented-control-item-icon-primary-active:var(--ath-color-icon-inverse-default);--ath-color-segmented-control-item-icon-primary-focus:var(--ath-color-icon-primary-default);--ath-color-segmented-control-item-icon-primary-selected:var(--ath-color-icon-inverse-default);--ath-color-segmented-control-item-icon-secondary-default:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-hover:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-active:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-focus:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-selected:var(--ath-color-icon-inverse-default);--ath-color-segmented-control-border-primary:var(--ath-color-border-primary-default);--ath-color-segmented-control-border-secondary:var(--ath-color-border-secondary-strong-default)}:root{--ath-border-radius-segmented-control-item:var(--ath-border-radius-circle);--ath-border-radius-segmented-control-group:var(--ath-border-radius-circle);--ath-spacing-segmented-control-row-gap:var(--ath-spacing-between-100);--ath-spacing-segmented-control-group-padding-sm:var(--ath-spacing-around-050);--ath-spacing-segmented-control-group-padding-md:var(--ath-spacing-around-050);--ath-spacing-segmented-control-group-padding-lg:var(--ath-spacing-around-050);--ath-spacing-segmented-control-group-padding-xs-x:var(--ath-spacing-around-050);--ath-spacing-segmented-control-group-padding-xs-y:var(--ath-spacing-around-025);--ath-spacing-segmented-control-group-col-gap:var(--ath-spacing-between-050);--ath-spacing-segmented-control-item-col-gap:var(--ath-spacing-between-100)}:root{--ath-spacing-empty-state-padding-x:var(--ath-spacing-around-300);--ath-spacing-empty-state-padding-y:var(--ath-spacing-around-400);--ath-spacing-empty-state-row-gap-sm:var(--ath-spacing-between-200);--ath-spacing-empty-state-row-gap-md:var(--ath-spacing-between-300)}:root{--ath-color-slider-controller-steps-default:var(--ath-color-black-alpha-40);--ath-color-slider-controller-steps-selected:var(--ath-color-white-alpha-40);--ath-color-slider-controller-trail-bg-disabled:var(--ath-color-secondary-50);--ath-color-slider-controller-indicator-bg-disabled:var(--ath-color-secondary-50);--ath-color-slider-controller-trail-bg-default:var(--ath-color-bg-secondary-subtler-default);--ath-color-slider-controller-trail-bg-selected:var(--ath-color-bg-primary-default);--ath-color-slider-controller-trail-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-slider-controller-trail-bg-pressed:var(--ath-color-bg-primary-pressed);--ath-color-slider-controller-indicator-bg-default:var(--ath-color-bg-primary-default);--ath-color-slider-controller-indicator-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-slider-controller-indicator-bg-pressed:var(--ath-color-bg-primary-pressed)}:root{--ath-sizing-slider-controller-trail-height:4px;--ath-sizing-slider-controller-steps-height:2px;--ath-sizing-slider-controller-steps-width:2px;--ath-border-radius-slider-controller-trail:var(--ath-border-radius-circle);--ath-border-radius-slider-controller-indicator:var(--ath-border-radius-circle);--ath-border-radius-slider-tooltip:var(--ath-border-radius-md);--ath-spacing-slider-row-gap:var(--ath-spacing-between-300);--ath-spacing-slider-header-row-gap:var(--ath-spacing-between-100);--ath-spacing-slider-content-row-gap:var(--ath-spacing-between-100);--ath-spacing-slider-controller-row-gap:var(--ath-spacing-between-200);--ath-spacing-slider-controller-indicator-padding:var(--ath-spacing-around-100);--ath-spacing-slider-tooltip-padding-x:var(--ath-spacing-around-100);--ath-spacing-slider-tooltip-padding-y:var(--ath-spacing-around-050)}:root{--ath-color-switch-bg-default:var(--ath-color-secondary-50);--ath-color-switch-bg-hovered:var(--ath-color-secondary-40);--ath-color-switch-bg-pressed:var(--ath-color-secondary-30);--ath-color-switch-bg-readonly:var(--ath-color-bg-alpha-default);--ath-color-switch-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-switch-controller-bg-selected:var(--ath-color-primary-95);--ath-color-switch-controller-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-switch-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-switch-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-switch-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-switch-border-readonly:var(--ath-color-border-secondary-bolder-default);--ath-color-switch-controller-bg-default:var(--ath-color-bg-secondary-boldest-default);--ath-color-switch-controller-bg-readonly:var(--ath-color-bg-secondary-boldest-default);--ath-color-switch-icon-selected:var(--ath-color-icon-default);--ath-color-switch-icon-readonly:var(--ath-color-icon-inverse-default)}:root{--ath-sizing-switch-width:48px;--ath-sizing-switch-controller-width:16px;--ath-sizing-switch-controller-height:16px;--ath-border-radius-switch:var(--ath-border-radius-circle);--ath-border-radius-controller:var(--ath-border-radius-circle);--ath-spacing-switch-padding-around:var(--ath-spacing-around-050)}:root{--ath-color-tooltip-bg-secondary:var(--ath-color-bg-secondary-boldest-default);--ath-color-tooltip-bg-primary:var(--ath-color-bg-primary-default);--ath-color-tooltip-fg:var(--ath-color-fg-inverse-default)}:root{--ath-border-radius-tooltip:var(--ath-border-radius-xl);--ath-border-radius-tooltip-chevron:var(--ath-border-radius-2xs);--ath-border-radius-tooltip-trigger:var(--ath-border-radius-circle);--ath-spacing-tooltip-padding-y:var(--ath-spacing-around-300);--ath-spacing-tooltip-padding-x:var(--ath-spacing-around-300)}body.dark,.inverse-dark{--ath-color-table-row-item-bg-group:calc(ath.color.brand.table.row-item.bg.group);--ath-sizing-badge-dot-height:8px;--ath-sizing-badge-dot-width:8px;--ath-sizing-checkbox-box-height:24px;--ath-sizing-checkbox-box-width:24px;--ath-sizing-scroll:6px;--ath-sizing-tab-item-indicator-height:2px;--ath-sizing-card-thumbnail-avatar-height:60px;--ath-sizing-card-thumbnail-avatar-width:60px;--ath-sizing-radiobutton-height:24px;--ath-sizing-radiobutton-width:24px;--ath-sizing-slider-controller-trail-height:4px;--ath-sizing-slider-controller-steps-height:2px;--ath-sizing-slider-controller-steps-width:2px;--ath-sizing-switch-width:48px;--ath-sizing-switch-controller-width:16px;--ath-sizing-switch-controller-height:16px;--ath-box-shadow-chip-dismiss-button-focus-blur:0;--ath-box-shadow-chip-dismiss-button-focus-spread:2px;--ath-box-shadow-chip-dismiss-button-focus-type:dropShadow;--ath-box-shadow-chip-dismiss-button-focus-offset-x:0;--ath-box-shadow-chip-dismiss-button-focus-offset-y:0;--ath-box-shadow-card-hovered-type:dropShadow;--ath-box-shadow-card-pressed-type:dropShadow;--ath-box-shadow-modal-type:dropShadow;--ath-color-bg-alpha-default:var(--ath-color-white-alpha-0);--ath-color-bg-alpha-hovered:var(--ath-color-white-alpha-10);--ath-color-bg-alpha-pressed:var(--ath-color-white-alpha-20);--ath-color-bg-alpha-focus:var(--ath-color-white-alpha-5);--ath-color-bg-alpha-disabled:var(--ath-color-white-alpha-20);--ath-color-bg-alpha-boldest-disabled:var(--ath-color-white-alpha-50);--ath-color-bg-alpha-boldest-hovered:var(--ath-color-white-alpha-60);--ath-color-bg-alpha-boldest-pressed:var(--ath-color-white-alpha-70);--ath-color-bg-alpha-bolder-default:var(--ath-color-white-alpha-20);--ath-color-bg-alpha-bolder-hovered:var(--ath-color-white-alpha-40);--ath-color-bg-alpha-subtler-default:var(--ath-color-white-alpha-5);--ath-color-bg-alpha-subtler-hovered:var(--ath-color-white-alpha-10);--ath-color-bg-alpha-subtler-pressed:var(--ath-color-white-alpha-20);--ath-color-bg-alpha-subtle-default:var(--ath-color-white-alpha-10);--ath-color-bg-alpha-subtle-hovered:var(--ath-color-white-alpha-20);--ath-color-bg-alpha-subtle-pressed:var(--ath-color-white-alpha-30);--ath-color-border-alpha-default:var(--ath-color-white-alpha-0);--ath-color-border-alpha-hovered:var(--ath-color-white-alpha-10);--ath-color-border-alpha-pressed:var(--ath-color-white-alpha-20);--ath-color-border-alpha-focus:var(--ath-color-white-alpha-5);--ath-color-border-alpha-boldest-disabled:var(--ath-color-white-alpha-50);--ath-color-border-alpha-boldest-default:var(--ath-color-white-alpha-40);--ath-color-border-alpha-bold-default:var(--ath-color-white-alpha-10);--ath-color-border-alpha-bolder-default:var(--ath-color-white-alpha-20);--ath-color-fg-disabled:var(--ath-color-white-alpha-80);--ath-color-icon-disabled:var(--ath-color-white-alpha-80);--ath-color-accordion-box-item-bg:var(--ath-color-black-alpha-40);--ath-color-alert-bg-info:var(--ath-color-black-alpha-50);--ath-color-alert-bg-warning:var(--ath-color-black-alpha-50);--ath-color-alert-bg-success:var(--ath-color-black-alpha-50);--ath-color-alert-bg-danger:var(--ath-color-black-alpha-50);--ath-color-checkbox-bg-default:var(--ath-color-black-alpha-40);--ath-color-checkbox-bg-readonly:var(--ath-color-black-alpha-40);--ath-color-checkbox-border-readonly:var(--ath-color-white-alpha-40);--ath-color-chip-dismiss-button-bg-hovered:var(--ath-color-black-alpha-60);--ath-color-chip-dismiss-button-bg-pressed:var(--ath-color-black-alpha-70);--ath-color-input-bg-default:var(--ath-color-black-alpha-40);--ath-color-input-datepicker-option-bg-selected-range-default:var(--ath-color-black-alpha-20);--ath-color-input-datepicker-option-bg-selected-range-hovered:var(--ath-color-black-alpha-10);--ath-color-input-datepicker-option-bg-selected-range-hovered-copy:var(--ath-color-black-alpha-10);--ath-color-scroll-track-bg:var(--ath-color-white-alpha-5);--ath-color-tab-header-border:var(--ath-color-white-alpha-80);--ath-color-card-content-bg:var(--ath-color-black-alpha-40);--ath-color-card-drop-shadow-hovered:var(--ath-color-black-alpha-0);--ath-color-card-drop-shadow-pressed:var(--ath-color-black-alpha-0);--ath-color-list-bg-white:var(--ath-color-black-alpha-40);--ath-color-list-bg-transparent:var(--ath-color-white-alpha-0);--ath-color-modal-border:var(--ath-color-white-alpha-40);--ath-color-radiobutton-bg-default:var(--ath-color-black-alpha-40);--ath-color-radiobutton-bg-readonly:var(--ath-color-black-alpha-40);--ath-color-slider-controller-steps-default:var(--ath-color-black-alpha-40);--ath-color-slider-controller-steps-selected:var(--ath-color-white-alpha-40);--ath-font-size-icon-lg:var(--ath-font-size-2);--ath-box-shadow-card-hovered-blur:var(--ath-box-shadow-blur-0);--ath-box-shadow-card-hovered-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-card-hovered-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-card-hovered-offset-y:var(--ath-box-shadow-position-y-0);--ath-box-shadow-card-pressed-blur:var(--ath-box-shadow-blur-0);--ath-box-shadow-card-pressed-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-card-pressed-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-card-pressed-offset-y:var(--ath-box-shadow-position-y-0);--ath-box-shadow-modal-blur:var(--ath-box-shadow-blur-4);--ath-box-shadow-modal-spread:var(--ath-box-shadow-spread-0);--ath-box-shadow-modal-offset-x:var(--ath-box-shadow-position-x-0);--ath-box-shadow-modal-offset-y:var(--ath-box-shadow-position-y-4);--ath-color-bg-surface-primary:var(--ath-color-primary-50);--ath-color-bg-surface-accent:var(--ath-color-accent-60);--ath-color-bg-surface-secondary-subtlest:var(--ath-color-secondary-00);--ath-color-bg-surface-secondary-subtler:var(--ath-color-secondary-15);--ath-color-bg-surface-secondary-subtle:var(--ath-color-secondary-20);--ath-color-bg-surface-secondary-bold:var(--ath-color-secondary-30);--ath-color-bg-surface-secondary-strong:var(--ath-color-secondary-10);--ath-color-bg-primary-default:var(--ath-color-primary-65);--ath-color-bg-primary-hovered:var(--ath-color-primary-70);--ath-color-bg-primary-pressed:var(--ath-color-primary-80);--ath-color-bg-secondary-default:var(--ath-color-secondary-100);--ath-color-bg-secondary-subtlest-default:var(--ath-color-secondary-95);--ath-color-bg-secondary-subtler-default:var(--ath-color-secondary-90);--ath-color-bg-secondary-bold-default:var(--ath-color-secondary-15);--ath-color-bg-secondary-bolder-default:var(--ath-color-secondary-10);--ath-color-bg-secondary-boldest-default:var(--ath-color-secondary-00);--ath-color-bg-accent-default:var(--ath-color-accent-60);--ath-color-bg-accent-hovered:var(--ath-color-accent-65);--ath-color-bg-accent-pressed:var(--ath-color-accent-70);--ath-color-bg-success-default:var(--ath-color-success-65);--ath-color-bg-success-hovered:var(--ath-color-success-60);--ath-color-bg-success-pressed:var(--ath-color-success-50);--ath-color-bg-danger-default:var(--ath-color-danger-65);--ath-color-bg-danger-hovered:var(--ath-color-danger-60);--ath-color-bg-danger-pressed:var(--ath-color-danger-50);--ath-color-bg-warning-default:var(--ath-color-warning-65);--ath-color-bg-warning-hovered:var(--ath-color-warning-60);--ath-color-bg-warning-pressed:var(--ath-color-warning-50);--ath-color-bg-info-default:var(--ath-color-info-70);--ath-color-bg-info-hovered:var(--ath-color-info-65);--ath-color-bg-info-pressed:var(--ath-color-info-60);--ath-color-border-primary-default:var(--ath-color-primary-65);--ath-color-border-primary-hovered:var(--ath-color-primary-70);--ath-color-border-primary-pressed:var(--ath-color-primary-80);--ath-color-border-primary-subtle-default:var(--ath-color-primary-65);--ath-color-border-primary-subtle-hovered:var(--ath-color-primary-70);--ath-color-border-primary-subtle-pressed:var(--ath-color-primary-80);--ath-color-border-focus:var(--ath-color-secondary-100);--ath-color-border-inverse-focus:var(--ath-color-secondary-100);--ath-color-border-secondary-default:var(--ath-color-secondary-80);--ath-color-border-secondary-hovered:var(--ath-color-secondary-70);--ath-color-border-secondary-pressed:var(--ath-color-secondary-65);--ath-color-border-secondary-subtle-default:var(--ath-color-secondary-90);--ath-color-border-secondary-subtle-hovered:var(--ath-color-secondary-80);--ath-color-border-secondary-subtle-pressed:var(--ath-color-secondary-70);--ath-color-border-secondary-bold-default:var(--ath-color-secondary-70);--ath-color-border-secondary-bold-hovered:var(--ath-color-secondary-65);--ath-color-border-secondary-bold-pressed:var(--ath-color-secondary-60);--ath-color-border-secondary-bolder-default:var(--ath-color-secondary-50);--ath-color-border-secondary-bolder-hovered:var(--ath-color-secondary-40);--ath-color-border-secondary-bolder-pressed:var(--ath-color-secondary-30);--ath-color-border-secondary-boldest-default:var(--ath-color-secondary-30);--ath-color-border-secondary-boldest-hovered:var(--ath-color-secondary-20);--ath-color-border-secondary-boldest-pressed:var(--ath-color-secondary-10);--ath-color-border-accent-default:var(--ath-color-accent-60);--ath-color-border-accent-hovered:var(--ath-color-accent-65);--ath-color-border-accent-pressed:var(--ath-color-accent-70);--ath-color-border-success-default:var(--ath-color-success-65);--ath-color-border-success-hovered:var(--ath-color-success-60);--ath-color-border-success-pressed:var(--ath-color-success-50);--ath-color-border-danger-default:var(--ath-color-danger-65);--ath-color-border-danger-hovered:var(--ath-color-danger-70);--ath-color-border-danger-pressed:var(--ath-color-danger-80);--ath-color-border-warning-default:var(--ath-color-warning-65);--ath-color-border-warning-hovered:var(--ath-color-warning-60);--ath-color-border-warning-pressed:var(--ath-color-warning-50);--ath-color-border-info-default:var(--ath-color-info-70);--ath-color-border-info-hovered:var(--ath-color-info-65);--ath-color-border-info-pressed:var(--ath-color-info-60);--ath-color-fg-default:var(--ath-color-secondary-100);--ath-color-fg-subtle:var(--ath-color-secondary-100);--ath-color-fg-primary-heading:var(--ath-color-primary-65);--ath-color-fg-primary-default:var(--ath-color-primary-80);--ath-color-fg-primary-hovered:var(--ath-color-primary-95);--ath-color-fg-primary-pressed:var(--ath-color-primary-95);--ath-color-fg-accent-default:var(--ath-color-accent-70);--ath-color-fg-accent-heading:var(--ath-color-accent-60);--ath-color-fg-feedback-success:var(--ath-color-success-65);--ath-color-fg-feedback-danger:var(--ath-color-danger-80);--ath-color-fg-feedback-warning:var(--ath-color-warning-65);--ath-color-fg-feedback-info:var(--ath-color-info-65);--ath-color-icon-default:var(--ath-color-secondary-100);--ath-color-icon-subtle:var(--ath-color-secondary-100);--ath-color-icon-primary-default:var(--ath-color-primary-80);--ath-color-icon-primary-hovered:var(--ath-color-primary-95);--ath-color-icon-primary-pressed:var(--ath-color-primary-95);--ath-color-icon-accent-default:var(--ath-color-accent-60);--ath-color-icon-feedback-success:var(--ath-color-success-65);--ath-color-icon-feedback-danger:var(--ath-color-danger-80);--ath-color-icon-feedback-warning:var(--ath-color-warning-65);--ath-color-icon-feedback-info:var(--ath-color-info-65);--ath-color-drop-shadow-focus:var(--ath-color-secondary-00);--ath-color-badge-border:var(--ath-color-secondary-100);--ath-color-badge-fg-accent:var(--ath-color-secondary-00);--ath-color-badge-fg-danger:var(--ath-color-secondary-00);--ath-color-badge-fg-success:var(--ath-color-secondary-00);--ath-color-badge-fg-warning:var(--ath-color-secondary-00);--ath-color-badge-fg-info:var(--ath-color-secondary-00);--ath-color-button-fg-primary-default:var(--ath-color-secondary-00);--ath-color-button-fg-primary-hovered:var(--ath-color-secondary-10);--ath-color-button-fg-primary-pressed:var(--ath-color-secondary-10);--ath-color-button-fg-primary-clear-hovered:var(--ath-color-secondary-10);--ath-color-button-fg-primary-clear-pressed:var(--ath-color-secondary-10);--ath-color-button-fg-secondary-hovered:var(--ath-color-secondary-00);--ath-color-button-fg-secondary-pressed:var(--ath-color-secondary-00);--ath-color-button-fg-secondary-clear-hovered:var(--ath-color-secondary-00);--ath-color-button-fg-secondary-clear-pressed:var(--ath-color-secondary-00);--ath-color-button-fg-disabled:var(--ath-color-fg-disabled);--ath-color-button-bg-primary-default:var(--ath-color-secondary-100);--ath-color-button-bg-primary-clear-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-primary-clear-hovered:var(--ath-color-secondary-100);--ath-color-button-bg-secondary-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-secondary-hovered:var(--ath-color-secondary-100);--ath-color-button-bg-secondary-clear-default:var(--ath-color-bg-alpha-default);--ath-color-button-bg-secondary-clear-hovered:var(--ath-color-secondary-100);--ath-color-button-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-button-border-primary-default:var(--ath-color-secondary-100);--ath-color-button-border-primary-clear-default:var(--ath-color-border-alpha-default);--ath-color-button-border-primary-clear-hovered:var(--ath-color-secondary-100);--ath-color-button-border-secondary-hovered:var(--ath-color-secondary-100);--ath-color-button-border-secondary-clear-default:var(--ath-color-border-alpha-default);--ath-color-button-border-secondary-clear-hovered:var(--ath-color-secondary-100);--ath-color-button-border-disabled:var(--ath-color-border-alpha-disabled);--ath-color-button-icon-primary-default:var(--ath-color-primary-40);--ath-color-button-icon-primary-hovered:var(--ath-color-secondary-00);--ath-color-button-icon-primary-pressed:var(--ath-color-secondary-00);--ath-color-button-icon-primary-clear-hovered:var(--ath-color-secondary-00);--ath-color-button-icon-primary-clear-pressed:var(--ath-color-secondary-00);--ath-color-button-icon-secondary-hovered:var(--ath-color-secondary-00);--ath-color-button-icon-secondary-pressed:var(--ath-color-secondary-00);--ath-color-button-icon-secondary-clear-hovered:var(--ath-color-secondary-00);--ath-color-button-icon-secondary-clear-pressed:var(--ath-color-secondary-00);--ath-color-button-icon-disabled:var(--ath-color-icon-disabled);--ath-color-checkbox-bg-checked:var(--ath-color-secondary-100);--ath-color-checkbox-bg-indeterminated:var(--ath-color-secondary-100);--ath-color-checkbox-border-default:var(--ath-color-secondary-100);--ath-color-checkbox-border-checked:var(--ath-color-secondary-100);--ath-color-checkbox-border-indeterminated:var(--ath-color-secondary-100);--ath-color-checkbox-icon-default:var(--ath-color-secondary-00);--ath-color-checkbox-icon-disabled:var(--ath-color-secondary-30);--ath-color-chip-dismiss-bg:var(--ath-color-secondary-65);--ath-color-chip-dismiss-fg:var(--ath-color-secondary-00);--ath-color-chip-dismiss-icon:var(--ath-color-secondary-00);--ath-color-chip-dismiss-button-icon-default:var(--ath-color-secondary-00);--ath-color-chip-dismiss-button-border-focus:var(--ath-color-secondary-00);--ath-color-chip-choice-bg-selected:var(--ath-color-primary-65);--ath-color-chip-choice-fg-hovered:var(--ath-color-secondary-00);--ath-color-chip-choice-fg-pressed:var(--ath-color-secondary-00);--ath-color-chip-choice-fg-selected-default:var(--ath-color-secondary-00);--ath-color-chip-choice-fg-selected-focus:var(--ath-color-secondary-00);--ath-color-chip-choice-icon-hovered:var(--ath-color-secondary-00);--ath-color-chip-choice-icon-pressed:var(--ath-color-secondary-00);--ath-color-chip-choice-icon-selected-default:var(--ath-color-secondary-00);--ath-color-chip-choice-icon-selected-focus:var(--ath-color-secondary-00);--ath-color-input-border-default:var(--ath-color-secondary-100);--ath-color-input-dropdown-option-bg-selected-default:var(--ath-color-primary-50);--ath-color-input-dropdown-option-bg-selected-hovered:var(--ath-color-primary-60);--ath-color-input-dropdown-option-bg-selected-pressed:var(--ath-color-primary-70);--ath-color-input-dropdown-option-icon-selected-hovered:var(--ath-color-secondary-00);--ath-color-input-dropdown-option-icon-selected-pressed:var(--ath-color-secondary-00);--ath-color-input-dropdown-option-fg-selected-hovered:var(--ath-color-secondary-00);--ath-color-input-dropdown-option-fg-selected-pressed:var(--ath-color-secondary-00);--ath-color-input-dropdown-overlay-border:var(--ath-color-secondary-100);--ath-color-input-dropdown-overlay-bg:var(--ath-color-secondary-10);--ath-color-input-dropdown-border-active:var(--ath-color-secondary-100);--ath-color-input-datepicker-option-fg-selected-hovered:var(--ath-color-secondary-00);--ath-color-input-datepicker-option-fg-selected-default:var(--ath-color-secondary-00);--ath-color-input-datepicker-option-fg-selected-pressed:var(--ath-color-secondary-00);--ath-color-input-datepicker-overlay-border:var(--ath-color-border-alpha-boldest-default);--ath-color-tab-item-indicator-bg-default:var(--ath-color-secondary-100);--ath-color-tab-item-box-border:var(--ath-color-secondary-70);--ath-color-tab-item-box-bg-selected:var(--ath-color-secondary-70);--ath-color-tab-item-box-fg-selected:var(--ath-color-secondary-00);--ath-color-tab-item-box-icon-selected:var(--ath-color-secondary-00);--ath-color-tag-bg-primary:var(--ath-color-primary-70);--ath-color-tag-bg-secondary:var(--ath-color-secondary-80);--ath-color-tag-fg-primary:var(--ath-color-secondary-00);--ath-color-tag-fg-secondary:var(--ath-color-secondary-00);--ath-color-tag-fg-accent:var(--ath-color-secondary-00);--ath-color-tag-fg-danger:var(--ath-color-secondary-00);--ath-color-tag-fg-warning:var(--ath-color-secondary-00);--ath-color-tag-fg-success:var(--ath-color-secondary-00);--ath-color-tag-icon-primary:var(--ath-color-secondary-00);--ath-color-tag-icon-secondary:var(--ath-color-secondary-00);--ath-color-tag-icon-accent:var(--ath-color-secondary-00);--ath-color-tag-icon-danger:var(--ath-color-secondary-00);--ath-color-tag-icon-warning:var(--ath-color-secondary-00);--ath-color-tag-icon-success:var(--ath-color-secondary-00);--ath-color-card-thumbnail-highlight-bg:var(--ath-color-success-60);--ath-color-card-thumbnail-highlight-fg:var(--ath-color-secondary-00);--ath-color-card-border-hovered:var(--ath-color-secondary-100);--ath-color-card-border-pressed:var(--ath-color-secondary-100);--ath-color-card-selectable-border-selected:var(--ath-color-secondary-100);--ath-color-card-selectable-icon:var(--ath-color-secondary-100);--ath-color-menu-button-option-bg-selected-default:var(--ath-color-primary-50);--ath-color-menu-button-option-bg-selected-hovered:var(--ath-color-primary-60);--ath-color-menu-button-option-bg-selected-pressed:var(--ath-color-primary-70);--ath-color-menu-button-option-icon-selected-hovered:var(--ath-color-secondary-00);--ath-color-menu-button-option-icon-selected-pressed:var(--ath-color-secondary-00);--ath-color-menu-button-option-fg-selected-hovered:var(--ath-color-secondary-00);--ath-color-menu-button-option-fg-selected-pressed:var(--ath-color-secondary-00);--ath-color-menu-button-overlay-bg:var(--ath-color-secondary-10);--ath-color-table-row-item-border:var(--ath-color-border-alpha-boldest-default);--ath-color-table-row-item-border-x:var(--ath-color-border-alpha-boldest-default);--ath-color-table-row-item-bg-striped:var(--ath-color-bg-alpha-subtler-default);--ath-color-table-row-item-gradient-default-1:var(--ath-color-bg-alpha-default);--ath-color-table-row-item-gradient-default-2:var(--ath-color-bg-alpha-default);--ath-color-table-row-item-gradient-group-1:var(--ath-color-bg-alpha-subtle-default);--ath-color-table-row-item-gradient-group-2:var(--ath-color-bg-alpha-subtle-default);--ath-color-table-row-item-gradient-striped-1:var(--ath-color-bg-alpha-subtler-default);--ath-color-table-row-item-gradient-striped-2:var(--ath-color-bg-alpha-subtler-default);--ath-color-table-col-header-border:var(--ath-color-border-alpha-boldest-default);--ath-color-radiobutton-bg-disabled-checked:var(--ath-color-bg-alpha-boldest-disabled);--ath-color-radiobutton-bg-disabled-default:var(--ath-color-bg-alpha-subtler-default);--ath-color-radiobutton-border-default:var(--ath-color-border-alpha-boldest-default);--ath-color-radiobutton-border-readonly:var(--ath-color-border-alpha-boldest-default);--ath-color-radiobutton-border-disabled:var(--ath-color-border-alpha-boldest-disabled);--ath-color-radiobutton-indicator-disabled:var(--ath-color-secondary-30);--ath-color-pagination-page-button-bg-selected:var(--ath-color-primary-50);--ath-color-pagination-page-button-bg-default:var(--ath-color-bg-alpha-default);--ath-color-pagination-page-button-fg-hovered:var(--ath-color-secondary-00);--ath-color-pagination-page-button-fg-pressed:var(--ath-color-secondary-00);--ath-color-segmented-control-item-bg-secondary-hover:var(--ath-color-bg-alpha-hovered);--ath-color-segmented-control-item-bg-secondary-active:var(--ath-color-bg-alpha-pressed);--ath-color-segmented-control-item-bg-secondary-selected:var(--ath-color-secondary-100);--ath-color-segmented-control-item-bg-disabled-selected:var(--ath-color-bg-alpha-disabled);--ath-color-segmented-control-item-fg-primary-hover:var(--ath-color-secondary-00);--ath-color-segmented-control-item-fg-primary-active:var(--ath-color-secondary-00);--ath-color-segmented-control-item-fg-secondary-selected:var(--ath-color-secondary-00);--ath-color-segmented-control-item-fg-disabled:var(--ath-color-fg-disabled);--ath-color-segmented-control-item-icon-primary-hover:var(--ath-color-secondary-00);--ath-color-segmented-control-item-icon-primary-active:var(--ath-color-secondary-00);--ath-color-segmented-control-item-icon-secondary-selected:var(--ath-color-secondary-00);--ath-color-segmented-control-item-icon-disabled:var(--ath-color-icon-disabled);--ath-color-segmented-control-border-disabled:var(--ath-color-border-alpha-boldest-disabled);--ath-color-slider-controller-trail-bg-disabled:var(--ath-color-secondary-70);--ath-color-slider-controller-indicator-bg-disabled:var(--ath-color-secondary-70);--ath-color-switch-bg-default:var(--ath-color-secondary-50);--ath-color-switch-bg-hovered:var(--ath-color-secondary-40);--ath-color-switch-bg-pressed:var(--ath-color-secondary-30);--ath-color-switch-bg-readonly:var(--ath-color-bg-alpha-default);--ath-color-switch-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-switch-controller-bg-selected:var(--ath-color-secondary-100);--ath-color-switch-controller-bg-readonly:var(--ath-color-secondary-100);--ath-color-switch-controller-bg-disabled:var(--ath-color-bg-alpha-disabled);--ath-color-switch-icon-selected:var(--ath-color-secondary-00);--ath-color-switch-icon-readonly:var(--ath-color-secondary-00);--ath-color-tooltip-bg-secondary:var(--ath-color-secondary-100);--ath-color-tooltip-bg-primary:var(--ath-color-primary-80);--ath-color-tooltip-fg:var(--ath-color-secondary-00);--ath-font-size-icon-xs:var(--ath-font-size-04);--ath-font-size-icon-sm:var(--ath-font-size-06);--ath-font-size-icon-md:var(--ath-font-size-07);--ath-font-weight-checkbox-label:var(--ath-font-weight-regular);--ath-font-weight-checkbox-checked:var(--ath-font-weight-medium);--ath-font-weight-checkbox-indeterminated:var(--ath-font-weight-medium);--ath-font-weight-title-section-heading:var(--ath-font-weight-medium);--ath-box-shadow-card-hovered-color:var(--ath-color-card-drop-shadow-hovered);--ath-box-shadow-card-pressed-color:var(--ath-color-card-drop-shadow-pressed);--ath-box-shadow-modal-color:var(--ath-color-drop-shadow-default);--ath-color-accordion-item-header-text-description:var(--ath-color-fg-inverse-default);--ath-color-alert-border-info:var(--ath-color-border-info-subtle-default);--ath-color-alert-border-warning:var(--ath-color-border-warning-subtle-default);--ath-color-alert-border-success:var(--ath-color-border-success-subtle-default);--ath-color-alert-border-danger:var(--ath-color-border-danger-subtle-default);--ath-color-alert-fg-info:var(--ath-color-fg-feedback-info);--ath-color-alert-fg-warning:var(--ath-color-fg-feedback-warning);--ath-color-alert-fg-success:var(--ath-color-fg-feedback-success);--ath-color-alert-fg-danger:var(--ath-color-fg-feedback-danger);--ath-color-alert-icon-info:var(--ath-color-icon-feedback-info);--ath-color-alert-icon-warning:var(--ath-color-icon-feedback-warning);--ath-color-alert-icon-success:var(--ath-color-fg-feedback-success);--ath-color-alert-icon-danger:var(--ath-color-icon-feedback-danger);--ath-color-alert-button-close-info:var(--ath-color-icon-feedback-info);--ath-color-alert-button-close-warning:var(--ath-color-icon-feedback-warning);--ath-color-alert-button-close-success:var(--ath-color-fg-feedback-success);--ath-color-alert-button-close-danger:var(--ath-color-icon-feedback-danger);--ath-color-button-fg-primary-clear-default:var(--ath-color-fg-primary-default);--ath-color-button-fg-secondary-default:var(--ath-color-fg-primary-default);--ath-color-button-fg-secondary-clear-default:var(--ath-color-fg-default);--ath-color-button-bg-primary-hovered:var(--ath-color-bg-primary-hovered);--ath-color-button-bg-primary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-primary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-secondary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-bg-secondary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-primary-hovered:var(--ath-color-border-primary-hovered);--ath-color-button-border-primary-pressed:var(--ath-color-border-primary-pressed);--ath-color-button-border-primary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-secondary-default:var(--ath-color-border-primary-default);--ath-color-button-border-secondary-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-border-secondary-clear-pressed:var(--ath-color-bg-primary-pressed);--ath-color-button-icon-primary-clear-default:var(--ath-color-icon-primary-default);--ath-color-button-icon-secondary-default:var(--ath-color-icon-primary-default);--ath-color-button-icon-secondary-clear-default:var(--ath-color-icon-default);--ath-color-checkbox-icon-readonly:var(--ath-color-icon-inverse-default);--ath-color-input-datepicker-option-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-input-datepicker-option-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-input-datepicker-option-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-input-datepicker-option-fg-default:var(--ath-color-fg-primary-default);--ath-color-input-datepicker-option-fg-hovered:var(--ath-color-fg-default);--ath-color-input-datepicker-option-fg-pressed:var(--ath-color-fg-default);--ath-color-input-datepicker-option-border-current:var(--ath-color-border-primary-default);--ath-color-title-section-border-primary:var(--ath-color-border-primary-default);--ath-color-title-section-border-accent:var(--ath-color-border-accent-default);--ath-color-table-row-item-fg-default:var(--ath-color-fg-default);--ath-color-table-col-header-fg-default:var(--ath-color-fg-default);--ath-color-table-col-header-bg-default:var(--ath-color-bg-secondary-boldest-default);--ath-color-table-bg-default:var(--ath-color-bg-secondary-boldest-default);--ath-color-radiobutton-bg-checked:var(--ath-color-bg-secondary-default);--ath-color-radiobutton-border-checked:var(--ath-color-bg-secondary-default);--ath-color-radiobutton-indicator-default:var(--ath-color-bg-secondary-boldest-default);--ath-color-radiobutton-indicator-readonly:var(--ath-color-icon-inverse-default);--ath-color-pagination-page-button-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-pagination-page-button-bg-pressed:var(--ath-color-bg-primary-pressed);--ath-color-pagination-page-button-fg-default:var(--ath-color-fg-default);--ath-color-pagination-page-button-fg-selected:var(--ath-color-fg-inverse-default);--ath-color-segmented-control-item-bg-primary-hover:var(--ath-color-bg-primary-hovered);--ath-color-segmented-control-item-bg-primary-active:var(--ath-color-bg-primary-pressed);--ath-color-segmented-control-item-bg-primary-selected:var(--ath-color-bg-secondary-default);--ath-color-segmented-control-item-bg-disabled-default:var(--ath-color-bg-secondary-bold-default);--ath-color-segmented-control-item-fg-primary-default:var(--ath-color-fg-primary-default);--ath-color-segmented-control-item-fg-primary-focus:var(--ath-color-fg-primary-default);--ath-color-segmented-control-item-fg-primary-selected:var(--ath-color-brand-button-fg-primary-default);--ath-color-segmented-control-item-fg-secondary-default:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-hover:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-active:var(--ath-color-fg-default);--ath-color-segmented-control-item-fg-secondary-focus:var(--ath-color-fg-default);--ath-color-segmented-control-item-icon-primary-default:var(--ath-color-icon-primary-default);--ath-color-segmented-control-item-icon-primary-focus:var(--ath-color-icon-primary-default);--ath-color-segmented-control-item-icon-primary-selected:var(--ath-color-button-icon-primary-default);--ath-color-segmented-control-item-icon-secondary-default:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-hover:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-active:var(--ath-color-icon-default);--ath-color-segmented-control-item-icon-secondary-focus:var(--ath-color-icon-default);--ath-color-segmented-control-border-primary:var(--ath-color-border-primary-default);--ath-color-segmented-control-border-secondary:var(--ath-color-border-focus);--ath-color-slider-controller-trail-bg-default:var(--ath-color-bg-secondary-subtler-default);--ath-color-slider-controller-trail-bg-selected:var(--ath-color-bg-primary-default);--ath-color-slider-controller-trail-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-slider-controller-trail-bg-pressed:var(--ath-color-bg-primary-pressed);--ath-color-slider-controller-indicator-bg-default:var(--ath-color-bg-primary-default);--ath-color-slider-controller-indicator-bg-hovered:var(--ath-color-bg-primary-hovered);--ath-color-slider-controller-indicator-bg-pressed:var(--ath-color-bg-primary-pressed);--ath-color-switch-bg-selected-default:var(--ath-color-bg-primary-default);--ath-color-switch-bg-selected-hovered:var(--ath-color-bg-primary-hovered);--ath-color-switch-bg-selected-pressed:var(--ath-color-bg-primary-pressed);--ath-color-switch-border-readonly:var(--ath-color-border-secondary-bolder-default);--ath-color-switch-controller-bg-default:var(--ath-color-bg-secondary-boldest-default);--ath-spacing-alert-text-row-gap:var(--ath-spacing-075);--ath-spacing-badge-padding-y:var(--ath-spacing-000);--ath-spacing-badge-padding-x:var(--ath-spacing-075);--ath-spacing-input-dropdown-option-group-row-gap:var(--ath-spacing-050);--ath-spacing-input-datepicker-calendar-cell-group-row-gap:var(--ath-spacing-025);--ath-spacing-tab-controls-padding:var(--ath-spacing-050);--ath-spacing-list-item-row-gap-vertical-sm:var(--ath-spacing-050);--ath-box-shadow-chip-dismiss-button-focus-color:var(--ath-color-chip-dismiss-button-border-focus)}@media screen and (max-width: 575px){:root{--ath-spacing-grid-gutter-1:var(--ath-spacing-200);--ath-spacing-grid-gutter-2:var(--ath-spacing-200);--ath-spacing-grid-gutter-3:var(--ath-spacing-200);--ath-spacing-container-margin-xs:var(--ath-spacing-200);--ath-spacing-container-margin-sm:var(--ath-spacing-200);--ath-spacing-container-margin-md:var(--ath-spacing-200);--ath-spacing-container-margin-lg:var(--ath-spacing-200);--ath-spacing-container-margin-xl:var(--ath-spacing-200);--ath-font-size-display:var(--ath-font-size-brand-mobile-display);--ath-spacing-vertical-none:var(--ath-spacing-brand-mobile-vertical-none);--ath-spacing-vertical-xs:var(--ath-spacing-brand-mobile-vertical-xs);--ath-spacing-vertical-sm:var(--ath-spacing-brand-mobile-vertical-sm);--ath-spacing-vertical-md:var(--ath-spacing-brand-mobile-vertical-md);--ath-spacing-vertical-lg:var(--ath-spacing-brand-mobile-vertical-lg);--ath-spacing-vertical-xl:var(--ath-spacing-brand-mobile-vertical-xl)}}.ath-visibility-hidden,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.ath-border--sm--100{border:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bold-default)}.ath-border--sm--200{border:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default)}.ath-border--sm--400{border:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-boldest-default)}.ath-border--md--100{border:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bold-default)}.ath-border--md--200{border:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bolder-default)}.ath-border--md--400{border:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-top--sm--100{border-top:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bold-default)}.ath-border-top--sm--200{border-top:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-top--sm--400{border-top:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-top--md--100{border-top:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bold-default)}.ath-border-top--md--200{border-top:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-top--md--400{border-top:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-right--sm--100{border-right:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bold-default)}.ath-border-right--sm--200{border-right:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-right--sm--400{border-right:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-right--md--100{border-right:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bold-default)}.ath-border-right--md--200{border-right:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-right--md--400{border-right:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-bottom--sm--100{border-bottom:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bold-default)}.ath-border-bottom--sm--200{border-bottom:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-bottom--sm--400{border-bottom:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-bottom--md--100{border-bottom:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bold-default)}.ath-border-bottom--md--200{border-bottom:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-bottom--md--400{border-bottom:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-left--sm--100{border-left:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bold-default)}.ath-border-left--sm--200{border-left:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-left--sm--400{border-left:var(--ath-border-width-xs) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-left--md--100{border-left:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bold-default)}.ath-border-left--md--200{border-left:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-bolder-default)}.ath-border-left--md--400{border-left:var(--ath-border-width-sm) solid var(--ath-color-border-alpha-boldest-default)}.ath-border-radius--xs{border-radius:var(--ath-border-radius-150)}.ath-border-radius--sm{border-radius:var(--ath-border-radius-200)}.ath-border-radius--md{border-radius:var(--ath-border-radius-250)}.ath-color-heading--default{color:var(--ath-color-fg-default)}.ath-color-heading--primary{color:var(--ath-color-fg-primary-heading)}.ath-color-heading--accent{color:var(--ath-color-fg-accent-heading)}.ath-color-text--primary{color:var(--ath-color-fg-primary-default)}.ath-color-text--default{color:var(--ath-color-fg-default)}.ath-color-text--inverse{color:var(--ath-color-fg-inverse-default)}.ath-color-text--accent{color:var(--ath-color-fg-accent-default)}.ath-color-text--subtle{color:var(--ath-color-fg-subtle)}.ath-color-text--disabled{color:var(--ath-color-fg-disabled)}.ath-color-icon--default{color:var(--ath-color-icon-default)}.ath-color-icon--inverse{color:var(--ath-color-icon-inverse-default)}.ath-color-icon--primary{color:var(--ath-color-icon-primary-default)}.ath-color-icon--accent{color:var(--ath-color-icon-accent-default)}.ath-color-icon--subtle{color:var(--ath-color-icon-subtle)}.ath-color-icon--disabled{color:var(--ath-color-icon-disabled)}.ath-color-bg--primary{background-color:var(--ath-color-bg-surface-primary)}.ath-color-bg--accent{background-color:var(--ath-color-bg-surface-accent)}.ath-color-bg--scrim{background-color:var(--ath-color-bg-surface-scrim)}.ath-color-bg--100{background-color:var(--ath-color-bg-surface-secondary-subtlest)}.ath-color-bg--200{background-color:var(--ath-color-bg-surface-secondary-subtler)}.ath-color-bg--300{background-color:var(--ath-color-bg-surface-secondary-subtle)}.ath-color-bg--400{background-color:var(--ath-color-bg-surface-secondary-bold)}.ath-color-bg--700{background-color:var(--ath-color-bg-surface-secondary-strong)}.ath-justify-start{display:flex;justify-content:flex-start}.ath-justify-center{display:flex;justify-content:center}.ath-justify-end{display:flex;justify-content:flex-end}.ath-justify-between{display:flex;justify-content:space-between}.ath-justify-around{display:flex;justify-content:space-around}.ath-justify-evenly{display:flex;justify-content:space-evenly}.ath-align-start{display:flex;align-items:flex-start}.ath-align-center{display:flex;align-items:center}.ath-align-end{display:flex;align-items:flex-end}.ath-main{display:flex;justify-content:center;height:100%}.ath-container,.ath-container--full,.ath-container--xl,.ath-container--lg,.ath-container--md,.ath-container--sm,.ath-container--xs{width:100%}.ath-grid-g--1{column-gap:var(--ath-spacing-grid-gutter-1);display:grid;grid-template-columns:repeat(12, 1fr)}.ath-grid-g--2{column-gap:var(--ath-spacing-grid-gutter-2);display:grid;grid-template-columns:repeat(12, 1fr)}.ath-grid-g--3{column-gap:var(--ath-spacing-grid-gutter-3);display:grid;grid-template-columns:repeat(12, 1fr)}.ath-col{grid-column:span 12;height:fit-content}.ath-col--1{grid-column:span 1;height:fit-content}.ath-col--2{grid-column:span 2;height:fit-content}.ath-col--3{grid-column:span 3;height:fit-content}.ath-col--4{grid-column:span 4;height:fit-content}.ath-col--5{grid-column:span 5;height:fit-content}.ath-col--6{grid-column:span 6;height:fit-content}.ath-col--7{grid-column:span 7;height:fit-content}.ath-col--8{grid-column:span 8;height:fit-content}.ath-col--9{grid-column:span 9;height:fit-content}.ath-col--10{grid-column:span 10;height:fit-content}.ath-col--11{grid-column:span 11;height:fit-content}.ath-col--12{grid-column:span 12;height:fit-content}.ath-offset--1{margin-left:8.3333333333%}.ath-offset--2{margin-left:16.6666666667%}.ath-offset--3{margin-left:25%}.ath-offset--4{margin-left:33.3333333333%}.ath-offset--5{margin-left:41.6666666667%}.ath-offset--6{margin-left:50%}.ath-offset--7{margin-left:58.3333333333%}.ath-offset--8{margin-left:66.6666666667%}.ath-offset--9{margin-left:75%}.ath-offset--10{margin-left:83.3333333333%}.ath-offset--11{margin-left:91.6666666667%}@media (min-width: 576px){.ath-container--xs{min-width:320px;max-width:576px}.ath-main-xs{display:flex;justify-content:center;height:100%}.ath-col-xs--1{grid-column:span 1;height:fit-content}.ath-col-xs--2{grid-column:span 2;height:fit-content}.ath-col-xs--3{grid-column:span 3;height:fit-content}.ath-col-xs--4{grid-column:span 4;height:fit-content}.ath-col-xs--5{grid-column:span 5;height:fit-content}.ath-col-xs--6{grid-column:span 6;height:fit-content}.ath-col-xs--7{grid-column:span 7;height:fit-content}.ath-col-xs--8{grid-column:span 8;height:fit-content}.ath-col-xs--9{grid-column:span 9;height:fit-content}.ath-col-xs--10{grid-column:span 10;height:fit-content}.ath-col-xs--11{grid-column:span 11;height:fit-content}.ath-col-xs--12{grid-column:span 12;height:fit-content}.ath-offset-xs--1{margin-left:8.3333333333%}.ath-offset-xs--2{margin-left:16.6666666667%}.ath-offset-xs--3{margin-left:25%}.ath-offset-xs--4{margin-left:33.3333333333%}.ath-offset-xs--5{margin-left:41.6666666667%}.ath-offset-xs--6{margin-left:50%}.ath-offset-xs--7{margin-left:58.3333333333%}.ath-offset-xs--8{margin-left:66.6666666667%}.ath-offset-xs--9{margin-left:75%}.ath-offset-xs--10{margin-left:83.3333333333%}.ath-offset-xs--11{margin-left:91.6666666667%}}@media (min-width: 768px){.ath-container--sm{min-width:576px;max-width:768px}.ath-container--xs{min-width:320px;max-width:576px}.ath-main-sm{display:flex;justify-content:center;height:100%}.ath-col-sm--1{grid-column:span 1;height:fit-content}.ath-col-sm--2{grid-column:span 2;height:fit-content}.ath-col-sm--3{grid-column:span 3;height:fit-content}.ath-col-sm--4{grid-column:span 4;height:fit-content}.ath-col-sm--5{grid-column:span 5;height:fit-content}.ath-col-sm--6{grid-column:span 6;height:fit-content}.ath-col-sm--7{grid-column:span 7;height:fit-content}.ath-col-sm--8{grid-column:span 8;height:fit-content}.ath-col-sm--9{grid-column:span 9;height:fit-content}.ath-col-sm--10{grid-column:span 10;height:fit-content}.ath-col-sm--11{grid-column:span 11;height:fit-content}.ath-col-sm--12{grid-column:span 12;height:fit-content}.ath-offset-sm--1{margin-left:8.3333333333%}.ath-offset-sm--2{margin-left:16.6666666667%}.ath-offset-sm--3{margin-left:25%}.ath-offset-sm--4{margin-left:33.3333333333%}.ath-offset-sm--5{margin-left:41.6666666667%}.ath-offset-sm--6{margin-left:50%}.ath-offset-sm--7{margin-left:58.3333333333%}.ath-offset-sm--8{margin-left:66.6666666667%}.ath-offset-sm--9{margin-left:75%}.ath-offset-sm--10{margin-left:83.3333333333%}.ath-offset-sm--11{margin-left:91.6666666667%}}@media (min-width: 992px){.ath-container--md{min-width:768px;max-width:992px}.ath-container--sm{min-width:576px;max-width:768px}.ath-container--xs{min-width:320px;max-width:576px}.ath-main-md{display:flex;justify-content:center;height:100%}.ath-col-md--1{grid-column:span 1;height:fit-content}.ath-col-md--2{grid-column:span 2;height:fit-content}.ath-col-md--3{grid-column:span 3;height:fit-content}.ath-col-md--4{grid-column:span 4;height:fit-content}.ath-col-md--5{grid-column:span 5;height:fit-content}.ath-col-md--6{grid-column:span 6;height:fit-content}.ath-col-md--7{grid-column:span 7;height:fit-content}.ath-col-md--8{grid-column:span 8;height:fit-content}.ath-col-md--9{grid-column:span 9;height:fit-content}.ath-col-md--10{grid-column:span 10;height:fit-content}.ath-col-md--11{grid-column:span 11;height:fit-content}.ath-col-md--12{grid-column:span 12;height:fit-content}.ath-offset-md--1{margin-left:8.3333333333%}.ath-offset-md--2{margin-left:16.6666666667%}.ath-offset-md--3{margin-left:25%}.ath-offset-md--4{margin-left:33.3333333333%}.ath-offset-md--5{margin-left:41.6666666667%}.ath-offset-md--6{margin-left:50%}.ath-offset-md--7{margin-left:58.3333333333%}.ath-offset-md--8{margin-left:66.6666666667%}.ath-offset-md--9{margin-left:75%}.ath-offset-md--10{margin-left:83.3333333333%}.ath-offset-md--11{margin-left:91.6666666667%}}@media (min-width: 1200px){.ath-container--lg{min-width:992px;max-width:1200px}.ath-container--md{min-width:768px;max-width:992px}.ath-container--sm{min-width:576px;max-width:768px}.ath-container--xs{min-width:320px;max-width:576px}.ath-main-lg{display:flex;justify-content:center;height:100%}.ath-col-lg--1{grid-column:span 1;height:fit-content}.ath-col-lg--2{grid-column:span 2;height:fit-content}.ath-col-lg--3{grid-column:span 3;height:fit-content}.ath-col-lg--4{grid-column:span 4;height:fit-content}.ath-col-lg--5{grid-column:span 5;height:fit-content}.ath-col-lg--6{grid-column:span 6;height:fit-content}.ath-col-lg--7{grid-column:span 7;height:fit-content}.ath-col-lg--8{grid-column:span 8;height:fit-content}.ath-col-lg--9{grid-column:span 9;height:fit-content}.ath-col-lg--10{grid-column:span 10;height:fit-content}.ath-col-lg--11{grid-column:span 11;height:fit-content}.ath-col-lg--12{grid-column:span 12;height:fit-content}.ath-offset-lg--1{margin-left:8.3333333333%}.ath-offset-lg--2{margin-left:16.6666666667%}.ath-offset-lg--3{margin-left:25%}.ath-offset-lg--4{margin-left:33.3333333333%}.ath-offset-lg--5{margin-left:41.6666666667%}.ath-offset-lg--6{margin-left:50%}.ath-offset-lg--7{margin-left:58.3333333333%}.ath-offset-lg--8{margin-left:66.6666666667%}.ath-offset-lg--9{margin-left:75%}.ath-offset-lg--10{margin-left:83.3333333333%}.ath-offset-lg--11{margin-left:91.6666666667%}}@media (min-width: 1400px){.ath-container--xl{min-width:1200px;max-width:1920px}.ath-container--lg{min-width:992px;max-width:1200px}.ath-container--md{min-width:768px;max-width:992px}.ath-container--sm{min-width:576px;max-width:768px}.ath-container--xs{min-width:320px;max-width:576px}.ath-main-xl{display:flex;justify-content:center;height:100%}.ath-col-xl--1{grid-column:span 1;height:fit-content}.ath-col-xl--2{grid-column:span 2;height:fit-content}.ath-col-xl--3{grid-column:span 3;height:fit-content}.ath-col-xl--4{grid-column:span 4;height:fit-content}.ath-col-xl--5{grid-column:span 5;height:fit-content}.ath-col-xl--6{grid-column:span 6;height:fit-content}.ath-col-xl--7{grid-column:span 7;height:fit-content}.ath-col-xl--8{grid-column:span 8;height:fit-content}.ath-col-xl--9{grid-column:span 9;height:fit-content}.ath-col-xl--10{grid-column:span 10;height:fit-content}.ath-col-xl--11{grid-column:span 11;height:fit-content}.ath-col-xl--12{grid-column:span 12;height:fit-content}.ath-offset-xl--1{margin-left:8.3333333333%}.ath-offset-xl--2{margin-left:16.6666666667%}.ath-offset-xl--3{margin-left:25%}.ath-offset-xl--4{margin-left:33.3333333333%}.ath-offset-xl--5{margin-left:41.6666666667%}.ath-offset-xl--6{margin-left:50%}.ath-offset-xl--7{margin-left:58.3333333333%}.ath-offset-xl--8{margin-left:66.6666666667%}.ath-offset-xl--9{margin-left:75%}.ath-offset-xl--10{margin-left:83.3333333333%}.ath-offset-xl--11{margin-left:91.6666666667%}}.ath-container-margin--xs{margin:0 var(--ath-spacing-container-margin-xs)}.ath-rowgap--xs{display:grid;row-gap:var(--ath-spacing-container-margin-xs)}.ath-container-margin--sm{margin:0 var(--ath-spacing-container-margin-sm)}.ath-rowgap--sm{display:grid;row-gap:var(--ath-spacing-container-margin-sm)}.ath-container-margin--md{margin:0 var(--ath-spacing-container-margin-md)}.ath-rowgap--md{display:grid;row-gap:var(--ath-spacing-container-margin-md)}.ath-container-margin--lg{margin:0 var(--ath-spacing-container-margin-lg)}.ath-rowgap--lg{display:grid;row-gap:var(--ath-spacing-container-margin-lg)}.ath-container-margin--xl{margin:0 var(--ath-spacing-container-margin-xl)}.ath-rowgap--xl{display:grid;row-gap:var(--ath-spacing-container-margin-xl)}.ath-scroll{overflow:auto}.ath-overflow-hidden{overflow:hidden}.ath-overflow-x-hidden{overflow-x:hidden}.ath-overflow-y-hidden{overflow-y:hidden}@supports (-moz-appearance: none){.ath-scroll{scrollbar-width:thin;scrollbar-color:var(--ath-color-bg-alpha-bolder-default) var(--ath-color-scroll-track-bg)}.ath-scroll:hover{scrollbar-color:var(--ath-color-bg-alpha-bolder-hovered) var(--ath-color-scroll-track-bg)}}.ath-scroll::-webkit-scrollbar{width:var(--ath-sizing-scroll);height:var(--ath-sizing-scroll)}.ath-scroll::-webkit-scrollbar-track{background-color:var(--ath-color-scroll-track-bg)}.ath-scroll::-webkit-scrollbar-thumb{background-color:var(--ath-color-bg-alpha-bolder-default);border-radius:var(--ath-border-radius-scroll)}.ath-scroll::-webkit-scrollbar-thumb:hover{background-color:var(--ath-color-bg-alpha-bolder-hovered)}.ath-scroll::-webkit-scrollbar-button{display:none}.ath-spacing-vertical--none{row-gap:var(--ath-spacing-vertical-none)}.ath-spacing-mb--none{margin-bottom:var(--ath-spacing-vertical-none)}.ath-spacing-vertical--xs{row-gap:var(--ath-spacing-vertical-xs)}.ath-spacing-mb--xs{margin-bottom:var(--ath-spacing-vertical-xs)}.ath-spacing-vertical--sm{row-gap:var(--ath-spacing-vertical-sm)}.ath-spacing-mb--sm{margin-bottom:var(--ath-spacing-vertical-sm)}.ath-spacing-vertical--md{row-gap:var(--ath-spacing-vertical-md)}.ath-spacing-mb--md{margin-bottom:var(--ath-spacing-vertical-md)}.ath-spacing-vertical--lg{row-gap:var(--ath-spacing-vertical-lg)}.ath-spacing-mb--lg{margin-bottom:var(--ath-spacing-vertical-lg)}.ath-spacing-vertical--xl{row-gap:var(--ath-spacing-vertical-xl)}.ath-spacing-mb--xl{margin-bottom:var(--ath-spacing-vertical-xl)}.ath-pd--000{padding:var(--ath-spacing-around-000)}.ath-pd--025{padding:var(--ath-spacing-around-025)}.ath-pd--050{padding:var(--ath-spacing-around-050)}.ath-pd--075{padding:var(--ath-spacing-around-075)}.ath-pd--100{padding:var(--ath-spacing-around-100)}.ath-pd--150{padding:var(--ath-spacing-around-150)}.ath-pd--200{padding:var(--ath-spacing-around-200)}.ath-pd--250{padding:var(--ath-spacing-around-250)}.ath-pd--300{padding:var(--ath-spacing-around-300)}.ath-pd--400{padding:var(--ath-spacing-around-400)}.ath-pd--500{padding:var(--ath-spacing-around-500)}.ath-pd--600{padding:var(--ath-spacing-around-600)}.ath-pd--800{padding:var(--ath-spacing-around-800)}.ath-pd--1000{padding:var(--ath-spacing-around-1000)}.ath-pdt--000{padding-top:var(--ath-spacing-around-000)}.ath-pdt--025{padding-top:var(--ath-spacing-around-025)}.ath-pdt--050{padding-top:var(--ath-spacing-around-050)}.ath-pdt--075{padding-top:var(--ath-spacing-around-075)}.ath-pdt--100{padding-top:var(--ath-spacing-around-100)}.ath-pdt--150{padding-top:var(--ath-spacing-around-150)}.ath-pdt--200{padding-top:var(--ath-spacing-around-200)}.ath-pdt--250{padding-top:var(--ath-spacing-around-250)}.ath-pdt--300{padding-top:var(--ath-spacing-around-300)}.ath-pdt--400{padding-top:var(--ath-spacing-around-400)}.ath-pdt--500{padding-top:var(--ath-spacing-around-500)}.ath-pdt--600{padding-top:var(--ath-spacing-around-600)}.ath-pdt--800{padding-top:var(--ath-spacing-around-800)}.ath-pdt--1000{padding-top:var(--ath-spacing-around-1000)}.ath-pdb--000{padding-bottom:var(--ath-spacing-around-000)}.ath-pdb--025{padding-bottom:var(--ath-spacing-around-025)}.ath-pdb--050{padding-bottom:var(--ath-spacing-around-050)}.ath-pdb--075{padding-bottom:var(--ath-spacing-around-075)}.ath-pdb--100{padding-bottom:var(--ath-spacing-around-100)}.ath-pdb--150{padding-bottom:var(--ath-spacing-around-150)}.ath-pdb--200{padding-bottom:var(--ath-spacing-around-200)}.ath-pdb--250{padding-bottom:var(--ath-spacing-around-250)}.ath-pdb--300{padding-bottom:var(--ath-spacing-around-300)}.ath-pdb--400{padding-bottom:var(--ath-spacing-around-400)}.ath-pdb--500{padding-bottom:var(--ath-spacing-around-500)}.ath-pdb--600{padding-bottom:var(--ath-spacing-around-600)}.ath-pdb--800{padding-bottom:var(--ath-spacing-around-800)}.ath-pdb--1000{padding-bottom:var(--ath-spacing-around-1000)}.ath-pdl--000{padding-left:var(--ath-spacing-around-000)}.ath-pdl--025{padding-left:var(--ath-spacing-around-025)}.ath-pdl--050{padding-left:var(--ath-spacing-around-050)}.ath-pdl--075{padding-left:var(--ath-spacing-around-075)}.ath-pdl--100{padding-left:var(--ath-spacing-around-100)}.ath-pdl--150{padding-left:var(--ath-spacing-around-150)}.ath-pdl--200{padding-left:var(--ath-spacing-around-200)}.ath-pdl--250{padding-left:var(--ath-spacing-around-250)}.ath-pdl--300{padding-left:var(--ath-spacing-around-300)}.ath-pdl--400{padding-left:var(--ath-spacing-around-400)}.ath-pdl--500{padding-left:var(--ath-spacing-around-500)}.ath-pdl--600{padding-left:var(--ath-spacing-around-600)}.ath-pdl--800{padding-left:var(--ath-spacing-around-800)}.ath-pdl--1000{padding-left:var(--ath-spacing-around-1000)}.ath-pdr--000{padding-right:var(--ath-spacing-around-000)}.ath-pdr--025{padding-right:var(--ath-spacing-around-025)}.ath-pdr--050{padding-right:var(--ath-spacing-around-050)}.ath-pdr--075{padding-right:var(--ath-spacing-around-075)}.ath-pdr--100{padding-right:var(--ath-spacing-around-100)}.ath-pdr--150{padding-right:var(--ath-spacing-around-150)}.ath-pdr--200{padding-right:var(--ath-spacing-around-200)}.ath-pdr--250{padding-right:var(--ath-spacing-around-250)}.ath-pdr--300{padding-right:var(--ath-spacing-around-300)}.ath-pdr--400{padding-right:var(--ath-spacing-around-400)}.ath-pdr--500{padding-right:var(--ath-spacing-around-500)}.ath-pdr--600{padding-right:var(--ath-spacing-around-600)}.ath-pdr--800{padding-right:var(--ath-spacing-around-800)}.ath-pdr--1000{padding-right:var(--ath-spacing-around-1000)}.ath-mg--000{margin:var(--ath-spacing-around-000)}.ath-mg--025{margin:var(--ath-spacing-around-025)}.ath-mg--050{margin:var(--ath-spacing-around-050)}.ath-mg--075{margin:var(--ath-spacing-around-075)}.ath-mg--100{margin:var(--ath-spacing-around-100)}.ath-mg--150{margin:var(--ath-spacing-around-150)}.ath-mg--200{margin:var(--ath-spacing-around-200)}.ath-mg--250{margin:var(--ath-spacing-around-250)}.ath-mg--300{margin:var(--ath-spacing-around-300)}.ath-mg--400{margin:var(--ath-spacing-around-400)}.ath-mg--500{margin:var(--ath-spacing-around-500)}.ath-mg--600{margin:var(--ath-spacing-around-600)}.ath-mg--800{margin:var(--ath-spacing-around-800)}.ath-mg--1000{margin:var(--ath-spacing-around-1000)}.ath-mgt--000{margin-top:var(--ath-spacing-around-000)}.ath-mgt--025{margin-top:var(--ath-spacing-around-025)}.ath-mgt--050{margin-top:var(--ath-spacing-around-050)}.ath-mgt--075{margin-top:var(--ath-spacing-around-075)}.ath-mgt--100{margin-top:var(--ath-spacing-around-100)}.ath-mgt--150{margin-top:var(--ath-spacing-around-150)}.ath-mgt--200{margin-top:var(--ath-spacing-around-200)}.ath-mgt--250{margin-top:var(--ath-spacing-around-250)}.ath-mgt--300{margin-top:var(--ath-spacing-around-300)}.ath-mgt--400{margin-top:var(--ath-spacing-around-400)}.ath-mgt--500{margin-top:var(--ath-spacing-around-500)}.ath-mgt--600{margin-top:var(--ath-spacing-around-600)}.ath-mgt--800{margin-top:var(--ath-spacing-around-800)}.ath-mgt--1000{margin-top:var(--ath-spacing-around-1000)}.ath-mgb--000{margin-bottom:var(--ath-spacing-around-000)}.ath-mgb--025{margin-bottom:var(--ath-spacing-around-025)}.ath-mgb--050{margin-bottom:var(--ath-spacing-around-050)}.ath-mgb--075{margin-bottom:var(--ath-spacing-around-075)}.ath-mgb--100{margin-bottom:var(--ath-spacing-around-100)}.ath-mgb--150{margin-bottom:var(--ath-spacing-around-150)}.ath-mgb--200{margin-bottom:var(--ath-spacing-around-200)}.ath-mgb--250{margin-bottom:var(--ath-spacing-around-250)}.ath-mgb--300{margin-bottom:var(--ath-spacing-around-300)}.ath-mgb--400{margin-bottom:var(--ath-spacing-around-400)}.ath-mgb--500{margin-bottom:var(--ath-spacing-around-500)}.ath-mgb--600{margin-bottom:var(--ath-spacing-around-600)}.ath-mgb--800{margin-bottom:var(--ath-spacing-around-800)}.ath-mgb--1000{margin-bottom:var(--ath-spacing-around-1000)}.ath-mgl--000{margin-left:var(--ath-spacing-around-000)}.ath-mgl--025{margin-left:var(--ath-spacing-around-025)}.ath-mgl--050{margin-left:var(--ath-spacing-around-050)}.ath-mgl--075{margin-left:var(--ath-spacing-around-075)}.ath-mgl--100{margin-left:var(--ath-spacing-around-100)}.ath-mgl--150{margin-left:var(--ath-spacing-around-150)}.ath-mgl--200{margin-left:var(--ath-spacing-around-200)}.ath-mgl--250{margin-left:var(--ath-spacing-around-250)}.ath-mgl--300{margin-left:var(--ath-spacing-around-300)}.ath-mgl--400{margin-left:var(--ath-spacing-around-400)}.ath-mgl--500{margin-left:var(--ath-spacing-around-500)}.ath-mgl--600{margin-left:var(--ath-spacing-around-600)}.ath-mgl--800{margin-left:var(--ath-spacing-around-800)}.ath-mgl--1000{margin-left:var(--ath-spacing-around-1000)}.ath-mgr--000{margin-right:var(--ath-spacing-around-000)}.ath-mgr--025{margin-right:var(--ath-spacing-around-025)}.ath-mgr--050{margin-right:var(--ath-spacing-around-050)}.ath-mgr--075{margin-right:var(--ath-spacing-around-075)}.ath-mgr--100{margin-right:var(--ath-spacing-around-100)}.ath-mgr--150{margin-right:var(--ath-spacing-around-150)}.ath-mgr--200{margin-right:var(--ath-spacing-around-200)}.ath-mgr--250{margin-right:var(--ath-spacing-around-250)}.ath-mgr--300{margin-right:var(--ath-spacing-around-300)}.ath-mgr--400{margin-right:var(--ath-spacing-around-400)}.ath-mgr--500{margin-right:var(--ath-spacing-around-500)}.ath-mgr--600{margin-right:var(--ath-spacing-around-600)}.ath-mgr--800{margin-right:var(--ath-spacing-around-800)}.ath-mgr--1000{margin-right:var(--ath-spacing-around-1000)}.ath-h1{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-1);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-1)}.ath-h2{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-2);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-2)}.ath-h3{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-3);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-3)}.ath-h4{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-4);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-4)}.ath-h5{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-5);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-5)}.ath-h6{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-heading-6);font-style:normal;font-weight:var(--ath-font-weight-heading);line-height:var(--ath-font-line-height-heading-6)}.ath-display-md{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-display-md);font-style:normal;font-weight:var(--ath-font-weight-display);line-height:var(--ath-font-line-height-display)}.ath-display-sm{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-display-sm);font-style:normal;font-weight:var(--ath-font-weight-display);line-height:var(--ath-font-line-height-display)}.ath-body--xs{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-xs);font-style:normal;font-weight:var(--ath-font-weight-body);line-height:var(--ath-font-line-height-body)}.ath-body--sm{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-sm);font-style:normal;font-weight:var(--ath-font-weight-body);line-height:var(--ath-font-line-height-body)}.ath-body--md{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-md);font-style:normal;font-weight:var(--ath-font-weight-body);line-height:var(--ath-font-line-height-body)}.ath-body--lg{font-family:var(--ath-font-family-primary);font-size:var(--ath-font-size-body-lg);font-style:normal;font-weight:var(--ath-font-weight-body);line-height:var(--ath-font-line-height-body)}.ath-body--light{font-weight:var(--ath-font-weight-light)}.ath-body--regular{font-weight:var(--ath-font-weight-regular)}.ath-body--medium{font-weight:var(--ath-font-weight-medium)}.ath-body--bold{font-weight:var(--ath-font-weight-bold)}.ath-numeric--xs{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-xs);font-style:normal;font-weight:var(--ath-font-weight-numeric-medium);line-height:var(--ath-font-line-height-numeric-xs)}.ath-numeric--sm{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-sm);font-style:normal;font-weight:var(--ath-font-weight-numeric-medium);line-height:var(--ath-font-line-height-numeric-sm)}.ath-numeric--md{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-md);font-style:normal;font-weight:var(--ath-font-weight-numeric-medium);line-height:var(--ath-font-line-height-numeric-md)}.ath-numeric--lg{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-lg);font-style:normal;font-weight:var(--ath-font-weight-numeric-medium);line-height:var(--ath-font-line-height-numeric-lg)}.ath-numeric--xl{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-xl);font-style:normal;font-weight:var(--ath-font-weight-numeric-medium);line-height:var(--ath-font-line-height-numeric-xl)}.ath-numeric--display{font-family:var(--ath-font-family-numeric);font-size:var(--ath-font-size-numeric-display);font-style:normal;font-weight:var(--ath-font-weight-numeric-regular);line-height:var(--ath-font-line-height-numeric-display)}.ath-text--align-left{text-align:left}.ath-text--align-right{text-align:right}.ath-text--align-center{text-align:center}.ath-text--align-justify{text-align:justify}.ath-text--underline{text-decoration:var(--ath-font-text-decoration-underline)}.ath-text--line-through{text-decoration:var(--ath-font-text-decoration-line-through)}";

/*
 Stencil Client Platform v4.37.1 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((memberFlags & 31 /* Prop */ || memberFlags & 32 /* State */)) {
      const ogValue = instance[memberName];
      const ogDescriptor = getPropertyDescriptor(Object.getPrototypeOf(instance), memberName) || Object.getOwnPropertyDescriptor(instance, memberName);
      if (ogDescriptor) {
        Object.defineProperty(instance, memberName, {
          get() {
            return ogDescriptor.get.call(this);
          },
          set(newValue) {
            ogDescriptor.set.call(this, newValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      instance[memberName] = hostRef.$instanceValues$.has(memberName) ? hostRef.$instanceValues$.get(memberName) : ogValue;
    }
  });
};
function getPropertyDescriptor(obj, memberName) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, memberName);
    if (desc == null ? void 0 : desc.get) return desc;
    obj = Object.getPrototypeOf(obj);
  }
  return void 0;
}

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  if (!hostRef) return;
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
  {
    reWireGetterSetter(lazyInstance, hostRef);
  }
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'ath-accordion':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-accordion.entry.js').then(processMod, consoleError);
                case 'ath-accordion-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-accordion-item.entry.js').then(processMod, consoleError);
                case 'ath-action-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-action-bar.entry.js').then(processMod, consoleError);
                case 'ath-alert':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-alert.entry.js').then(processMod, consoleError);
                case 'ath-breadcrumb':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-breadcrumb.entry.js').then(processMod, consoleError);
                case 'ath-button-expandable':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-button-expandable.entry.js').then(processMod, consoleError);
                case 'ath-calendar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-calendar.entry.js').then(processMod, consoleError);
                case 'ath-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-card.entry.js').then(processMod, consoleError);
                case 'ath-card-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-card-header.entry.js').then(processMod, consoleError);
                case 'ath-card-selectable':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-card-selectable.entry.js').then(processMod, consoleError);
                case 'ath-card-selectable-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-card-selectable-group.entry.js').then(processMod, consoleError);
                case 'ath-card-thumbnail':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-card-thumbnail.entry.js').then(processMod, consoleError);
                case 'ath-checkbox-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-checkbox-group.entry.js').then(processMod, consoleError);
                case 'ath-chip-choice':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-chip-choice.entry.js').then(processMod, consoleError);
                case 'ath-chip-choice-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-chip-choice-group.entry.js').then(processMod, consoleError);
                case 'ath-chip-dismiss':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-chip-dismiss.entry.js').then(processMod, consoleError);
                case 'ath-chip-dismiss-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-chip-dismiss-group.entry.js').then(processMod, consoleError);
                case 'ath-datepicker':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-datepicker.entry.js').then(processMod, consoleError);
                case 'ath-datepicker-range':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-datepicker-range.entry.js').then(processMod, consoleError);
                case 'ath-empty-state':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-empty-state.entry.js').then(processMod, consoleError);
                case 'ath-input-password':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-input-password.entry.js').then(processMod, consoleError);
                case 'ath-input-text':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-input-text.entry.js').then(processMod, consoleError);
                case 'ath-input-textarea':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-input-textarea.entry.js').then(processMod, consoleError);
                case 'ath-link':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-link.entry.js').then(processMod, consoleError);
                case 'ath-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-list.entry.js').then(processMod, consoleError);
                case 'ath-list-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-list-item.entry.js').then(processMod, consoleError);
                case 'ath-menu-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-button.entry.js').then(processMod, consoleError);
                case 'ath-menu-button-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-button-item.entry.js').then(processMod, consoleError);
                case 'ath-menu-horizontal':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-horizontal.entry.js').then(processMod, consoleError);
                case 'ath-menu-horizontal-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-horizontal-item.entry.js').then(processMod, consoleError);
                case 'ath-menu-lateral':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-lateral.entry.js').then(processMod, consoleError);
                case 'ath-menu-lateral-item-action':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-lateral-item-action.entry.js').then(processMod, consoleError);
                case 'ath-menu-lateral-item-link':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-lateral-item-link.entry.js').then(processMod, consoleError);
                case 'ath-menu-vertical':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-vertical.entry.js').then(processMod, consoleError);
                case 'ath-menu-vertical-item-action':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-vertical-item-action.entry.js').then(processMod, consoleError);
                case 'ath-menu-vertical-item-link':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-menu-vertical-item-link.entry.js').then(processMod, consoleError);
                case 'ath-modal':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-modal.entry.js').then(processMod, consoleError);
                case 'ath-pagination':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-pagination.entry.js').then(processMod, consoleError);
                case 'ath-panel':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-panel.entry.js').then(processMod, consoleError);
                case 'ath-pictogram':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-pictogram.entry.js').then(processMod, consoleError);
                case 'ath-radio-button-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-radio-button-group.entry.js').then(processMod, consoleError);
                case 'ath-segmented-control':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-segmented-control.entry.js').then(processMod, consoleError);
                case 'ath-segmented-control-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-segmented-control-item.entry.js').then(processMod, consoleError);
                case 'ath-slider':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-slider.entry.js').then(processMod, consoleError);
                case 'ath-step':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-step.entry.js').then(processMod, consoleError);
                case 'ath-stepper':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-stepper.entry.js').then(processMod, consoleError);
                case 'ath-switch':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-switch.entry.js').then(processMod, consoleError);
                case 'ath-tab':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-tab.entry.js').then(processMod, consoleError);
                case 'ath-table':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-table.entry.js').then(processMod, consoleError);
                case 'ath-table-body':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-table-body.entry.js').then(processMod, consoleError);
                case 'ath-table-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-table-header.entry.js').then(processMod, consoleError);
                case 'ath-table-row':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-table-row.entry.js').then(processMod, consoleError);
                case 'ath-tabs':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-tabs.entry.js').then(processMod, consoleError);
                case 'ath-text':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-text.entry.js').then(processMod, consoleError);
                case 'ath-user-detail':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-user-detail.entry.js').then(processMod, consoleError);
                case 'ath-user-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-user-menu.entry.js').then(processMod, consoleError);
                case 'ath-collapse':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-collapse.entry.js').then(processMod, consoleError);
                case 'ath-dropdown_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-dropdown_2.entry.js').then(processMod, consoleError);
                case 'ath-input-counter':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-input-counter.entry.js').then(processMod, consoleError);
                case 'ath-progress-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-progress-bar.entry.js').then(processMod, consoleError);
                case 'ath-radio-button_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-radio-button_2.entry.js').then(processMod, consoleError);
                case 'ath-section-title':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-section-title.entry.js').then(processMod, consoleError);
                case 'ath-table-header-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-table-header-item.entry.js').then(processMod, consoleError);
                case 'ath-avatar_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-avatar_2.entry.js').then(processMod, consoleError);
                case 'ath-badge':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-badge.entry.js').then(processMod, consoleError);
                case 'ath-checkbox':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-checkbox.entry.js').then(processMod, consoleError);
                case 'ath-collapse-icon':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-collapse-icon.entry.js').then(processMod, consoleError);
                case 'ath-divider':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-divider.entry.js').then(processMod, consoleError);
                case 'ath-tag':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-tag.entry.js').then(processMod, consoleError);
                case 'ath-tooltip_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-tooltip_2.entry.js').then(processMod, consoleError);
                case 'ath-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-button.entry.js').then(processMod, consoleError);
                case 'ath-icon':
                    return import(
                      /* webpackMode: "lazy" */
                      './ath-icon.entry.js').then(processMod, consoleError);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};

// src/utils/helpers.ts
var isDef = (v) => v != null && v !== void 0;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  if (!supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({ mode: "open" });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 /* ElementNode */ && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 /* ElementNode */ && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0)) {
      slottedNodes.push(childNode);
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      if (isFormAssociated && typeof propValue === "string") {
        return propValue === "" || !!propValue;
      } else {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ ;
};

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(
            referenceNode(oldStartVnode.$elm$).parentNode,
            node,
            referenceNode(oldStartVnode.$elm$)
          );
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (true)) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
    addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
  }
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) && !(cmpMeta.$flags$ & 128 /* shadowNeedsScopedCss */);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */ && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render && instance.render();
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0],
    !!(cmpMeta.$flags$ & 64 /* formAssociated */)
  );
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          var _a2;
          const hostRef = getHostRef(this);
          const instance = hostRef == null ? void 0 : hostRef.$lazyInstance$ ;
          if (!instance) {
            (_a2 = hostRef == null ? void 0 : hostRef.$onReadyPromise$) == null ? void 0 : _a2.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = instance[cbName] ;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                )
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags,
                  !!(cmpMeta.$flags$ & 64 /* formAssociated */)
                );
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 31 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      if (cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 8 /* TargetWindow */) {
    return win;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

export { Host as H, getElement as a, bootstrapLazy as b, createEvent as c, getAssetPath as d, globalScripts as g, h, promiseResolve as p, registerInstance as r, setNonce as s };
//# sourceMappingURL=index-D2-yfY-d.js.map

//# sourceMappingURL=index-D2-yfY-d.js.map