(function() {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").factory("SlideInModel", SlideInModel);

    SlideInModel.$inject = [];

    function SlideInModel() {
        var model = {
            init: init,
            slideOut: slideOut
        };

        return model;

        function init() {
            console.log("init");
        }

        function slideOut() {
            console.log("close");
        }
    }
})();