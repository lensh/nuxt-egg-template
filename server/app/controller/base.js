const { Controller } = require('egg');
class BaseController extends Controller {
    /**
     * 请求成功返回数据
     * @param {*} data 
     */
    success(data, message = '成功') {
        this.ctx.body = {
            code: 0,
            data,
            message
        };
    }
    /**
     * 请求失败返回错误消息
     * @param {*} data 
     */
    error(message = '失败', code = -1) {
        this.ctx.body = {
            code,
            message
        }
    }
}
module.exports = BaseController;