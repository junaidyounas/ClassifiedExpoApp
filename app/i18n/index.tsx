import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
const en = require('./lang/en.json');
const ar = require("./lang/ar.json");

// Set the key-value pairs for the different languages you want to support.
const translations = {
     en: en,
     ar: ar,
};
const i18n = new I18n(translations);
i18n.enableFallback = true;

export const ln = (title: string) => {
         return  i18n.t(title)
}
