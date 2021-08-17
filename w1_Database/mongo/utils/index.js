const crypto = require('crypto')

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

// 加密
function encrypt(data,{algo='sha256',output='hex'}={}){
    const hash = crypto.createHash(algo);
    hash.update(data);
    return hash.digest(output)
}

// 解密
function decrypt(){

}

module.exports = {
    formatData,
    encrypt,
    decrypt
}