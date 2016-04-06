(function() {
  'use strict';

  angular
    .module('training')
    .directive('acmeNavbar', acmeNavbar);
    //.directive('acme-navbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/navbar/navbar.html',
      //template: '<div style="color:red">test</div>',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
