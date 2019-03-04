const RateResultView = function () {};

RateResultView.prototype.createRateResult = function (rate) {
  const rateResult = document.createElement('div');
  rateResult.classList.add('rate-detail');

};


module.exports = RateResultView;
