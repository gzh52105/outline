
function formatData({code=200,msg='success',data=[]}={}){
    // let {code=200,msg='success',data=[]} = obj;
    if(code === 400 && msg === 'success'){
        msg = 'fail'
    }
    return {
        code,
        msg,
        data
    }
}

module.exports = {
    formatData
}