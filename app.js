console.log('------------- # 4');

let a = 10;
let b= 5;

let plus = a + b;
let minus = a - b;
let multiply = a * b;
let divide = a / b;

console.log('sum of 2 numbers: ', plus);
console.log('difference of 2 numbers: ', minus);
console.log('product of 2 numbers: ', multiply);
console.log('quotient of 2 numbers: ', divide);

console.log('------------- # 5');

for(let i = 1; i <= 5; i++){
	console.log(i);
}

console.log('------------- # 6');

for(let i = 5; i > 0; i--){
	console.log(i);
}


console.log('------------- # 7');

function getMarkInfo(condition) {

	if(condition === 10){
		console.log('У Вас максимальный балл');
	} else{
		console.log('У Вас средний балл');
	}
}

getMarkInfo(10);
getMarkInfo(1);


console.log('------------- # 8');

function getDayInfo(position) {

	switch(position){

		case 0:
			console.log('Sunday');
			break;
		case 1:
			console.log('Monday');
			break;
		case 2:
			console.log('Tuesday');
			break;
		case 3:
			console.log('Wednesday');
			break;
		case 4:
			console.log('Thursday');
			break;
		case 5:
			console.log('Friday');
			break;
		case 6:
			console.log('Saturday');
			break;
		default:
		console.log('Wrong data!');
	}
}
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);

console.log('------------- # 9');

let array = ['a', 'b', 'c'];

array.push(1, 2, 3);
console.log(array);

console.log('------------- # 10');

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let array3 = array1.concat(array2);
console.log(array3);

console.log('------------- # 11');

let selectedNum = prompt('Пожалуйста, выберите любое целое положительное число');
let sum = 0;

for(let i = 1; i <= selectedNum; i++){
	sum += i;
}

console.log('Сумма чисел от 0 до ' + selectedNum + ' равна ' + sum)







