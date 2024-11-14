// task 1 :
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
    }
  }
  
  // Example usage:
  const values = ['apple', 'banana', 'cherry'];
  iterateWithAsyncAwait(values);
  
  // task 2 : 
  async function functionOne() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function One completed");
  }
  
  async function functionTwo() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function Two completed");
  }
  
  async function functionThree() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function Three completed");
  }
  
  async function chainedAsyncFunctions() {
    await functionOne();
    await functionTwo();
    await functionThree();
  }
  
  // Example usage:
  chainedAsyncFunctions();
  
  // task 3 : 
  async function requests() {
    const requestOne = new Promise(resolve => setTimeout(() => resolve('Response from API 1'), 2000));
    const requestTwo = new Promise(resolve => setTimeout(() => resolve('Response from API 2'), 1000));
  
    try {
      const results = await Promise.all([requestOne, requestTwo]);
      console.log('Both requests completed:');
      console.log(results);
    } catch (error) {
      console.error('Error in concurrent requests:', error);
    }
  }
  
  // Example usage:
 requests();
  