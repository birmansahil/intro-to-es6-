fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response => response.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({
        postId: 1,
        name: 'Sahil',
        email: 'example@example.ca',
        body: 'That was awesome'
    })
})
.then(response => response.json())
.then(data => console.log(data))