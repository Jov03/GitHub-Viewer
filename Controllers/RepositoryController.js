(function () {
    var app = angular.module("GitHubViewer");
    var RepositoryController = function ($scope, github, $routeParams) {
        var username = $routeParams.username;
        var repositoryName = $routeParams.repositoryName;
        var onData = function (data) {
            $scope.contributors = data;
        }
        var onError = function () {
            $scope.error = "Data not Found";
        };
        github.getRepoDetails(username, repositoryName)
            .then(onData, onError);

    };
    app.controller("RepositoryController", RepositoryController);

}());
