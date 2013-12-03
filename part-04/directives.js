var app = angular.module('directiveApp', []);

// this is a component, it is used to display data through
// the attributes, but nothing inside the tags

app.directive('clock', function () {
  return {
    restrict: "E",
    scope: {
      timezone: "@"
    },
    template: "<div>12:00 pm {{timezone}}</div>"
  }
})

// this is a container, it allows you to pass additional content
// even other directives within the container

app.directive('panel', function () {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    template: "<div style='border: 2px solid black'>"+
      "<div class='alert-box'>{{title}}</div>" +
      "<div ng-transclude></div>" +
      "</div>"
  }
})
