var app = angular.module('app', ['ngRoute']);

app.config( function ($routeProvider) {
  $routeProvider
    .when('/', {
      template: "Home sweet home"
    })
    .when('/pizza/:topping', {
      redirectTo: function(routeParams, path, search) {
        console.log(routeParams)
        console.log(path)
        console.log(search)
        return "/" + routeParams.topping
      }
    })
    .when('/pepperoni', {
      template: "PEPPERONI"
    })
    .otherwise({
      redirectTo: "/"
    })
})
