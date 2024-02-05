function getShippingCost(country) {

    let countryTotal = 0;

    switch (country) {
        case 'China':
            countryTotal = 100;
            break;
        case 'Chile':
            countryTotal = 250;
            break;
        case 'Australia':
            countryTotal = 170;
            break;
        case 'Jamaica':
            countryTotal = 120;
            break;
    };

    if (countryTotal === 0) {
        return 'Sorry, there is no delivery to your country';
    };

    return `Shipping to ${country} will cost ${countryTotal} credits`;
};

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"