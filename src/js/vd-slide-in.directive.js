(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").directive("slideIn", SlideInDirective);

    function SlideInDirective() {
        return {
            templateUrl: "src/html/vd-slide-in.template.html",
            restrict: "E",
            transclude: true,
            scope: {},
            replace: true,
            bindToController: true,
            controllerAs: "vc",
            controller: "SlideInController"
        };
    }
})();