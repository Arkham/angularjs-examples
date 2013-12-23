var app = angular.module('app', []);

app.controller('RoomCtrl', function () {
  this.clickMe = function () {
    alert("creak");
  }

  this.buttonTitle = "Enter this room";
  this.roomSign = "Say friend and enter";
})

app.controller('DoorCtrl', function () {
  this.doorMaterial = 'wood';
})
