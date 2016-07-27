angular
    .module("app")
    .controller("userController", function ($scope, $rootScope, $state, $stateParams, userService) {
        $scope.IsSubmit = false;
        if ($state.current.name == "user") {
            $rootScope.Title = "User Listing";
            userService.GetUsers().success(function (data) {
                $scope.users = data;
            });
        }
        if ($state.current.name == "create") {
            $rootScope.Title = "Create User";
        }
        if ($state.current.name == "edit") {
            $rootScope.Title = "Edit User";
            var id = $stateParams.id;
            userService.GetUser(id).success(function (data) {
                $scope.user = data;
            });
        }

        $scope.saveData = function (user) {
            $scope.IsSubmit = true;
            if ($scope.userForm.$valid) {
                if (user._id != undefined) {
                    userService.UpdateUser(user).success(function (data) {
                        if (data == 'updated') {
                            $state.go("user");
                        }
                    });
                } else {
                    userService.AddUser(user).success(function (data) {
                        if (data == 'created') {
                            $state.go("user");
                        }
                    });
                }
            }
        };

        $scope.deleteUser = function (id) {
            if (confirm('Are you sure to delete?')) {
                userService.DeleteUser(id).success(function (data) {
                    if (data == "deleted") {
                        $state.go("user",{},{reload:true});
                    }
                });
            }
        }
    });

