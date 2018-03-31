let shopItems = [];

function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");

		while (!isNaN(items) || items == '' || items == null){
			items = prompt("Перечислите через запятую товары", '');
		}
		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
	}
	
	chooseShopItems();
		
	shopItems.forEach(function(item){
		console.log(item);
	});
console.log("проверка");

console.log(mainList);