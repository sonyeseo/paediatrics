
// app.ui.form.directives
// ====================================================================
// This file should included in your project.
//
// - Squaredesigns.net -


angular.module("app.ui.form.directives", [])

/***********************************
 :: uiRangeSlider Directive
 ***********************************/

.directive("uiRangeSlider", [
  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.slider();
      }
    };
  }
])

/***********************************
 :: uiFileUpload Directive
 ***********************************/

.directive("uiFileUpload", [
  function() {
    return {
      restrict: "A",
      link: function(scope, ele) {
        return ele.bootstrapFileInput();
      }
    };
  }
])

/***********************************
 :: uiSpinner Directive
 ***********************************/

.directive("uiSpinner", [
  function() {
    return {
      restrict: "A",
      compile: function(ele, attrs) {
        ele.addClass("ui-spinner");
        return {
          post: function() {
            return ele.spinner();
          }
        };
      }
    };
  }
])

/***********************************
 :: uiWizardForm Directive
 ***********************************/

.directive("uiWizardForm", [
  function() {
    return {
      link: function(scope, ele) {
        return ele.steps();
      }
    };
  }
]);