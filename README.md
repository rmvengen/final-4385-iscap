# ISCAP mobile app

_The ISCAP mobile app is for their conference_
<p>
    This mobile app shows the schedule for the conference as well as
    a place to report lost and found items.
    The schedule can be displayed two different ways, by category or by room and time.
    The lost and found has a spot to report a lost item and a different spot to report a found item.
    This way no one steals another persons item, they must report their lost item and they will get it, if it
    matches a found item. 
</p>

Features:
<ul>
<li>Schedule</li>
<li>Lost and Found</li>
<li>Alerts</li>
</ul>


_Difficulties_

The most challenging part of this assignment was making the popup alert to show, which does not quite work.

```
<button class="button button-positive" ng-click="showAlert()">
      Report!(Alert)
    </button>
```
and in the js
```
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
```

Another challenge was setting up the schedule correctly 
```
<ion-scroll direction="xy" id="map_content">
      <div class="row">
        <div class="col col-25">
          <button class="button button-positive">Room</button>
        </div>
        <div class="col col-40">
          <button class="button button-dark">7:00 am</button>
        </div>
        <div class="col col-40">
          <button class="button button-dark">7:30 am</button>
        </div>
        <div class="col col-40">
          <button class="button button-dark">8:00 am</button>
        </div>
        <div class="col col-40">
          <button class="button button-dark">8:30 am</button>
        </div>
        <div class="col col-40">
          <button class="button button-dark">9:00 am</button>
        </div>
```
