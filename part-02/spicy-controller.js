function SpicyCtrl($scope) {
  $scope.spice = "very";

  $scope.chiliSpicy = function() {
    $scope.spice = "chili";
  };

  $scope.jalapenoSpicy = function() {
    $scope.spice = "jalapeño";
  };

  $scope.spicy = function(spice) {
    $scope.spice = spice;
  }
};
