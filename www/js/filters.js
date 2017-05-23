var filters = angular.module('streamy.filters', []);

filters.filter('search', PutlockerSearch);

function PutlockerSearch() {
  return function (shows, term) {
    if(!shows) return [];
    if(!term) return shows;

    filteredShows = [];
    for(var j = 0; j < shows.length; j++) {
      if(shows[j].title.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        filteredShows.push(shows[j]);
      }
    }

    return filteredShows;
  };
}
