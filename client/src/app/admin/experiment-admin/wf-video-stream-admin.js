/**
 * Displays the video stream of a camera.
 */
angular.module('wellFollowed').directive('wfVideoStreamAdmin', function($wfStream) {
    alert('test');
    return {
        restrict: 'E',
        templateUrl: 'admin/experiment-admin/wf-video-stream-admin.html',
        link: function(scope, element, attributes) {
            var changes = $wfStream.openStream('/api/VideoStreams/watchStream/camera1');

            var img = element.find('img');
            scope.maxWidth = element.width() - 30;

            changes.on('data', function(stream) {
                img.attr('src', 'data:image/jpeg;base64,' + stream.changes);
            });
        }
    }
});
