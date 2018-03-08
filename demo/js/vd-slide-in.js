(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in", []);
})();
(function () {
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").controller("SlideInController", SlideInController);

    SlideInController.$inject = ["SlideInModel", "$timeout"];

    function SlideInController(SlideInModel, $timeout) {
        var vc = this;
        vc.vm = SlideInModel.constructor();
        $timeout(function () {
            vc.vm.slideIn();
        }, 1500);
    }
})();
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
angular.module('vivadecora.module.vd-slide-in').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/html/vd-slide-in.template.html',
    "<div ng-class=\"vc.vm.isOpen ? 'vd-slide-in': 'vd-slide-in--closed'\"><div class=\"vd-slide-in__container\"><button class=\"vd-slide-in__dismiss\" data-ng-click=\"vc.vm.slideOut()\">&times;</button><div ng-if=\"true\" class=\"vd-slide-in__content\"><h3 class=\"vd-slide-in__content__title\">RECEBA DICAS DE DECORAÇÃO</h3><p class=\"vd-slide-in__content__description\">Ideias, dicas e tudo que precisa saber para decorar sua casa</p><form class=\"vd-slide-in__content__form\" data-ng-submit=\"vc.vm.submitData()\"><input type=\"email\" data-ng-model=\"vc.vm.formData.email\" class=\"vd-slide-in__content__form__input\" placeholder=\"Digite seu e-mail\"> <input type=\"submit\" class=\"vd-slide-in__content__form__button\" value=\"ME ENVIE IDEIAS &gt;\"></form></div><div ng-if=\"false\" class=\"vd-slide-in__content\"><p class=\"vd-slide-in__content__title\">Obrigada!</p></div></div></div>"
  );

}]);
