(function () {
    var app = angular.module("GitHubViewer");
    var MainController = function ($scope, $interval, $location) {
        $scope.countdown = 5;
        $scope.username = "angular";
        var decrementCountdown = function () {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);

            }
        };
        var stopCountdown = null;
        var startCountdown = function () {
            stopCountdown = $interval(decrementCountdown, 1000, $scope.countdown);
        }


        $scope.search = function (username) {
            if (stopCountdown) {
                $interval.cancel(stopCountdown);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        startCountdown();


    };

    app.controller("MainController", MainController);
}());
