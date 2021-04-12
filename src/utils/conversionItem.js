export function converse(orders) {
  const items = {
    Gold: {
      count: 0,
      revenue: 0,
    },
    Mutualfund: {
      count: 0,
      revenue: 0,
    },
    Bonds: {
      count: 0,
      revenue: 0,
    },
    "Unit Link": {
      count: 0,
      revenue: 0,
    },
  };
  orders.forEach((el) => {
    if (el.conversion_item === "Gold") {
      items[el.conversion_item].count++;
      items[el.conversion_item].revenue += Number(el.conversion_revenue);
    } else if (el.conversion_item === "Mutualfund") {
      items[el.conversion_item].count++;
      items[el.conversion_item].revenue += Number(el.conversion_revenue);
    } else if (el.conversion_item === "Bonds") {
      items[el.conversion_item].count++;
      items[el.conversion_item].revenue += Number(el.conversion_revenue);
    } else if (el.conversion_item === "Unit Link") {
      items[el.conversion_item].count++;
      items[el.conversion_item].revenue += Number(el.conversion_revenue);
    }
  });
  return items;
}

export function sumConversion(input) {
  let total = 0;
  input.forEach((el) => {
    total += el;
  });
  return total;
}
