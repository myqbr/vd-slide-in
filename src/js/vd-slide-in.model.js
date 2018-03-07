(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").factory("SlideInModel", SlideInModel);

    SlideInModel.$inject = [];

    function SlideInModel() {
        var slideConstructor = {
            constructor: constructor
        };

        return slideConstructor;

        function constructor() {
            var model = {
                isOpen: false,
                slideIn: slideIn,
                slideOut: slideOut
            };

            function slideIn() {
                model.isOpen = true;
            }

            function slideOut() {
                model.isOpen = false;
            }

            return model;
        }
    }
})();