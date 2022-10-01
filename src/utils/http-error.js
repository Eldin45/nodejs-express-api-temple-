const errorsHandler=(err, req, res, next)=>{

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage
    })


}


export default errorsHandler