var xjs;
(function (xjs) {
    'use strict';
    function InstagramBackground() {
        return {
            priority: 0,
            transclude: false,
            restrict: 'EA',
            controller: xjs.InstagramBackgroundCtrl
        };
    }
    xjs.InstagramBackground = InstagramBackground;
})(xjs || (xjs = {}));
var xjs;
(function (xjs) {
    'use strict';
    var InstagramBackgroundCtrl = (function () {
        function InstagramBackgroundCtrl($element, $http, $timeout) {
            this.$element = $element;
            this.$http = $http;
            this.$timeout = $timeout;
            this.clientId = $element.attr('client-id');
            this.userId = $element.attr('user-id');
            this.init();
        }
        InstagramBackgroundCtrl.prototype.init = function () {
            var _this = this;
            var url = InstagramBackgroundCtrl.FETCH_IMAGES_URL;
            url = url.replace(InstagramBackgroundCtrl.CLIENT_ID_PLACEHOLDER, this.clientId);
            url = url.replace(InstagramBackgroundCtrl.USER_ID_PLACEHOLDER, this.userId);
            var promise = this.$http.jsonp(url, null);
            promise.success(function (response) {
                var url, index;
                index = _this.random(0, response.data.length);
                url = response.data[index].images.standard_resolution.url;
                _this.$element.css('background-image', 'url(' + url + ')');
            });
        };
        InstagramBackgroundCtrl.prototype.random = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        InstagramBackgroundCtrl.$inject = ['$element', '$http', '$timeout'];
        InstagramBackgroundCtrl.USER_ID_PLACEHOLDER = '##USER-ID##';
        InstagramBackgroundCtrl.CLIENT_ID_PLACEHOLDER = '##CLIENT-ID##';
        InstagramBackgroundCtrl.FETCH_IMAGES_URL = 'https://api.instagram.com/v1/users/##USER-ID##/media/recent/?client_id=##CLIENT-ID##&callback=JSON_CALLBACK';
        return InstagramBackgroundCtrl;
    })();
    xjs.InstagramBackgroundCtrl = InstagramBackgroundCtrl;
})(xjs || (xjs = {}));
var xjs;
(function (xjs) {
    'use strict';
    angular.module('xjs', []).directive('ib', xjs.InstagramBackground);
})(xjs || (xjs = {}));
