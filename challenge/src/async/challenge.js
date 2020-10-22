const axios = require('axios')

const { api } = require('../../config')

async function fetchData (api_url) {
 try {
  const { data } = await axios.get(api_url)
  const { data: character } = await axios.get(api_url + data.results[0].id)
  const { data: origin } = await axios.get(character.origin.url)
 
  console.log(data.info.count)
  console.log(character.name)
  console.log(origin.dimension)
 } catch (error) {
   console.error(error.message)
 }
}

fetchData(api)
