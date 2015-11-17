angular
  .module('amaliaLaFantastica.filters', [])
  .filter('StringToDateFilter', StringToDateFilter);


  function StringToDateFilter(param){
      alert("param"+param);
  }
