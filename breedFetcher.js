const request = require('request');

// const fetchBreedDescription = function(breedName, callback) {

//   const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
//   request(url, (body) => {
//    console.log(body);
//    console.log(typeof body);
//   })

//     if (error) {
//       callback(`Failed to request details: ${error}`,null);
//     }

//     const data = JSON.parse(body);
//     // console.log(data);

//     const breed = data[0];
//     if (breed) {
//       callback(null,breed.description);
//     } else {
//       callback(`Failed to find breed ${breedName}`,null);
//     }
//   });

// };

// module.exports = { fetchBreedDescription };



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
   request(url, (body) => {
    console.log(body);
  //  console.log(typeof body);
   })
};



module.exports = { fetchBreedDescription };