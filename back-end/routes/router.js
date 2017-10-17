let express = require('express');
let router = express.Router();
let user=require('../controls/user')

let path = '/api';

//示例，访问路径http://localhost:9999/api/user/list


// user
router.get(path+'/user/list', user.fetchAll);
router.get(path+'/user/logout', user.logout);
router.get(path+'/user/auto-login', user.autoLogin); // 自动登录

router.post(path+'/user/add', user.addOne);
router.post(path+'/user/delete', user.deleteOne);
router.post(path+'userDeleteMulti', user.deleteMulti);
router.post(path+'/user/login', user.login); // 登录
router.post(path+'/user/change-role', user.controlVisit, user.changeRole); // 更改权限

module.exports = router;