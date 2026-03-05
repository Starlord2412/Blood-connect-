const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};


//  const asyncHandler = (fn) => (req, res, next) => {
//     try{
//         fn(req, res, next);

//     }catch(err){
//         console.log("Error in asyncHandler:", err);
//         next(err);
//     }
// }

export default asyncHandler;