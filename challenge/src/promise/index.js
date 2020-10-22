function somethingWillHappen (bool) {
  return new Promise((resolve, reject) => {
    if (bool) resolve('Hey!')
    else reject(new Error('Uy!'))
  })
}

somethingWillHappen(true)
  .then(response => console.log(response))
  .catch(error => console.error(error.message))

// Asincronismo
function somethingWillHappen2 (bool) {
  return new Promise((resolve, reject) => {
    if (bool) {
      setTimeout(() => {
        resolve('Promesa resuelta despues de 2 segundos')
      }, 2000)
    }
    else {
      const error = new Error('Intencional error')
      reject(error)
    }
  })
}

somethingWillHappen2(true)
  .then(response => console.log(response))
  .catch(error => console.error(error.name))

Promise.all([somethingWillHappen(true), somethingWillHappen2(true)])
  .then(responses => console.log('Array of results', responses))
  .catch(error => console.error('[err] ' + error.message))
