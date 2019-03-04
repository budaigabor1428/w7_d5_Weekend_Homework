const PubSub = require('../helpers/pub_sub.js');
const RateResultView = require('./rate_result_view.js')

const RateListView = function (container) {
  this.container = container;
};

RateListView.prototype.bindEvents = function () {
  PubSub.subscribe('ExchangeRates:rates-ready', (evt) => {
    this.renderRateResultViews(evt.detail);
  });
};

RateListView.prototype.renderRateResultViews = function (exchangeRates) {
  exchangeRates.forEach((rate) => {
    const rateItem = this.createRateListItem(rate);
    this.container.appendChild(rateItem);
  });
};

RateListView.prototype.createRateListItem = function (rate) {
  const rateResultView = new RateResultView();
  const rateResult = rateResultView.createRateResult(rate);
  return rateResult;
};

module.exports = RateListView;
