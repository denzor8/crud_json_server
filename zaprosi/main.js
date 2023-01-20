let list = document.querySelector('ul');
//create
function addProduct() {
    let title = prompt('Some title');
    let price = +prompt('Some price');

    let productObj = {
        id: Date.now(),
        title, 
        price
    };

    fetch('http://localhost:8000/products', {
        method: 'POST',
        body: JSON.stringify(productObj),
        headers: {                             //заголовки запросов 
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

//read 
function readProducts() {
    list.innerHTML = '';
    let res = fetch('http://localhost:8000/products')
        .then(result => result.json())
        .then(data => {
         data.forEach(item => {
            list.innerHTML += `
            <li style="border-bottom: 2px solid black; width:20%">
            <p>ID: ${item.id}</p>
            <p>Title: ${item.title}</p>
            <p>Price: ${item.price}</p>
            </li>`
         });
        })
};

//retrive
function getProduct() {
    list.innerHTML = '';
    let productID = +prompt('Enter ID')
    let res = fetch(`http://localhost:8000/products/${productID}`)
        .then(result => result.json())
        .then(data => {
            list.innerHTML += `
            <li style="border-bottom: 2px solid black; width:20%">
            <p>ID: ${data.id}</p>
            <p>Title: ${data.title}</p>
            <p>Price: ${data.price}</p>
            </li>`
        })
}

function updateProduct() {
	list.innerHTML = '';
	let productID = +prompt('Enter ID')
	let newTitle = prompt('Enter new Title')
	let res = fetch(`http://localhost:8000/products/${productID}`, {
		method: 'PATCH',
		body: JSON.stringify(
			{title:newTitle}
		),
		headers: {
				"Content-Type": "application/json;charset=utf-8"
		}
});
}


function deleteProduct() {
	let productID = +prompt('Enter product id')
	fetch(`http://localhost:8000/products/${productID}`, {
		method:"DELETE"
	})
} 