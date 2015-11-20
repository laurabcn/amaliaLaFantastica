angular
  .module('amaliaLaFantastica.translations', [])
  .factory('translations', translations);

translations.$inject = ['$http'];

function translations($http){
  return{
      getLiteral: getLiteral
  };

  function getLiteral(langParam, src, doc){
    return $http.get( 'app/'+src+'/jli/'+langParam+'/'+doc )
      .then(getTranslate)
      .catch(getTranslateFailed);

    function getTranslate(response){
      var arrayResponse = response.data.toString().split(';');
      var result = {};

      for( var i= 0, length = arrayResponse.length; i<length; i++ ){
        arrayResponse[i] = arrayResponse[i].trim().replace("");

        if(arrayResponse[i].charAt("0") === "J"){
          var stringToKey = arrayResponse[i].split('=');

          console.log("tokey", stringToKey[0]);
          result[stringToKey[0]] = stringToKey[1].trim();
        }
      }

      return result;
    }

    function getTranslateFailed(){
      console.log("ERROR getDataPpuFailed");
    }
  }

}
