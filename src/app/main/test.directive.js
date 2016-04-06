(function() {
    'use strict';

    angular
        .module('training')
        .directive('myTestDirective', TestDirective);


    function TestDirective($log) {
        var directive = {
            restrict: 'A',
            templateUrl: 'app/main/my-directive-content.html',
            //template: '<div style="color:red">test</div>',
            scope: {
                myFirstVar: '=',
                mySecondVar: '@',
                onRender: '&'
            },
            controller: MyDirectiveController,
            controllerAs: 'vm',
            bindToController: true,
            link: linkMyDirective
        };


        return directive;


        function linkMyDirective($scope, element, attributes, controller) {
            //$log.debug('linking is called');
            //$log.debug(element);
            //$log.debug($scope);

            var picker = $(element).pickadate({});

            picker.pickadate('picker').on({
                close: function () {
                    $scope.vm.onRender({
                        var1: 'value1',
                        var2: 'value2'
                    });
                }
            });

        }

        /** @ngInject */
        function MyDirectiveController($scope, $log) {
            var vm = this;

            //$log.debug('my directive');
            //$log.debug($scope);

        }
    }

})();