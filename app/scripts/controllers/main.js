'use strict';

/**
 * @ngdoc function
 * @name acutekittenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acutekittenApp
 */

var App = App || angular.module('acutekittenApp', []);

App.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
