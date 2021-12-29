export const itemsCounter = arr => {
  let result = [];

  const counter = arr.reduce((total, item) => {
    return (total += item.quantity);
  }, 0);

  result.push(counter);

  const price = arr.reduce((total, item) => {
    return (total += item.price * item.quantity);
  }, 0);

  result.push(price);

  return result;
};

// No necessary as we need it globaly so the functinality was added to redux basket slice
//const [totalItems, totalPrice] = itemsCounter(items);
