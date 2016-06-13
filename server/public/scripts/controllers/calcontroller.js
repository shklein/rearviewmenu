myApp.controller('CalController', ['$scope', '$http', '$compile', 'uiCalendarConfig', function($scope, $http, $compile, uiCalendarConfig )
{


  $scope.eventSource = [];
  $scope.events = [];

  getRecipes();

  function getRecipes() {
    $http.get('/recipes')
      .then(function (response) {
        response.data.forEach(function (recipe) {
            var event = new Event (recipe._id, recipe.title, recipe.date_made);
            event.allDay = true;
            console.log(event);
            $scope.events.push(event);
            console.log($scope.events);
          });

            $scope.recipes = response.data;
        console.log('GET /recipes ', response.data);
      });
};

              /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };


    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];


function Event (id, title, start) {
  this._id = id
  this.title = title,
  this.date = start
};


}]);
