"use strict"
const cart = {
    template: `
    <p class="title">Cart Mate</p>
    <section>
    <div class="cartitems" ng-repeat="item in $ctrl.items">
        <p>SKU: {{item.id}}</p>
        <p>Product: {{item.product}}</p>
        <p>Price: $ {{item.price}}.00</p>
        <p>Quantity: {{item.quantity}}</p>
    </div>
    </section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then(response => {
            vm.items = response.data;
            console.log(vm.items);
        });
    }]
};


angular.module("App").component("cart", cart);