(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuSaldoController', PpuSaldoController);

  /** @ngInject */
  function PpuSaldoController() {
    var vm = this;

    vm.title   = 'Puntos Estrella';
    vm.buttons = [{name: 'Inicio', image:'home'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta'}];
    vm.three   = [{name: 'Puntos Estrella', image: 'star', url: '/ppu/saldo'}]
  }
})();
