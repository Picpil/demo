(function(angular, undefined){
  "use strict";

  angular
    .module('demoApp', ['ngMaterial'])
    .controller('PicpilCtrl', PicpilCtrl);

  // Fictitious Employee Editor to show how to use simple and complex dialogs.

  function PicpilCtrl($scope, $mdDialog) {
    $scope.picture = "ninjaas.com/static/images/App-Design.jpg";
    $scope.width ="300";
    $scope.height = "200"
    $scope.picpil_url = "http://test.picpil.com/unsafe/"+$scope.width+"x"+$scope.height+"/smart/"+$scope.picture;

    $scope.buttonClicked = function() {
      $scope.picpil_url = "http://test.picpil.com/unsafe/"+$scope.width+"/smart/"+$scope.picture;
      $scope.picpil_url = "http://test.picpil.com/unsafe/"+$scope.width+"x"+$scope.height+"/smart/"+$scope.picture;
    };
  }

})(angular);
