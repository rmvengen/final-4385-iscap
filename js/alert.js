angular.module('ionicApp', ['ionic'])

.controller('PlaylistsCtrl', function($scope, $ionicPopup, $timeout) {
  $scope.data = {}
  
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Confirmation!',
      template: 'Thank you for reporting'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for reporting the lost item');
    });
  };
});




/*angular.module('mySuperApp', ['ionic'])
   .controller('PopupCtrl',function($scope, $ionicPopup) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup

   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Report Lost Item',
       template: 'Are you sure you want to submit this report?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Report Item!',
       template: 'This item has been reported!'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for reporting this!');
     });
   };
});

 // <!--//# sourceURL=pen.js-->
 */