// Array of products, each product is an object with different fieldset

// A set of ingredients should be added to products		 



var products = [

	{

		name: "brocoli",

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

		vegetarian: true,

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

	for (let i=0; i<prods.length; i+=1) {

		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){

			product_names.push(prods[i].name);

		}

		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){

			product_names.push(prods[i].name);

		} 

		else if ((restriction == "Organic") && (prods[i].organic == true)){

			product_names.push(prods[i].name);

		}

		else if (restriction == "None"){

			product_names.push(prods[i].name);

		}

	}

	return product_names;

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