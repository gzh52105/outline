const path = require('path')

// 1.x版本配置
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // config: webpack配置
//     // env: 环境变量

//     // 添加别名
//     config.resolve.alias['@'] = path.join(__dirname, './src/')

//     // 添加装饰器支持
//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators",
//         { "legacy": true }
//     ], config);

//     return config;
// }

// 2.x版本配置
const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports,addWebpackAlias} = require('customize-cra');
module.exports = override(
    // 装饰器支持
    addDecoratorsLegacy(),
    
    // 添加别名
    addWebpackAlias({
        '@':path.join(__dirname, './src/')
    }),
    
    // fixBabelImports(
    //     'import',
    //     { libraryName: "antd", style: "css" }
    // )
)