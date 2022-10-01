
const catchAsync = (req, res, next)=>{
    Promise.resolve(req,res, next).catch((err)=>next(err))

}

export default catchAsync;