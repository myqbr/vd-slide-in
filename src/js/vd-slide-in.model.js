(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").factory("SlideInModel", SlideInModel);

    SlideInModel.$inject = ["$timeout", "$window", "$http"];

    function SlideInModel($timeout, $window, $http) {
        var model = {
            formData: {
                email: "",
                finishStep: false,
                url: ""
            },
            isOpen: false,
            init: init,
            slideIn: slideIn,
            slideOut: slideOut,
            shouldOpen: shouldOpen,
            onScrollTrigger: onScrollTrigger,
            submitData: submitData,
            setFormUrl: setFormUrl
        };

        return model;

        function init() {
            if (shouldOpen()) {
                onScrollTrigger();
            }
        }

        function slideIn() {
            if (shouldOpen()) {
                model.isOpen = true;
                sessionStorage.setItem("newsletterSlideInAlready", "true");
            }
        }

        function slideOut() {
            model.isOpen = false;
            _resetData();
        }

        function shouldOpen() {
            if (JSON.parse(localStorage.getItem("newsletterSlideInAlready")) !== null &&
                JSON.parse(localStorage.getItem("newsletterSlideInAlready")) === true) {
                return false;
            }
            if (JSON.parse(sessionStorage.getItem("newsletterSlideInAlready")) !== null &&
                JSON.parse(sessionStorage.getItem("newsletterSlideInAlready")) === true) {
                return false;
            }
            return true;
        }

        function onScrollTrigger() {
            angular.element($window).bind("scroll", function () {
                $timeout(function () {
                    model.slideIn();
                }, 3000);
            });
        }

        function submitData() {
            $http({
                method: "POST",
                url: model.formData.url,
                data: {
                    email: model.formData.email
                },
                type: "application/json"
            }).then(function successCallback() {
                localStorage.setItem("newsletterSlideInAlready", "true");
            }).finally(function () {
                model.formData.finishStep = true;
                $timeout(function () {
                    slideOut();
                }, 5000);
            });
        }

        function setFormUrl(url) {
            model.formData.url = url;
        }

        function _resetData() {
            model.formData = {
                email: "",
                finishStep: false
            };
        }
    }
})();