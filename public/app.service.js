"use strict"
function CartService($http) {
    const self = this;
    self.getItems = function() {
        return $http ({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItem = function(newItem) {
        return $http ({
            method: "POST",
            url: "/cart-items",
            data: {...newItem}
        });
    };
    self.updateItem = function(id, newItem) {
        return $http ({
            method: "PUT",
            url: `/cart-items/${id}`,
            data: {...newItem}
        });
    };
    self.removeItem = function(id) {
        return $http ({
            method: "DELETE",
            url: `/cart-items/${id}`
        });
    };
}

angular.module("App").service("CartService", CartService);
