var controllers = angular.module('streamy.controllers', []);

controllers.controller('HomeCtrl', HomeController);

function HomeController($scope, Putlocker) {
  Putlocker.get_shows().then(function (data) {
    // console.log(data);
    // $scope.shows = data;
    $scope.groups = [];
    for(group in data) {
      var temp = {};
      temp['title'] = group;
      temp['shows'] = data[group];
      $scope.groups.push(temp);
    }
    console.log($scope.groups);
  }, function (error) {
    console.error(error);
  });

}
HomeController.$inject = ['$scope', 'Putlocker'];
