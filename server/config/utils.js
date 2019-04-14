const path = require('path');
const fs = require('fs');

/**
 * BASE64转PNG同时保存
 * @param {*} base64 
 * @param {*} cb 
 */
function base64ToPNG(base64, cb) {
    let currentDate = new Date();
    let filePath = `${path.resolve(__dirname, '..')}/capture/${currentDate.getTime()}.png`;

    console.log(filePath);

    base64 = base64.replace(/^data:image\/\w+;base64,/, '');//去掉图片base64码前面部分data:image/png;base64
    let dataBuffer = Buffer.from(base64, 'base64'); //把base64码转成buffer对象

    fs.writeFile(filePath, dataBuffer, function(err){//用fs写入文件
        if (err) {
            console.log(err);
            cb('');
        } else {
            cb(`/capture/${currentDate.getTime()}.png`);
        }
    });
};

module.exports = {
    base64ToPNG
};