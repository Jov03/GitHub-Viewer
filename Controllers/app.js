(function () {
    var app = angular.module("GitHubViewer", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "/Views/main.html",
                controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "/Views/userDetails.html",
                controller: "UserController"
            })
            .when("/user/:username/:repositoryName", {
                templateUrl: "/Views/RepositoryDetails.html",
                controller: "RepositoryController"
            })
            .otherwise({
                redirectTo: "/main"
            });
    });


}());
