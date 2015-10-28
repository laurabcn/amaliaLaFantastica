(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.buttons = [{name: 'Inicio', image:'home'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta'}];
    vm.title = 'La Caixa';

    vm.three = [{name: 'Puntos Estrella', image: 'star', url: '/ppu/saldo'}]
  }
})();
