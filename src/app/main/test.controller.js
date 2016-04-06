(function() {
  'use strict';

  angular
    .module('training')
    .controller('TestController', TestController)
    .controller('MyLeftController', LeftController)
    .controller('RightController', RightController)
  ;

    /** @ngInject */
    function TestController($scope, $log, $state, $timeout, apiData, BackendConfig) {

        //$log.log($state.current.name);

        var vm = this;

        vm.myCreationDate = new Date();
        vm.testContent = {
            key1: 'aa',
            key2: $state.current
        };

        vm.renderCalled = function (var1, var2) {
            $log.debug('close event called', arguments);
        };


        vm.formData = {
            name: "Florin",
            email: "florin@email.com"
        };

        vm.sendDataToServer = function () {
            apiData.sendData('first', vm.formData);
        };

        vm.setNewData = function (newData) {
            if(typeof newData != 'undefined'){
                vm.formData = newData;
            } else {
                vm.formData = {
                    name: "Smartsoft",
                    email: "aaaa@smartsoft.com"
                };
            }
        };


        vm.listOfData = [];

        apiData.getData('first').then(function (dataFromServer) {
            $log.debug("data from server", dataFromServer);
            vm.listOfData = dataFromServer;

            $log.error(BackendConfig.getConfig('ckey2'));


            vm.formData = angular.copy(dataFromServer[1]);

        }, function () {

        });

        /*$scope.$watchCollection('formData', function (newData) {
            $log.debug(newData);
        });*/


        /*$timeout(function () {
            $state.go('state2');
        }, 5000);*/

    }


    function LeftController($log){
        $log.debug('hello from left');
    }

    function RightController($log){
        $log.debug('hello from right');
    }

})();
