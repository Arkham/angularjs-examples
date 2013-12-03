var app = angular.module('superhero', []);

app.directive('superman', function () {
  return {
    restrict: "E",
    template: "<div>Here I am Superman to save the day</div>"
  }
})

app.directive('wonderwoman', function () {
  return {
    restrict: "A",
    link: function (scope, element) {
      element.html('Wonder woman from attribute directive')
    }
  }
})

app.directive('hulk', function () {
  return {
    restrict: "C",
    link: function (scope, element) {
      element.html('Hulk GRR CLASS')
    }
  }
})

app.directive('invisible', function () {
  return {
    restrict: "M",
    link: function () {
      console.log('I am the invisible man')
    }
  }
})
