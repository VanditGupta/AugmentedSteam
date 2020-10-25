import {CTradeOffer} from "./CTradeOffer";

import {Localization, SyncedStorage} from "../../../core_modules";

(async function() {

    try {
        await SyncedStorage;
        await Localization;
    } catch (err) {
        console.group("Augmented Steam initialization");
        console.error("Failed to initiliaze Augmented Steam");
        console.error(err);
        console.groupEnd();

        return;
    }

    new CTradeOffer().applyFeatures();
})();
