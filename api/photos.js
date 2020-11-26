const axios = require("axios");

export default {
  API: 'https://api.unsplash.com',
  API_KEY: 'tc3Uh_PXy8glIKglNTAx7DlHwfR0rBWpCIP0wD4rUh0',

  getPhotos(query = {}) {
    const url = `${this.API}/collections`;
    return axios.get(url, {
      params: {
        client_id: this.API_KEY,
        per_page: 30
      }
    })
  },

  getSearchPhotos(query = {}) {
    const url = `${this.API}/search/collections`;
    return axios.get(url, {
      params: {
        client_id: this.API_KEY,
        query: query.query,
      }
    })
  },

}
