// Array of products, each product is an object with different fieldset

// A set of ingredients should be added to products		 



var products = [

	{

		name: "broccoli",

		vegetarian: true,

		glutenFree: true,

		organic: true,

		price: 1.99

	},

	{

		name: "bread",

		vegetarian: true,

		glutenFree: false,

		organic: false,

		price: 2.35

	},

	{

		name: "salmon",

		vegetarian: false,

		glutenFree: true,

		organic: false,

		price: 10.00

	},

	{

		name: "pork",

		vegetarian: false,

		glutenFree: true,

		organic: false,

		price: 5.00

	},

	{

		name: "gluten-free brownies",

		vegetarian: false,

		glutenFree: true,

		organic: false,

		price: 1.95

	},

	{

		name: "4L organic milk",

		vegetarian: false,

		glutenFree: true,

		organic: true,

		price: 8.35

	},

	{

		name: "18-pack eggs",

		vegetarian: false,

		glutenFree: true,

		organic: false,

		price: 4.60

	},

	{

		name: "18-pack organic eggs",

		vegetarian: false,

		glutenFree: true,

		organic: true,

		price: 8.30

	},

	{

		name: "lettuce",

		vegetarian: true,

		glutenFree: true,

		organic: true,

		price: 1.35

	},

	{

		name: "veggie burger (8pcs)",

		vegetarian: true,

		glutenFree: true,

		organic: false,

		price: 5.00

	},

	{

		name: "gluten-free bread",

		vegetarian: true,

		glutenFree: true,

		organic: false,

		price: 2.50

	},

	{

		name: "yogurt",

		vegetarian: false,

		glutenFree: true,

		organic: false,

		price: 4.47

	},

	{

		name: "black-eyed beans",

		vegetarian: true,

		glutenFree: false,

		organic: false,

		price: 2.35

	}

];




// given restrictions provided, make a reduced list of products

// prices should be included in this list, as well as a sort based on price



function restrictListProducts(prods, restriction) {

	let product_names = [];
	let product_type = ["Vegetarian", "GlutenFree", "Organic"];

	for (let i=0; i<prods.length; i+=1) {

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){

			product_names.push(prods[i].name);

		}

		if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){

			product_names.push(prods[i].name);

		} 

		if ((restriction == "Organic") && (prods[i].organic == true)){

			product_names.push(prods[i].name);

		}

		else if (restriction == "No Preference"){

			product_names.push(prods[i].name);

		}

		// for (var j = 0 ; j < product_type.length; j++) {
		// 	if (restriction==product_type[j] && (prods[i].vegetarian == true)) {
		// 		product_names.push(prods[i].name);
		// 	}
		// }

	}

	return product_names;

}

// return an item's price

function getItemPrice(){
	return products[i].price;
}



// Calculate the total price of items, with received parameter being a list of products

function getTotalPrice(chosenProducts) {

	totalPrice = 0;

	for (let i=0; i<products.length; i+=1) {

		if (chosenProducts.indexOf(products[i].name) > -1){

			totalPrice += products[i].price;

		}

	}

	return totalPrice;

}


// Return a product list sorted using prices

function getProducts(myProds){

	let prods = [];
	let tmp;

	for (let i = 0; i<myProds.length; i++){
		tmp = myProds[i];
		for(let j=0; j<myProds.length; j++){
			if ( tmp.price > myProds[j].price) {
				tmp = myProds[j];
				
			}
		}
		prods[i]=tmp;
	}

	return prods;
}

