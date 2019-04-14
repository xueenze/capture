const express = require('express');
const db = require('../config/db');
const utils = require('../config/utils');

const router = express.Router();

router.get('/', (req, res) => {

    db.query('SELECT * FROM comment WHERE status = 1 ORDER BY username DESC', function (err, result){
        if(err){
            console.log('[SQL ERROR]:', err.message);

            res.json({
                data: { code: 0 },
                msg: '数据读取异常'
            });
        } else {
            res.json({
                data: {
                    code: 1,
                    userlist: result
                },
                msg: {}
            });
        }
    });

});

router.post('/comment-post', function(req, res) {

    let data = req.body;

    utils.base64ToPNG(data.capture, function(filePath) {
        if (filePath) {
            let sql = `INSERT INTO comment(username, capturesrc, status) VALUES ('${data.username}', '${filePath}', 1);`;

            db.query(sql, function (err, result){
                if (err) {
                    res.json({
                        data: { code: 0 },
                        msg: '截图保存异常'
                    });

                    console.log('[SQL ERROR]:', err.message);
                } else {
                    res.json({
                        data: { code: 1 },
                        msg: ''
                    });
                }
            });
        } else {
            res.json({
                data: { code: 0 },
                msg: '截图保存异常'
            });
        }
    });
});

module.exports = router;
