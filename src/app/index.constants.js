/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .value('lang', 'cas');
})();
