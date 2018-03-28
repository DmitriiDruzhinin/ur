//
mainList = {
	budget: 0,
	nameMag: "",
	shopGoods: shopGoods = [],
	employers: employers = {},
	open: true
}

//
budget = +prompt("Введите ваш бюджет");
if (!isNaN(budget)){
	alert ("Ваш бюджет " + (budget/30).toFixed(2) + " в день");
}
else {
	alert ("Вы ввели не число");
}

//
nameMag = prompt("Введите название вашего магазина");

//
for (i=0;i<3;i++) {
	 shopGoods[i] = prompt("Введите тип товара который будем покупать");
	 if (isNaN(shopGoods[i])){}
	 else {
	 	alert ("Error! Введите тип товара");
	 	i--;
	 } 
}

