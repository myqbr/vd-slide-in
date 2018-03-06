(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").directive("slideIn", SlideInDirective);

    function SlideInDirective() {
        var directive = {
            transclude: true,
            template: "<p>Sim!</p>",
            restrict: "E",
            scope: {},
            replace: true,
            controller: "SlideInController",
            controllerAs: "vc"
        };
        return directive;
    }
})();