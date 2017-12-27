(function () {
    var app = angular.module("GitHubViewer");
    var UserController = function ($scope, github, $routeParams) {
        $scope.username = $routeParams.username;
        $scope.repoOrderBy = '-stargazers_count';


        var onResponse = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                .then(onReposResponse, onError);

        };
        var onError = function () {
            $scope.error = "Could not find the user";
        };
        var onReposResponse = function (data) {
            $scope.repos = data;
        }
        github.getUser($scope.username).then(onResponse, onError);
    };

    app.controller("UserController", UserController);
}());
