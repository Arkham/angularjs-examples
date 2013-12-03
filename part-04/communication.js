var app = angular.module('communicationApp', []);

app.directive('country', function () {
  return {
    restrict: "E",
    controller: function() {
      this.makeAnnouncement = function (message) {
        console.log("Country announces: " + message);
      }
    }
  }
})

app.directive('state', function () {
  return {
    restrict: "E",
    require: "^country",
    controller: function () {
      this.makeNotice = function (message) {
        console.log("State notices: " + message);
      }
    },
    link: function (scope, element, attrs, countryCtrl) {
      countryCtrl.makeAnnouncement("from state");
    }
  }
})

app.directive('city', function () {
  return {
    restrict: "E",
    require: [ "^state", "^country" ],
    link: function (scope, element, attrs, ctrls) {
      ctrls[0].makeNotice("from city");
      ctrls[1].makeAnnouncement("from city");
    }
  }
})
