BankApp.directive("localeswitch", function () {
    return {
    	restrict: 'A',
    	scope: true,
    	link: function(scope, element, attrs) {
            scope.getContentUrl = function() {
                if (scope.path.localeswitchPath != undefined) {
            	 return localeFolder + 'commonpages/' + scope.path.localeswitchPath;
                }
            }
        },
        template: '<div ng-include="getContentUrl()"></div>'
    }
});
