var app = angular.module('app', []);

app.service('apiCall', ['$http', function ($http) {
    var result = {};

    this.getApi = function (loginData) {
        result = $http.post('/Token', loginData).success(function (data) {
            result = (data);
            console.log(data);
        }).error(function () {
            console.log('Loi vcd ra ');
        });
        return result;
    }
}]);

app.controller('appController', ['$scope', function ($scope) {
    var username = $scope.username;
    var password = $scope.password;
    console.log(username);
    console.log(password);
    $scope.suc = "thanh cong";
    $scope.login = function () {
        var loginData = {
            grant_type: 'password',
            username: "trang.duong39@yahoo.com.vn",
            password: "25021996Aa"
        };
        var result = apiCall.getApi(loginData).success(function (data) {
            console.log(data);
            $scope.Data = data;
        });
    };
}]);

