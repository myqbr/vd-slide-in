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