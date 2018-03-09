angular.module('CreativeDirectives', [])
	.directive('completeColour', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				scope.$watch(attrs.completeColour, function (value) {
					element.css('color', (value ? 'yellow' : 'limegreen'));
				});
			}
		}
	});
