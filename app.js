(function(){
  
  var app = angular.module('artStore', [ ]);
  app.controller('StoreController', function(){
    this.products = arts;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(selectedTab){
      this.tab  = selectedTab;
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
      console.log(this.current);
      console.log(newGallery);
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });

  var arts = [
              { name: 'Photography', 
              price: 2.95, 
              description: 'Lorem ipsum dolor',
              style: 'Modern photography', 
              images: [
                  "img/pipe.jpg",
                  "img/arrow.jpg",
                  "img/tables.jpg"
                  ],
              // canPurchase: true, 
              // soldOut: false 
              reviews: [{
                stars: 5,
                body: "I love this!",
                author: "joe@example.org",
                createdOn: 1397490980837
              }, {
                stars: 1,
                body: "This photography sucks.",
                author: "tim@example.org",
                createdOn: 1397490980837
              }]
            },
            { name: 'Iris Scott',
              price: 5.95,
              description: 'Lorem ipsum ur adipiscing elit.',
              style: 'Hand-stroke', 
              images: [
                  "img/scott1.jpg",
                  "img/scott2.jpg",
                  "img/scott3.jpg"
                  ],
              // canPurchase: true, 
              // soldOut: false 
              reviews: [{
                stars: 5,
                body: "I love Iris!",
                author: "joe@example.org",
                createdOn: 1397490980837
              }, {
                stars: 1,
                body: "Don't see the value",
                author: "tim@example.org",
                createdOn: 1397490980837
              }]
            },
            { name: 'J.M.W.Turner',
              price: 5.95,
              description: 'Lorem ipsum ur adipiscing elit.',
              style: 'Marine Art', 
              images: [
                  "img/turner1.jpg",
                  "img/turner2.jpg",
                  "img/turner3.jpg"
                  ],
              // canPurchase: true, 
              // soldOut: false 
              reviews: [{
                stars: 5,
                body: "Masterpiece",
                author: "joe@example.org",
                createdOn: 1397490980837
              }, {
                stars: 1,
                body: "not a fan",
                author: "tim@example.org",
                createdOn: 1397490980837
              }]
            },
            { name: 'Claude Monet',
              price: 5.95,
              style: 'Impressionism', 
              description: 'Lorem ipsum ur adipiscing elit.',
              images: [
                  "img/monet1.jpg",
                  "img/monet2.jpg",
                  "img/monet3.jpg"
                  ],
              // canPurchase: true, 
              // soldOut: false 
              reviews: [{
                stars: 5,
                body: "I love Monet!",
                author: "joe@example.org",
                createdOn: 1397490980837
              }, {
                stars: 1,
                body: "So naive",
                author: "tim@example.org",
                createdOn: 1397490980837
              }]
            }
  ];
})();
