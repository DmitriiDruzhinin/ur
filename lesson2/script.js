//
	let name;
	let money;
//	
// 
	for (i=0;i<1;i++) {	
		money = prompt("Ваш бюджет?");
				
		if (!isNaN(money) && money != ''){
			alert ("Ваш бюджет " + (money/30).toFixed(2) + " в день");
			break;
		}
		else {
			alert ("Error!");
			i--;
		}
	}
//
// 
		for (i=0;i<1;i++) {	
		name = prompt("Название вашего магазина?");
				
		if (isNaN(name) && money != ''){
			alert ("Ваш магазин называется " + name);
			break;
		}
		else {
			alert ("Error!");
			i--;
		}
	}
//
// 
	let mainList = {
	budget: money,
	nameMag: name,
	shopGoods: [],
	employers: {},
	open: false
}


// пример 1
// for (i=0;i<3;i++) {
// 	 let a = prompt("Какой тип товара будем продавать?");
// 	 if (isNaN(a)){
// 	 	mainList.shopGoods[i] = a;
// 	 }
// 	 else {
// 	 	alert ("Error! Введите тип товара");
// 	 	i--;
// 	 } 
// }


// пример 2
// let j=1;
// while (j<4) {
// 	 let a = prompt("Какой тип товара будем продавать?");
// 	 if (isNaN(a)){
// 	 	mainList.shopGoods[j] = a;
// 	 	j++;
// 	 }
// 	 else {
// 	 	alert ("Error! Введите тип товара");
// 	 	j--;
// 	 } 
// }


// пример 3
let j=1;
do{	
 	
	let a = prompt("Какой тип товара будем продавать?");
	if (isNaN(a)){
		mainList.shopGoods[j] = a;
	 	j++;
	}
		else {
		alert ("Error! Введите тип товара");
		j--;
	} 
}while (j<4);

console.log(mainList);