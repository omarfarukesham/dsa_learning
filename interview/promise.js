const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating an API request
      success ? resolve('Data received') : reject('Failed to fetch data');
    }, 1000);
  });
  
  fetchData
    .then((data) => {
      console.log(data); // Logs: 'Data received' if successful
    })
    .catch((error) => {
      console.error(error); // Logs: 'Failed to fetch data' if failed
    })
    .finally(() => {
      console.log('Fetch attempt finished'); // Always runs at the end
    });
  