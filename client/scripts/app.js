// SensationApp Module
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -

'use strict';

angular.module('SensationApp', [
      'ngRoute', 
	  'ngAnimate',
	  'ngSanitize', 
	  'ui.bootstrap', 
	  'easypiechart', 
	  'textAngular', 
	  'ui.tree', 
	  'ngMap', 
	  'ngTagsInput', 
	  'slick', 
	  'ui.select', 
	  'selectApp', 
	  'ui.calendar', 
	  'tablesorting', 
	  'inlineedittable', 
	  'TodoApp', 
	  'app.controllers', 
	  'app.directives', 
	  'app.localization', 
	  'app.nav', 
	  'app.ui.ctrls', 
	  'app.ui.directives', 
	  'app.form.validation', 
	  'app.ui.form.ctrls', 
	  'app.ui.form.directives', 
	  'app.tables', 
	  'app.task', 
	  'app.chart.ctrl', 
	  'app.chart.directives', 
	  'angular-animate', 
	  'app.calendar', 
	  'app.ui.jvectormap',
	  'xeditable',
	  'FullscreenApp',
	  'galleryApp',
	  'datatables'
])

.config([
  '$routeProvider', function($routeProvider) {
    var routes, setRoutes;
    routes = [
	    'dashboard/dashboard-v1', 
		'ui/typography', 
		'ui/buttons', 
		'ui/icons', 
		'ui/grids', 
		'ui/widgets', 
		'ui/components', 
		'ui/timeline', 
		'ui/nested-lists', 
		'ui/fontawesome', 
		'ui/animation', 
		'ui/panel',
		'ui/xeditable',
		'maps/gmap', 
		'maps/vectormap', 
		'tables/static', 
		'tables/dynamic', 
		'tables/responsive', 
		'forms/elements', 
		'forms/layouts', 
		'forms/validation', 
		'forms/select', 
		'forms/wizard', 
		'charts/flot', 
		'charts/morris', 
		'charts/highcharts',
		'pages/404', 
		'pages/500', 
		'pages/blank', 
		'pages/forgot-password', 
		'pages/invoice', 
		'pages/lock-screen', 
		'pages/profile', 
		'pages/signin', 
		'pages/signup', 
		'pages/directory', 
		'pages/faq', 
		'pages/gallery', 
		'mail/compose', 
		'mail/inbox', 
		'mail/mailview', 
		'tasks/tasks', 
		'calender/calender', 
		'ngtable/ngtable',
		'settings/settings-panel'
		];
		
    setRoutes = function(route) {
      var config, url;
      url = '/' + route;
      config = {
        templateUrl: 'views/' + route + '.html'
      };
      $routeProvider.when(url, config);
      return $routeProvider;
    };
    routes.forEach(function(route) {
      return setRoutes(route);
    });
    return $routeProvider.when('/', {
      redirectTo: 'dashboard/dashboard-v1'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).otherwise({
      redirectTo: '/404'
    });
  }
]);