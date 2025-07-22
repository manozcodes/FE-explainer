// fetch('<API_URL>')
//       .then(response => response.json())
//       .then(json => console.log(json))

// GET, POST, PUT, PATCH, DELETE


// const todos = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
//     .then(response => console.log(response));

// GET example
const getTodo = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
})

// POST examples
const postTodo = fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: {
        username: "manoz@gmail.com",
        password: "manoz123"
    }
})

// PUT examples
const putTodo = fetch(`https://jsonplaceholder.typicode.com/todos/${ID}`, {
    method: 'PUT',
    body: {
        username: "manoz@gmail.com",
        password: "manoz123"
    }
})


console.log(todos);


