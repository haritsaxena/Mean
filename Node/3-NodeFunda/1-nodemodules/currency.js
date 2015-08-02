(function() {
	// body...
	'use strict';
	var ustoCandRate = 0.91;
	
	function roundToDecimal(amount) {
		return Math.round(amount * 100)/100;
	}

	exports.canadianToUs = function(usDollars){
		return roundToDecimal(usDollars * ustoCandRate);
	};

	exports.usToCanadian = function(canadianDollars){
		return roundToDecimal(canadianDollars / ustoCandRate);
	};
}());