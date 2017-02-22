(function() {
  'use strict';

  angular
    .module('shersialBtGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
