"use strict"
function CartService($http) {
    const self = this;
    self.getAllItems = function() {
        return $http ({
            method: "GET",
            url: "/cart-items"
        });
    };
}

angular.module("App").service("CartService", CartService);
