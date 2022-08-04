
const arg = process.argv;
const breed = arg[2];

const request = require('request');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


request(URL, (error, response, body) => {
  
  if (error) {
    console.log('Error: something went wrong');
  }

  if (!error) {

    if (!breed) {
      console.log('Error: Breed name not found');
    }

    if (breed) {
      const data = JSON.parse(body);
  
      console.log(data[0].description);
    }
  }
  
});