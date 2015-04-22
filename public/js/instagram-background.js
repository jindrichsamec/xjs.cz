/// <reference path="references.ts" />
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
/// <reference path="references.ts" />
var xjs;
(function (xjs) {
    'use strict';
    var InstagramBackgroundCtrl = (function () {
        function InstagramBackgroundCtrl($element, $http, $interval) {
            this.$element = $element;
            this.$http = $http;
            this.$interval = $interval;
            this.clientId = $element.attr('client-id');
            this.userId = $element.attr('user-id');
            this.init();
        }
        InstagramBackgroundCtrl.prototype.init = function () {
            var _this = this;
            var url = InstagramBackgroundCtrl.FETCH_IMAGES_URL;
            url = url.replace(InstagramBackgroundCtrl.CLIENT_ID_PLACEHOLDER, this.clientId);
            url = url.replace(InstagramBackgroundCtrl.USER_ID_PLACEHOLDER, this.userId);
            this.$element.css('transition', 'background-image 4s ease-in-out');
            var promise = this.$http.jsonp(url, null);
            promise.success(function (response) {
                var url, index;
                _this.setBackground(response);
                _this.$interval(function () {
                    _this.setBackground(response);
                }, 10 * 1000);
            });
        };
        InstagramBackgroundCtrl.prototype.setBackground = function (response) {
            var index = this.random(0, response.data.length), url = response.data[index].images.standard_resolution.url, image = new Image(), that = this;
            image.onload = function () {
                that.$element.css('background-image', 'url(' + this.src + ')');
            };
            image.src = url;
        };
        InstagramBackgroundCtrl.prototype.random = function (min, max) {
            return Math.floor(Math.random() * max) + min;
        };
        InstagramBackgroundCtrl.$inject = ['$element', '$http', '$interval'];
        InstagramBackgroundCtrl.USER_ID_PLACEHOLDER = '##USER-ID##';
        InstagramBackgroundCtrl.CLIENT_ID_PLACEHOLDER = '##CLIENT-ID##';
        InstagramBackgroundCtrl.FETCH_IMAGES_URL = 'https://api.instagram.com/v1/users/##USER-ID##/media/recent/?client_id=##CLIENT-ID##&callback=JSON_CALLBACK';
        return InstagramBackgroundCtrl;
    })();
    xjs.InstagramBackgroundCtrl = InstagramBackgroundCtrl;
})(xjs || (xjs = {}));
/// <reference path="typings/tsd.d.ts" />
/// <reference path="directive.ts" />
/// <reference path="controller.ts" /> 
/// <reference path="references.ts" />
var xjs;
(function (xjs) {
    'use strict';
    angular.module('xjs', []).directive('ib', xjs.InstagramBackground);
})(xjs || (xjs = {}));
