(function() {
  'use strict';

  angular
    .module('training')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state) {

    var aaaa = $rootScope.$on('$stateChangeStart', function (event, newState) {

      if(typeof newState.data != 'undefined'  && newState.data.needsLogin){
          //check if user is logged
        event.preventDefault();
        $state.go('state3');
      }


      $log.info('changed', arguments);
    });

    aaaa;

    $log.debug('runBlock end');
  }

})();
