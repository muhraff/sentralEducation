// JavaScript Document
mainApp.filter('sumOfValue', function() {
    return function(data, key) {
      debugger;
      if (angular.isUndefined(data) || angular.isUndefined(key))
        return 0;
      var sum = 0;

      angular.forEach(data, function(v, k) {
        sum = sum + parseInt(v[key]);
      });
      return sum;
    }
  }).filter('totalSumPriceQty', function() {
    return function(data, key1, key2) {
      if (angular.isUndefined(data) || angular.isUndefined(key1) || angular.isUndefined(key2))
        return 0;

      var sum = 0;
      angular.forEach(data, function(v, k) {
        sum = sum + (parseInt(v[key1]) * parseInt(v[key2]));
      });
      return sum;
    }
  });