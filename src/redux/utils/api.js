export function loadCurrencies() {
  const url = `${process.env.REACT_APP_API_URL}/symbols?api_key=${process.env.REACT_APP_API_KEY}`;
  return fetch(url).then(res => res.json());
}

export function loadRates(selectedCurrencies) {
  const url = `${process.env.REACT_APP_API_URL}/quotes?pairs=${selectedCurrencies.join(',')}&api_key=${process.env.REACT_APP_API_KEY}`;
  return fetch(url).then(res => res.json());
}