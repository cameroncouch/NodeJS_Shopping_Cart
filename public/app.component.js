"use strict"
const cart = {
    template: `
    <p class="title">Cart Mate</p>
    <form class="add2cart" ng-submit="$ctrl.addItem(newItem)">
        <input ng-model="newItem.product" placeholder="Product Name" type="text"></input>
        <input ng-model="newItem.price" placeholder="Price" type="number"></input>
        <input ng-model="newItem.quantity" placeholder="Quantity" type="number"></input>
        <button>Add New Item</button>
    </form>
    <section>
    <div class="cartitems" ng-repeat="item in $ctrl.items">
        <p>SKU: {{item.id}}</p>
        <p>Product: {{item.product}}</p>
        <p>Price: {{item.price | currency}}</p>
        <p>Quantity: {{item.quantity}}</p>
        <form>
            <button ng-click="$ctrl.updateItem()">+</button>
            <input type="number"></input>
            <button ng-click="$ctrl.updateItem()">-</button>
            <button ng-click="$ctrl.removeItem(item.id)">Delete Item</button>
            <button ng-click="$ctrl.updateItem(item.id, newItem)">Update Item</button>
        </form>
    </div>
    </section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getItems().then(response => {
            vm.items = response.data;
            console.log(vm.items);
        });

        vm.addItem = function(newitem) {
            CartService.addItem(newitem).then(response => {
            vm.items = response.data;
            });
        };
        vm.removeItem = function(id) {
            CartService.removeItem(id).then(response => {
            vm.items = response.data;
            });
        };
        vm.updateItem = function(id, newItem) {
            CartService.updateItem(id, newItem).then(response => {
                vm.items = response.data;
            });
        };
    }]
};


angular.module("App").component("cart", cart);