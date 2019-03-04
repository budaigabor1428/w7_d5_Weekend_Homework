const ExchangeRates = require('./models/exchange_rates.js');
const RateListView = require('./views/rate_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#rates-list');
  const rateListView = new RateListView(listContainer);
  rateListView.bindEvents();

  const exchangeRates = new ExchangeRates;
  exchangeRates.getData();
});
