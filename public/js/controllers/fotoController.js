angular.module('teste').controller('FotoController', function($scope, $http) {

    $scope.fotos = [];

    var promise = $http.get('v1/fotos');

    promise.then(function(retorno) {
        $scope.fotos = retorno.data
    }).catch(function(error) {
        console.log(error)
    });

});