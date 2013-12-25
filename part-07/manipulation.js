var app = angular.module('app', []);

app.directive('montyPython', function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {

      var animateRight = function () {
        $(this).animate({
          left: '+=50'
        })
      }

      var animateDown = function () {
        $(this).animate({
          top: '+=50'
        })
      }

      $('#spam').on('click', animateDown)
      $('#eggs').on('click', animateRight)
    }
  }
})
