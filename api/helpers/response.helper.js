module.exports = {
  success : function(res, data,message){
    res.json( {
      code : 202,
      data : data,
      message : message
    } )
  },
  error : function(res, message, code = 400 ){
    res.json( {
      code : code,
      message : message
    } )
  }
}
