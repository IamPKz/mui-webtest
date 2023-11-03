const logs = require('./logs') 

// Call the logs function and log the data
logs()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
