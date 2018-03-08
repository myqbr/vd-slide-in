(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in", []);
})();
(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").controller("SlideInController", SlideInController);

    SlideInController.$inject = ["SlideInModel"];

    function SlideInController(SlideInModel) {
        var vc = this;
        vc.vm = SlideInModel;
    }
})();
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
angular.module('vivadecora.module.vd-slide-in').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/html/vd-slide-in.template.html',
    "<div ng-class=\"vc.vm.isOpen ? 'vd-slide-in': 'vd-slide-in--closed'\"><div class=\"vd-slide-in__container\"><button class=\"vd-slide-in__dismiss\" data-ng-click=\"vc.vm.slideOut()\">&times;</button><div ng-if=\"!vc.vm.finishStep\" class=\"vd-slide-in__content\"><h3 class=\"vd-slide-in__content__title\">RECEBA DICAS DE DECORAÇÃO</h3><p class=\"vd-slide-in__content__description\">Ideias, dicas e tudo que precisa saber para decorar sua casa</p><form class=\"vd-slide-in__content__form\" data-ng-submit=\"vc.vm.submitData()\" name=\"formData\"><input type=\"email\" data-ng-model=\"vc.vm.formData.email\" class=\"vd-slide-in__content__form__input\" placeholder=\"Digite seu e-mail\"> <input type=\"submit\" class=\"vd-slide-in__content__form__button\" value=\"ME ENVIE IDEIAS &gt;\"></form></div><div ng-if=\"vc.vm.finishStep\" class=\"vd-slide-in__content\"><p class=\"vd-slide-in__content__title\">Obrigada!</p></div></div></div>"
  );

}]);
