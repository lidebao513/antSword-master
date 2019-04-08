/**
 * PHP4 服务端脚本模板
 */
'use strict';

//const Base = require('../base');
const PHP = require('../php/index');

class PHP4 extends PHP {
  /**
   * HTTP请求数据组合函数
   * @param  {Object} data 通过模板解析后的代码对象
   * @return {Promise}     返回一个Promise操作对象
   */
  complete(data) {
    // 分隔符号

    let tag_s = Math.random().toString(16).substr(2, 5); // "->|";
    let tag_e = Math.random().toString(16).substr(2, 5); // "|<-";

    // 组合完整的代码
    let tmpCode = data['_'];
    data['_'] = `@ini_set("display_errors", "0");@set_time_limit(0);echo "${tag_s}";${tmpCode};echo "${tag_e}";die();`;

    // 使用编码器进行处理并返回
    return this.encodeComplete(tag_s, tag_e, data);
  }
}

module.exports = PHP4;
