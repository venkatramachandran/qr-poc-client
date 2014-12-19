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

  $scope.create = function() {
  	var d = {};
  	d.documentType = "relievingLetter";
  	d.documentFields = [];
  	d.documentFields.push({"fieldName":"startDate", "fieldValue": $scope.startDate});
  	d.documentFields.push({"fieldName":"startDate", "fieldValue": $scope.startDate});
  	Documents.create(d, function(data){
  		$scope.openModal(data);
  	})
  };

  $scope.openModal = function (data) {
  	$scope.imageData = data;
    $scope.modalInstance = $modal.open({
      templateUrl: 'image.html'
    });
  };
  $scope.ok = function () {
    $modalInstance.close();
  };  
});