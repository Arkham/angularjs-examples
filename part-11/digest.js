var app = angular.module('app', []);

app.config(function () {
  console.log('Config reached');
})

app.controller('AppCtrl', function ($scope, $timeout, $http) {

  var ctr = 0;

  var make_request = function () {
    $http({
      url: "./digest.js",
      method: "GET"
    }).success(function () {
      console.log("GET request success");
    })
  }

  $scope.$watch(function () {
    ctr += 1;
    console.log("digest called " + ctr);
  })

  $timeout(function () {
    make_request();
    console.log("End timeout");
  }, 2000)


})
