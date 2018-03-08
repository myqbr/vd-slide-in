angular.module('vivadecora.module.vd-slide-in').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/html/vd-slide-in.template.html',
    "<div ng-class=\"vc.vm.isOpen ? 'vd-slide-in': 'vd-slide-in--closed'\"><div class=\"vd-slide-in__container\"><button class=\"vd-slide-in__dismiss\" data-ng-click=\"vc.vm.slideOut()\">&times;</button><div ng-if=\"!vc.vm.finishStep\" class=\"vd-slide-in__content\"><h3 class=\"vd-slide-in__content__title\">RECEBA DICAS DE DECORAÇÃO</h3><p class=\"vd-slide-in__content__description\">Ideias, dicas e tudo que precisa saber para decorar sua casa</p><form class=\"vd-slide-in__content__form\" data-ng-submit=\"vc.vm.submitData()\" name=\"formData\"><input type=\"email\" data-ng-model=\"vc.vm.formData.email\" class=\"vd-slide-in__content__form__input\" placeholder=\"Digite seu e-mail\"> <input type=\"submit\" class=\"vd-slide-in__content__form__button\" value=\"ME ENVIE IDEIAS &gt;\"></form></div><div ng-if=\"vc.vm.finishStep\" class=\"vd-slide-in__content\"><p class=\"vd-slide-in__content__title\">Obrigada!</p></div></div></div>"
  );

}]);
