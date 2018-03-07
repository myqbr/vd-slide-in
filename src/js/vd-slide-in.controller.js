(function(){
    "use strict";

    angular.module("vivadecora.module.vd-slide-in").controller("SlideInController", SlideInController);

    SlideInController.$inject = ["SlideInModel"];

    function SlideInController(SlideInModel){
        var vc = this;
        vc.vm = SlideInModel.init();
    }
})();