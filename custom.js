function custommiddle(req,res,next)
{
    console.log('logging..')
    next();
}
module.exports=custommiddle;