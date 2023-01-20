//promisess

// у промиса есть 3 состояния
// 1 ожданание(pending) - начальное состояние не исполнен и не отклонен
// 2 исполнено (fulfilled)  опервция успешно завершена
// 3 отклонено(rejected)  - операция завершена с ошибкой

// сам же промисс принимает в качестве аргуменат ф - ция
// в то время ф-ция он принримает два коллбека обработчик  (resolve && rejected)
// const firstPromise = new Promise((resolve, reject) => {
// 	//logic
// 	//logic
// 	//logic
// 	if (status === 'admin') {
// 		resolve(someValue);
// 	} else {
// 		reject('You are not admin');
// 	}
// });
// const p = new Promise((resolve, reject) => {
// 	const a = 1 + 1 + 1;
// 	if (a === 3) {
// 		resolve('Success');
// 	} else {
// 		reject('Fail');
// 	}
// });
// console.log(p);

//этот операторы чтобы отловаить результаты работы
// then() - успешная операция
// , catch () - неуспешная оперция
// , finally()  -  в любом случае будет указан
// p
// 	.then(message => {
// 		console.log('norm', message);
// 	})
// 	.catch((message) => {
// 		console.log(message);
// 	})
// 	.finally(() => {
// 		console.log('Work it');
// 	});

// let age = 19;
// let p = new Promise((resolve, reject) => {
// 	if (age >= 21) {
// 		resolve({ age, status: true });
// 	} else {
// 		reject({ age, status: false });
// 	}
// });

// p
// 	.then(result => {
// 	console.log('Success',result);
// 	})
// 	.catch(err => {
// 	console.log('Error',err);
// 	})
// 	.finally(() => {
// 		console.log('Finish');
// 	})

//patch
// obj = {
// 	id: 0943580,
// 	title: 'Samsung',
// 	category: 'phones',
// 	price: '9000$'
// } ->
// -> patch (0943580) -> {category: 'electronics'} ->
// -> {
// 	id: 0943580,
// 	title: 'Samsung',
// 	category: 'electronics',
// 	price: '9000$'
// };

// //put
// obj = {
// 	id: 0943580,
// 	title: 'Samsung',
// 	category: 'phones',
// 	price: '9000$'
// } ->
// -> put (0943580) -> {category: 'electronics'} ->
// -> {
// 	category: 'electronics'
// };

// Методы запросов
// GET - получение информации (без отправки данных)

// POST - отпарвка каких либо данных

// PUT (полный измениние)/ PATCH(частичное измение) - методы для измения контента

// DELETE  - удаление какого либо контента

// 100 - 199 несут в себе информация могут содержать информацию о запросе и др
// 200 - 299  все хорошо успешные статусы  запросов (ответов)
// 300 -399 статусы перенправления (redirect)
// 400 - 499 ошибка на строне клиента
// 500 - 599 ошибка сервера

// reguests
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://rickandmortyapi.com/api/character");
// xhr.send();
// xhr.onload = function () {
// 	console.log(JSON.parse(xhr.response));
// };

// new
const res = fetch("https://rickandmortyapi.com/api/character")
// console.log(res);
	// .then(result => {
	// 	// console.log(result);
	// 	console.log(result.json());
	// })
	.then(result => result.json())
	.then(data => {
		// console.log(data.results);
		data.results.forEach(item => {
			document.body.innerHTML += `
				<img src="${item.image}" alt="error": (width="200" height="200")>
			`
		});
	})
	.catch(err => console.log(err))




	