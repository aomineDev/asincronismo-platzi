const axios = require('axios')

const { api } = require('../../config')

axios.get(api)
  .then(({ data }) => {
    console.log(data.info.count)
    return axios.get(api + data.results[0].id)
  })
  .then(({ data }) => {
    console.log(data.name)
    return axios.get(data.origin.url)
  })
  .then(({ data }) => {
    console.log(data.dimension)
  })
  .catch(error => console.error(error.message))

  

  