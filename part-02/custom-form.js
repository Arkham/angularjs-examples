angular.module('custom-form', []).directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      elm.on('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(elm.html().replace(/<br>$/gi, ""));
        });
      });

      ctrl.$render = function() {
        elm.html(ctrl.$viewValue);
      };

      ctrl.$setViewValue(elm.html());
    }
  }
});
