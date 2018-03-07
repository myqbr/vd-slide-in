(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").directive("slideIn", SlideInDirective);

    function SlideInDirective() {
        var directive = {
            transclude: true,
            templateUrl: "src/html/vd-slide-in.template.html",
            restrict: "E",
            scope: true,
            replace: true,
            controller: "SlideInController",
            controllerAs: "vc"
        };
        return directive;
    }
})();