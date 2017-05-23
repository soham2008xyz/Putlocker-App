var controllers = angular.module('streamy.controllers', []);

controllers.controller('HomeCtrl', HomeController);

controllers.controller('ShowCtrl', ShowController);

controllers.controller('EpisodeCtrl', EpisodeController);

function HomeController($scope, $state, Putlocker) {
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
    // console.log($scope.groups);
  }, function (error) {
    console.error(error);
  });

}
HomeController.$inject = ['$scope', '$state', 'Putlocker'];

function ShowController($scope, $stateParams, Putlocker) {
  $scope.slug = $stateParams.show;

  Putlocker.get_show($stateParams.show).then(function (data) {
    $scope.show = data;
    // console.log(data);
    $scope.seasons = [];
    for(key in data.seasons) {
      season = {};
      season['title'] = key;
      season['episodes'] = data.seasons[key];
      $scope.seasons.push(season);
    }
    // console.log($scope.seasons);
  }, function (error) {
    console.error(error);
  });
}
ShowController.$inject = ['$scope', '$stateParams', 'Putlocker'];

function EpisodeController($scope, $stateParams, Putlocker) {
  Putlocker.get_episode($stateParams.show, $stateParams.season, $stateParams.episode).then(function (data) {
    $scope.episode = data;
    // console.log(data);
    var player = jwplayer("playerHKnKxRaStudg");
    player.setup({
      image: data.image,
      sources: data.sources,
      tracks: data.tracks,
      autostart: true,
      width: '100%',
      aspectratio: '16:9',
      primary: 'html5'
    });
  }, function (error) {
    console.error(error);
  });
}
EpisodeController.$inject = ['$scope', '$stateParams', 'Putlocker'];
