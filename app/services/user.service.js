angular
    .module("app")
    .factory("userService", function ($http, globalConfig) {
        var url = "";
        return {
            GetUsers: function () {
                url = globalConfig.apiAddress + "/user";
                return $http.get(url);
            },
            GetUser: function (id) {
                url = globalConfig.apiAddress + "/user/"+id;
                return $http.get(url);
            },
            AddUser: function (user) {
                url = globalConfig.apiAddress + "/user";
                return $http.post(url, user);
            },
            UpdateUser: function (user) {
                url = globalConfig.apiAddress + "/user/" + user._id;
                return $http.put(url, user);
            },
            DeleteUser: function (id) {
                url = globalConfig.apiAddress + "/user/" + id;
                return $http.delete(url);
            }
        }
    });