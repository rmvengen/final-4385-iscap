angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.iSCAP', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iSCAP.html',
        controller: 'iSCAPCtrl'
      }
    }
  })

  .state('menu.paper', {
    url: '/page5',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/paper.html',
        controller: 'paperCtrl'
      }
    }
  })

  .state('menu.abstract', {
    url: '/page17',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/abstract.html',
        controller: 'abstractCtrl'
      }
    }
  })

  .state('menu.workshops', {
    url: '/page18',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/workshops.html',
        controller: 'workshopsCtrl'
      }
    }
  })

  .state('menu.panels', {
    url: '/page19',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/panels.html',
        controller: 'panelsCtrl'
      }
    }
  })

  .state('menu.vendorPresentations', {
    url: '/page20',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/vendorPresentations.html',
        controller: 'vendorPresentationsCtrl'
      }
    }
  })

  .state('menu.mealsAndBreaks', {
    url: '/page21',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/mealsAndBreaks.html',
        controller: 'mealsAndBreaksCtrl'
      }
    }
  })

  .state('menu.specialMeetings', {
    url: '/page22',
	params: {
		Menu: "/side-menu21"		
},
    views: {
      'side-menu21': {
        templateUrl: 'templates/specialMeetings.html',
        controller: 'specialMeetingsCtrl'
      }
    }
  })

  .state('menu.lostAndFound', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lostAndFound.html',
        controller: 'lostAndFoundCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('page', {
    url: '/page4',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('menu.reportLostItem', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reportLostItem.html',
        controller: 'reportLostItemCtrl'
      }
    }
  })

  .state('menu.reportFoundItem', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reportFoundItem.html',
        controller: 'reportFoundItemCtrl'
      }
    }
  })

  .state('menu.confirmation', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

  .state('menu.schedule', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      }
    }
  })

  .state('menu.schedule2', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule2.html',
        controller: 'schedule2Ctrl'
      }
    }
  })

  .state('menu.workpage', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/workpage.html',
        controller: 'workpageCtrl'
      }
    }
  })

  .state('menu.schedule3', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule3.html',
        controller: 'schedule3Ctrl'
      }
    }
  })

  .state('menu.schedule4', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule4.html',
        controller: 'schedule4Ctrl'
      }
    }
  })

  .state('menu.schedule5', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/schedule5.html',
        controller: 'schedule5Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});