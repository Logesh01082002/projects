function priceFormat(priceString) {
  return priceString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default priceFormat;
