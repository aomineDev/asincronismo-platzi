function somethingWillHappen (bool) {
  return new Promise((resolve, reject) => {
    if (bool) setTimeout(() => resolve('Do Something Async'), 3000)
    else reject(new Error('Test Error'))
  })
}

async function doSomethingAsync (bool) {
  try {
    const something = await somethingWillHappen(bool)
    console.log(something)
  } catch (error) {
    console.error(error.message)
  }
}

async function anotherFunction () {
  console.log('before')
  await doSomethingAsync(true)
  console.log('after')
}

anotherFunction()
