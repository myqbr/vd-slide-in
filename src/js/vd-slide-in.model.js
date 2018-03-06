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