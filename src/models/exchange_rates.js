const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const ExchangeRates = function () {
  this.rateData = []
};

ExchangeRates.prototype.getData = function(){
  const request = new RequestHelper('https://api.exchangeratesapi.io/latest');
  request.get().then((data) => {
    this.rateData = data;
    PubSub.publish('ExchangeRates:rates-ready', this.rateData);
  });
}

module.exports = ExchangeRates;
