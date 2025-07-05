function sum(a, b) {
  return a + b;
}
function myFunction(input){
  if(typeof input !== 'number' ){
    throw new Error('Invalid input');
  }
  
}
// Asynchronous function 
function FetchData(callabck){
  setTimeout(() => {
    callabck('peanut butter')
  }, 1000);

}

//Promise-based asynchronous function
function fetchdatapromise(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('peanut butter');
    },1000);
  });
};

// function fetchdatapromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Something went wrong"));
//     }, 1000);
//   });
// }


module.exports = {sum,myFunction, FetchData, fetchdatapromise};