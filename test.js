function getprice(cart) {
	let total = 0.0;
	for (item in cart) {
		total += cart[item].count * cart[item].price
	}
	return total;
}


let cart1 = {
	'apple': {
		'count': 2,
		'price': 0.2
	},
	'orange': {
		'count': 1,
		'price': 0.4
	},
		'banana': {
		'count': 7,
		'price': 0.2
	}
}

let cart2 = {
	'apple': {
		'count': 3,
		'price': 0.2
	},
	'orange': {
		'count': 2,
		'price': 0.4
	}
}
console.log(getprice(cart1));
console.log(getprice(cart2));