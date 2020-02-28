import {CURRENCIES} from './values';

export const getPrice = variant => {
  if(variant.pricing.onSale) {
    return [ CURRENCIES[variant.pricing.price.net.currency], variant.pricing.price.net.amount ];
  }
  return [
    CURRENCIES[variant.pricing.priceUndiscounted.net.currency],
    variant.pricing.priceUndiscounted.net.amount,
  ];
};

export const getPriceRange = product => {
  return `
  ${CURRENCIES[product.pricing.priceRange.start.net.currency]}
  ${product.pricing.priceRange.start.net.amount} 
  - 
  ${CURRENCIES[product.pricing.priceRange.stop.net.currency]}
  ${product.pricing.priceRange.stop.net.amount}
  `;
};

export const isInCart = (cart, id) => {
  return cart.find(({ payload: { variantId } }) => variantId === id) !== undefined;
};

export const getNetTotal = (variant, quantity) => {
  const [currency, price] = getPrice(variant);
  return `${ currency }${ (price * quantity ).toFixed(2) }`;
};

