//directive for image loaded event
angular.module('imageLoaded',[]).directive('imageLoaded', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind("load" , function(e){
	//call the function when image is loaded.
        contentLoaded(e);
      });
    }
  }
});
