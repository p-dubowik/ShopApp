const formatPrice = (price) => {
    return new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: 'PLN',
    }).format(price / 100);
};

export default formatPrice;