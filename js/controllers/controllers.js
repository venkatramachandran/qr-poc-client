'use strict';

app.controller('QRCtrl', function($scope, $modal, Documents){

  $scope.sdtopen = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.sdtopened = true;
  };
  $scope.edtopen = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.edtopened = true;
  };  
  $scope.format = 'dd-MMMM-yyyy';

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.startDate = '1-Jul-2003';
  $scope.endDate = '4-Apr-2014';
  $scope.name = 'V';

  $scope.create = function() {
    var d = {};
    d.documentType = "relievingLetter";
    d.documentFields = [];
    d.documentFields.push({"fieldName":"startDate", "fieldValue": $scope.startDate});
    d.documentFields.push({"fieldName":"startDate", "fieldValue": $scope.endDate});
    d.documentFields.push({"fieldName":"name", "fieldValue": $scope.name});
    Documents.create(d, function(data){
        $scope.openModal(data);
    })
  };

  $scope.openModal = function (data) {
    $scope.data = data;
    $scope.modalInstance = $modal.open({
      templateUrl: 'image.html',
      controller: 'QRCodeDisplayController',
      resolve: {
        data : function(){
          return $scope.data;
        }
      }
    });
  }; 
});

app.controller('QRCodeDisplayController', function($scope, $modal, data){
  $scope.data = data;
  $scope.ok = function () {
    $modal.hide();
  };
});