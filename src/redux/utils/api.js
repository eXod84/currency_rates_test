const API_KEY = 'Z1PwJvLM43vpePHemU3VRc8yO3wCpq9T';
const API_URL = 'https://forex.1forge.com/1.0.2';

export function loadCurrencies() {
  const url = `${API_URL}/symbols?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

export function loadRates(selectedCurrencies) {
  const url = `${API_URL}/quotes?pairs=${selectedCurrencies.join(',')}&api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}