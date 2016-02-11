/**
 * Created by juliettemijeon on 11/02/2016.
 */
(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products=gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'blablabla',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: 'blebleble',
            canPurchase: true,
            soldOut: false
        }
    ];
})();