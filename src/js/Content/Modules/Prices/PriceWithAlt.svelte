<svelte:options immutable />

<script lang="ts">
    import {Price} from "../Price";
    import type {TPrice} from "./_types";
    import {CurrencyManager} from "../CurrencyManager";

    export let price: TPrice;

    function getAltPrice(price: TPrice): Price|null {
        const customCurrency = CurrencyManager.customCurrency;
        if (price.currency !== customCurrency) {
            try {
                return (new Price(price.amount, price.currency)).inCurrency(customCurrency);
            } catch (err) {
                console.warn(`Could not convert currency ${price.currency} to ${customCurrency}`);
            }
        }
        return null;
    }

    let strPrice = (new Price(price.amount, price.currency)).toString();
    let strPriceAlt = getAltPrice(price)?.toString();
</script>


{strPrice}
{#if strPriceAlt}
    ({strPriceAlt})
{/if}
