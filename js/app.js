(function () {
  'use strict';

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.toBuyList;

    vm.bought = function(itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.boughtList;
  }
  
  function ShoppingListCheckOffService() {
    var controller = this;

    controller.toBuyList = [
        { name: "cookies", quantity: 10 },
        { name: "cows", quantity: 12 },
        { name: "chicks", quantity: 4 },
        { name: "ships", quantity: 63 },
        { name: "melons", quantity: 20 }
    ];
    controller.boughtList = [];

    controller.buyItem = function(itemIndex){
      // if (!controller.toBuyList[itemIndex]) return;
      controller.boughtList.push(controller.toBuyList[itemIndex]);
      controller.toBuyList.splice(itemIndex,1);
    }
  }

})();


