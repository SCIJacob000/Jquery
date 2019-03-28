console.log("hello");


const primaveraIngred = [
'tom sauce',
'garlic',
'basil',
'pasta',
'bacon'
];

function goShopping (list) {
	for(let i = 0; i < list.length; i++){
		console.log(`Buying ${list[i]}`);
	}
}
goShopping(primaveraIngred);

function updateMe () {
	console.log("I am finished shopping and heading back");
}

function goShoppingCB(list, callbackFunction){
	for (var i = 0; i <list.length; i++) {
	console.log(`buying ${list[i]}`);	
	}
	callbackFunction();
}
goShoppingCB(primaveraIngred, updateMe);

const bestBuy = ["gameboy", "xbox", "tv", "computer"];

function doneShopping (){
	console.log("Ive got new swag");
}

function purchaseElec (list, callbackFunction){
	for (let i = 0; i < list.length; i++){
		console.log(list[i]);
	}
	callbackFunction();
}

purchaseElec(bestBuy, doneShopping);



