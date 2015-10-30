(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuSaldoController', PpuSaldoController);

  /** @ngInject */
  function PpuSaldoController() {
    var vm = this;
    //vars to cabecera
    vm.title   = 'Puntos Estrella';
    vm.buttons = [{name: 'Inicio', image:'home'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta'}];
    vm.three   = [{name: 'Puntos Estrella', image: 'star', url: '/ppu/saldo'}];

    //vars to footer
    vm.footerbtn  = [{name:'Atrás', image:'arrow-left', url:'/', position: 'right'}, {name:'Extracto', url:'/ppu/extracto', position:'left'}];

  }
})();
