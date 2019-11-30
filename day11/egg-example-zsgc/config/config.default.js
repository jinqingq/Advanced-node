/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574143377171_4876';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

    // 验证防范安全的
    security: {
      csrf: false,
    },
    // mysql链接数据库的
    mysql:{
      client:{
        user:'root',
        password:'root',
        host:'localhost',
        port:'3306',
        database:'test'
      },
      app:true
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
