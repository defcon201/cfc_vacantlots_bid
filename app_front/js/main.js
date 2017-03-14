angular.module('vacantlotsApp', ['ui.router', 'uiGmapgoogle-maps'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('homePage',
        {
            url:'/',
            templateUrl:'views/map.html'
            //controller: "MapCtrl as map"
        })
		.state('loginPage',
		{
			url:'/login',
			templateUrl:'views/login.html',
			controller: "LoginCtrl as login"
		})
		.state('registerPage',
		{
			url:'/register',
			templateUrl:'views/register.html',
			controller: "RegisterCtrl as register"
		})
        ;
		//$locationProvider.html5Mode(true);



    }])
    ;
    
//How do I implement multiple module configs?
