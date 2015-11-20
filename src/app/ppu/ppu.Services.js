/**
 * Created by RieraValLEXT on 16/11/2015.
 */

angular
  .module('amaliaLaFantastica.service', [])
  .factory('dataPpuServices', dataPpuServices);

dataPpuServices.$inject = ['$http', 'ngXml2json'];

function dataPpuServices($http, ngXml2json){
 return {
   getDataPpu: getDataPpu,
   getDataPpuSaldo: getDataPpuSaldo
 };

  function getDataPpu(){
    return $http.get('emulador/ppu_extracto_si.xml')
      .then(getDataPpuComplete)
      .catch(getDataPpuFailed);

    function getDataPpuComplete(response){
      var translate = ngXml2json.parser(response.data);
      return translate;
    }

    function getDataPpuFailed(){
      console.log("ERROR getDataPpuFailed");
    }
  }

  function getDataPpuSaldo(){
    return $http.get('emulador/PPU_CONSULTACUENTAS_SI.xml')
      .then(getDataPpuSaldoComplete)
      .catch(getDataPpuSaldoFailed);

    function getDataPpuSaldoComplete(response){
      var translate = ngXml2json.parser(response.data);
      return translate;
    }

    function getDataPpuSaldoFailed(){
      console.log("ERROR getDataPpuFailed");
    }
  }
}

