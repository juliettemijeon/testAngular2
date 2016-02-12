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
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
                {
                    full: 'dodecahedron-02-full.jpg',
                    thumb: 'dodecahedron-02-thumb.jpg'
                }
            ],
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: 'blebleble',
            images: [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
                {
                    full: 'dodecahedron-02-full.jpg',
                    thumb: 'dodecahedron-02-thumb.jpg'
                }
            ],
            canPurchase: true,
            soldOut: false
        }
    ];

    app.controller("PanelController", function(){
        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab=setTab;
        }
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });
})();