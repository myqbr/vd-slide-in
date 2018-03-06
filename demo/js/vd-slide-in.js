(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in", []);
})();
(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").controller("SlideInController", SlideInController);

    SlideInController.$inject = [];

    function SlideInController(){
        var vc = this;
    }
})();
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
(function() {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").factory("SlideInModel", SlideInModel);

    SlideInModel.$inject = [];

    function SlideInModel() {
        var constructorModel = {
            constructor: constructor
        };

        return constructorModel;

        function constructor(instanceName) {
            var model = {
                instanceName: instanceName
            };

            return model;
        }
    }
})();