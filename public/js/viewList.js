console.log('run')



const container = document.querySelector('#container')



const bookListRef = firebase.database().ref();
bookListRef.on('value', snapshot => {
    const data = snapshot.val() 
    console.log('hi')
    console.log(data)
    let content = ""
    let count = 0
for (let key in data) {
    const id = data[key]
    // console.log(data[id])

    content += `
    <div class="column is-4">
        <div class="card">
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">
                ${id.title}
                </p>
                <p class="subtitle is-5">${id.author}</p>
            </div>
            </div>

            <div class="content">
            ${id.description}
            </div>
            <span class="tag is-primary">${id.genre}</span>
            <button class="button is-danger is-outlined is-pulled-right is-small">
            <span>Delete</span>
            
            </button>
        </div>
        </div>
    </div>`
}

    container.innerHTML = content
    })

    

    






// console.log(data)