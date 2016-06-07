myApp.controller('GetController', ['$scope', '$http',  function($scope, $http)

{
  $scope.recipes = [];



  $scope.searchRecipes = function () {
    console.log($scope.keyword);
    $http.get('/recipes?query=' + $scope.keyword)
      .then(function (response) {
        $scope.recipes = response.data;
        console.log('GET /recipes', response.data);

      });
  }

}]);
