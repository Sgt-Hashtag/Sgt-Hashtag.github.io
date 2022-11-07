var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/cv', {
    templateUrl : 'pages/cv.html',
    controller  : 'CvController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .when('/projects', {
    templateUrl : 'pages/projects.html',
    controller  : 'ProjectsController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'I\'m an Engineer, a thinker and a gaming enthusiast. And I love Robotics and Programming.\r\n Welcome to my Page'
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello, I\'m under Construction';
});

app.controller('CvController', function($scope) {
  $scope.message = 'Hello, Gonna be here soon';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello, I\'m under Construction';
});

app.controller('ProjectsController', function($scope) {
  $scope.message = 'Hello, I\'m gonna be compiled soon';
});
