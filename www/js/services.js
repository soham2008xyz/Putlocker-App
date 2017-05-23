var services = angular.module('streamy.services', []);

services.service('Putlocker', PutlockerService);

function PutlockerService($http, $q) {
  var API_BASE = 'http://localhost:5000';

  return {
    get_shows: function () {
      var deferred = $q.defer();

      $http.get(API_BASE + '/show/').then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    },

    get_show: function (show) {
      var deferred = $q.defer();

      $http.get(API_BASE + '/show/' + show).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }
}
PutlockerService.$inject = ['$http', '$q'];
