(function() {
  'use strict';

  angular
    .module('amaliaLaFantastica')
    .controller('PpuSaldoController', PpuSaldoController);

  PpuSaldoController.$inject = ['$scope', 'dataPpuServices', 'translations', 'lang'];

  /** @ngInject */
  function PpuSaldoController($scope, dataPpuServices, translations, lang) {

    var vm = this;

    vm.src = 'ppu';
    vm.doc = 'ppu001.txt';

    //vars to cabecera
    vm.title   = 'Puntos Estrella';
    vm.buttons = [{name: 'Inicio', image:'home', url:'/'}, {name: 'Ayuda', image:'zoom-in', subtitle: 'Buscador', url:'/'}, {name:'Salir', image: 'off', subtitle: 'Retirar Tarjeta', url:'/'}];
    vm.three   = [{name: 'Puntos Estrella', image: 'star', url: '/ppu/saldo'}];

    //vars to footer
    vm.footerbtn  = [{name:'Atrás', image:'arrow-left', url:'/', position: 'left'}, {name:'Extracto', url:'/ppu/extracto', position:'left'}];

    getData();

    getTranslations(lang, vm.src, vm.doc);

    function getData(){
      return dataPpuServices.getDataPpuSaldo()
        .then(function(data){
          vm.data = data.doc.toconsultaclienteout.saldos;
        })
        .catch(function(error){
          logger.error('PpuSaldoController' + error.data);
        });
    }

    function getTranslations( lang,src, doc ){
      return translations.getLiteral(lang, src, doc)
        .then(function(data){
          vm.literals = data;
        })
        .catch(function(error){
          logger.error('PpuSaldoController' + error.data);
        })
    }

  }
})();
