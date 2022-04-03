module.exports = {
  success = function(res, data,message){
    res.json( {
      code : 202,
      data : data,
      message : message
    } )
  },
  error = function(res, message){
    res.json( {
      code : 400,
      message : message
    } )
  }
}
