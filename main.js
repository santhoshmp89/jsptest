var ajax = [
	'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://dummyjson.com/products/1',
  'https://dummyjson.com/products/2',
  'https://dummyjson.com/products/3',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap'
];

function makeAjaxCall() {
	ajax.forEach((a) => {
		fetch(a)
	  .then(x => console.log(x))
	});
}

const button = document.getElementById('button');
button.click(function() {
	makeAjaxCall();	
});
