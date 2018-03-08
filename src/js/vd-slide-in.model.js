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
                formData: {
                    email: ""
                },
                isOpen: false,
                slideIn: slideIn,
                slideOut: slideOut,
                submitData: submitData
            };

            function slideIn() {
                model.isOpen = true;
            }

            function slideOut() {
                model.isOpen = false;
            }

            function submitData() {
                console.log(model.formData);
            }

            return model;
        }
    }
})();