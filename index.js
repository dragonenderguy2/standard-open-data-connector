const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url, { timeout: 5000 });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}: ${error}`);
        throw error;
    }
}

module.exports = { fetchData };