const userData = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Sahil',
            age: 32,
            email: 'example@gmail.com'
        });
    }
});

userData
.then((data) => console.log(data))
.catch((error) => console.log(error))