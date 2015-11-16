/**
 * Created by RieraValLEXT on 16/11/2015.
 */

angular
  .module('amaliaLaFantastica.service', [])
  .factory('dataPpuServices', dataPpuServices);

dataPpuServices.$inject = ['$http'];

function dataPpuServices($http){
  return{
    getDataPpu : getDataPpu
  };

  function getDataPpu(){
    return $http.get('c:/emulador/ppu_extracto_si.xml')
      .then(getDataPpuComplete)
      .catch(getDataPpuFailed);

    function getDataPpuComplete(response){
      var translate = angular.toJson(response, true);

      return translate.data.results;
    }

    function getDataPpuFailed(){
      alert("ERROR getDataPpuFailed");
    }
  }
}
