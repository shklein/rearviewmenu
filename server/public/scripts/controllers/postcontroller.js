myApp.controller('PostController', ['$scope', '$http',  function($scope, $http)
{

$scope.sources = ["Cookbook", "Magazine", "URL", "other"];
$scope.currentRec = {};

$scope.submitCurrentRec = function () {
  $scope.currentRec.source = $scope.selectedSource;
    var data = $scope.currentRec;

    $http.post('/recipes', data).then(function(response) {
      if(response.status == 201) {
        console.log('Recipe saved.');
      } else {
        console.log('Error:', response.data);
      }
    });
    };



}]);
