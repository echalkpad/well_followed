/**
 * Displayed when the given type of data isn't handled.
 */
angular.module('wellFollowed').directive('wfSensorNotImplementedAdmin', function() {
    return {
        restrict: 'E',
        templateUrl: 'admin/experiment-admin/wf-sensor-not-implemented-admin.html'
    }
});
