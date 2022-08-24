function getfilterCategory(arr, sort, param, searchedWord) {
  if (sort) {
    return arr
      .filter((elem) => elem.category === param)
      .sort((a, b) => a.price - b.price)
      .filter((elem) => elem.name.toLowerCase().includes(searchedWord))
      .sort((a, b) => a.price - b.price);
  } else {
    return arr
      .filter((elem) => elem.category === param)
      .sort((a, b) => a.price + b.price)
      .filter((elem) => elem.name.toLowerCase().includes(searchedWord));
  }
}

function getExchangeRate(arr, param){
  return   arr.filter(elem => elem.code === param ).map(elem => elem.mid.toFixed(2))
  }

export { getfilterCategory, getExchangeRate };
