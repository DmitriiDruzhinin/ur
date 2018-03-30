// Урок № 3
let name,
	money,
	time,
	price

function start() {	
	money = prompt("Ваш бюджет?");
	
	while (isNaN(money) || money == '' || money == null){
		money = prompt("Ваш бюджет?");
	
	}

	// name = prompt("Название вашего магазина?");
	// while ((typeof(name)) != 'string' || name == '' || name == null ){
	
	name = prompt("Название вашего магазина?").toUpperCase();
	
	// }
	
	time = 21;
}
start();

let mainList = {
	budget: money,
	nameMag: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function chooseGoods(){
	for (i=0;i<3;i++) {
		let a = prompt("Какой тип товара будем продавать?");

		if ((typeof(a))==='string'&& (typeof(a)) != null && a != ''){
			mainList.shopGoods[i] = a;
		}
		else {
			alert ("Error! Введите тип товара");
			i--;
			} 
	}
}
chooseGoods();

function workTime(time){
	if (time < 0){
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20){
		console.log('Время работать!');
		} else if (time < 24){
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
				}
}
workTime(18);

function dayBudget(x){
	return x = (x/30).toFixed(2);
}

function makeDiscount(){
price = 156;
discount = true;

(discount) ? price*=0.8 : price ;
console.log(price);
}
makeDiscount();

function hireEmployers(){
	for (i=1;i<4;i++) {
		let name = prompt("Имя сотрудника");
		mainList.employers[i] = name;		
	}
}

hireEmployers();
// // пример 1
// for (i=0;i<3;i++) {
// 	 let a = prompt("Какой тип товара будем продавать?");
// 	 console.log(typeof(a));
// 	 if ((typeof(a))==='string'){
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
// 	 } 
// }


// пример 3
// let j=1;
// do{	
 	
// 	let a = prompt("Какой тип товара будем продавать?");
// 	if (isNaN(a)){
// 		mainList.shopGoods[j] = a;
// 	 	j++;
// 	}
// 		else {
// 		alert ("Error! Введите тип товара");
// 	} 
// }while (j<4);

alert ("Ваш бюджет " + dayBudget(money) + " в день");
console.log(mainList);