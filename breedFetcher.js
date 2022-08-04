const request = require('request');


// Fetch the breed description from the cats API or return an error.
// The fetBreedDescription function uses request (= asynchronous), therefore it also
// needs to be asynchronous by accepting a callback that will return data.
// The callback is defined in index.js

const fetchBreedDescription = function(breed, callback) {
  
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  
  request(URL, (error, response, body) => {
  
    // If there is an error during the request to the API (ex: URL is compromised),
    // call the callback with an error.
    if (error) {
      callback(error);
      return;
    }
  
    // Connection was successfuly made with the API, we're fetching data
    const data = JSON.parse(body);

    // If the data is empty (ex: the breed given doesn't exist, or no breed was given),
    // call the callback with an error.
    if (!data.length) {
      callback('Breed name not found');
      return;
    }

    // If data was successfully found and fetched,
    // call the callback with null (as there is no error), and the breed description.
    callback(null, data[0].description);
  });

};

module.exports = { fetchBreedDescription };