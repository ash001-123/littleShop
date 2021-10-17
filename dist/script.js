var ShoppingCart = (function($) {
  "use strict";
  
  var productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
  var products = [
    {
      id: 0,
      name: "Girls 3 Pack Frill T-Shirts (Newborn-23mths)",
      description: " little lady's casual collection with this t-shirt trio. Crafted from soft jersey fabric for maximum comfort, the tops are cut with cuffed long sleeves and a classic crew neckline.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/343533/1628149565.9938233-S2835292_C47Q_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=2649d5d27e1e57089e3f43a39dd9b955",
      price: 1050
    },
    {
      id: 1,
      name: " Baby Outfits Ruffle Romper Floral Pants Cute Toddler Baby Girl Clothes (Newborn-15mths)",
      description: " Soft and breathable, skin friendly for baby daily wear or outdoor wear. Great gift for your little one.",
      imageUrl: "https://m.media-amazon.com/images/I/71kHXhfkC3L._AC_UX385_.jpg",
      price: 650
    },
    {
      id: 2,
      name: "Baby Girl Clothes Romper Shorts Set Floral Summer Outfits (Newborn-12mths)",
      description: " Super soft and stretchy materials for comfortable dressing and sporting.",
      imageUrl: "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFYb3J2dEFub0wuX0FDX1VMMTUwMF8uanBn.jpg",
      price: 450
    },
    {
      id: 3,
      name: "Girls Lace Trim Burgundy Dress (Newborn-23mths)",
      description: "Perfect for parties and special occasions, this beautiful burgundy dress will make a great addition to baby's first wardrobe.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/343592/1631262289.6627011-S2838127_C327_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=6a644784faf8646fa8e89f6a49c2d3ae",
      price: 860
    },
    {
      id: 4,
      name: "Girls Knitted Dungarees & Top Set (Newborn-12mths)",
      description: "Inspired by traditional Spanish babywear, this plush set will keep your little lady cosy all the while looking utterly adorable.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/337350/1629186041.1874518-S2835155_C323_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=260&s=f9b374adb99f9ba123121778760a254b",
      price: 599
    },
    {
      id: 5,
      name: "Girls Bunny Print Dress (Newborn-12mths)",
      description:"Crafted from cool and comfortable cotton that's soft on delicate skin, this cream dress features adorable bunny prints, together with a frill collar for an elegant finish.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/350028/1631876626.925214-S2836297_C438_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=1945d60a9d5d64389ac4034b26641ce7",
      price: 499
    },
     {
      id: 6,
      name: "Girls 2 Pack Long Sleeve Dresses (Tiny Baby-23mths)",
      description:"Cut with cosy long sleeves and twirl-worthy skater skirts, the dress duo features one pink and one grey option, both of which are trimmed with delicate heart prints for added cuteness.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/343610/1629359078.6635468-S2840788_CD64_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=a2ef316d7a77e35f564bedbbc4070279",
      price: 800
    },
    {
      id: 7,
      name: "Girls 3 Pack Forest Leggings (Newborn-23mths)",
      description:"Fashioned with 100% cool and comfortable cotton for maximum comfort% they come in an array of colours and feature ditsy prints and plain designs.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/338232/1630482004.604288-S2837755_C47Q_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=55507d87e75c2faea01ed069514fbeaf",
      price: 950
    },
        {
      id: 8,
      name: "Girls Pink Hooded Fleece Jacket (Newborn-23mths)",
      description:"In pink, it features practical front button fastenings and a hood with 3D bear ears. Perfect for layering over all her first outfits on those chilly days.",
      imageUrl: "https://matalan-content.imgix.net/uploads/asset_file/asset_file/335961/1625815226.7547033-S2832235_C323_Alt1.jpg?ixlib=rails-2.1.4&cs=tinysrgb&auto=compress%2Cformat&fm=pjpg&w=1400&fit=crop&ar=1400%3A0&s=84dcad3028a45cfe640385a9e2491a7c",
      price: 800
    },
    {
      id: 9,
      name: "Girl Romper Jumpsuit Clothes Bodysuit Headband Outfits(Newborn-12mnths)",
      description:"Safety material:Soft cotton-blend knit, comfortable and breathable, suitable for babies. Comfortable, breathable and wear-resistant.",
      imageUrl: "https://i5.walmartimages.com/asr/9772d01b-74e8-4bc0-a100-61b1d9dbf2ed_1.591fb7a2002986df74919810a7e24b3b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 500
    },
    {
      id: 10,
      name: "Toddler Baby Girl Long Sleeve Outfits Solid T Shirt Floral Rose Suspender Skirt Dress Outfits Clothes (Newborn-12-18 mths)",
      description:" Cotton Blend,soft and comfortable.Skin friendly. Great for birthday, baby shower gift, baptism, wedding, party, daily wear;princess dress.unique and attractive.",
      imageUrl: "https://i5.walmartimages.com/asr/03e4f0a1-c808-4823-a907-8d05b8a347c7_1.df8acd5d447bcada092c2ac358b8037a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 650
    },
    {
      id: 11,
      name: "Gerber Baby Girl Bunny Take Me Home Shirt, Footed Pants & Cap, 3pc Outfit Set(Newborn-12mnths",
      description:"This material is soft and stretchy, perfect for baby’s delicate skin. This material is easy to clean as it is both machine washable and machine dryable. ",
      imageUrl: "https://i5.walmartimages.com/asr/3fe7f2a8-8e1b-4759-8906-6e3e6a746d94_1.7c71fe27cdd8f1e3239bbe934e382f23.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 500
    },
  ],
      productsInCart = [];
  
  
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price:</span> ₱ ${item.price} </div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;
                             
productsEl.appendChild(productEl);
    });
  }
  
  // Like one before and I have also used ES6 template strings
  var generateCartList = function() {
    
    cartEl.innerHTML = "";
    
    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - ₱${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });
    
    productQuantityEl.innerHTML = productsInCart.length;
    
    generateCartButtons()
  }
  
  
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "₱ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  var setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });
    
    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure you want to remove all the item(s) in your cart?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }
  

  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }
  
 
  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }
  
  var init = function() {
    generateProductList();
    setupListeners();
  }
  

  return {
    init: init
  };
  

})(jQuery);

ShoppingCart.init();