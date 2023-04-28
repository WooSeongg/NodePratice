//Promise 코드
function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
      }, 1000)
    })
  }

getUsers()
    .then(users => {
        console.log(users)
    })
    .catch(error => {
        console.error(error)
});


//async await 코드
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
        }, 1000)
    })
}
    
async function main() {
    try {
        const users = await getUsers()
        console.log(users)
    } catch (error) {
        console.error(error)
    }
}

main()

