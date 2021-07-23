console.log('run');

function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 100);
}

const onSubmit = () => {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let genre = document.querySelector('#genre').value
    let description = document.querySelector('#description').value

    const payload = {
        title,
        author,
        genre,
        description
    }

    firebase.database().ref().push(payload)
    refresh()
}


