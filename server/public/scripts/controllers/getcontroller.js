myApp.controller('GetController', ['$scope', '$http', function($scope, $http )

{
  $scope.searchTerm = ["Title", "Main Ingredient", "Rating"];
  $scope.recipes = [];
  $scope.textBox = false;
  $scope.numBox = false;

//show/hide search box
  $scope.searchType = function () {
    if ($scope.selectedSource == "Rating") {
      $scope.numBox = true;
    } else {
      $scope.textBox = true;
    }

  };
//query to server
  $scope.searchRecipes = function () {

    var query = " ";

    if ($scope.selectedSource == "Title") {
      query = '/recipes?title=' + $scope.keyword;
    } else if ($scope.selectedSource == "Main Ingredient") {
      query = '/recipes?mainIngred=' + $scope.keyword;
    } else {
      query = '/recipes?rating=' + $scope.rating;
    };

    $http.get(query).then(function (response) {
        $scope.recipes = response.data;
        console.log('GET /recipes', response.data);

      });
    };  


}]);
