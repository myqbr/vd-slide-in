(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in", []);
})();
(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").controller("SlideInController", SlideInController);

    SlideInController.$inject = ["SlideInModel"];

    function SlideInController(SlideInModel){
        var vc = this;
        vc.vm = SlideInModel.init();
    }
})();
(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").directive("slideIn", SlideInDirective);

    function SlideInDirective() {
        var directive = {
            transclude: true,
            templateUrl: "src/html/vd-slide-in.template.html",
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
angular.module('vivadecora.module.vd-slide-in').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/html/vd-slide-in.template.html',
    "<div class=\"vd-slide-in\"><div class=\"vd-slide-in__container\"><button class=\"vd-slide-in__dismiss\">&times;</button><div ng-if=\"true\" class=\"vd-slide-in__content\"><h3 class=\"vd-slide-in__content__title\">RECEBA DICAS DE DECORAÇÃO</h3><p class=\"vd-slide-in__content__description\">Ideias, dicas e tudo que precisa saber para decorar sua casa</p><input type=\"text\" class=\"vd-slide-in__content__input\" placeholder=\"Digite seu e-mail\"> <input type=\"submit\" class=\"vd-slide-in__content__button\" value=\"ME ENVIE IDEIAS >\"></div><div ng-if=\"false\" class=\"vd-slide-in__content\"><p class=\"vd-slide-in__content__title\">Obrigada!</p></div></div></div>"
  );

}]);
