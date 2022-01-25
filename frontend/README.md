# 架構參考
https://marmelab.com/blog/2015/12/17/react-directory-structure.html


# simple-redux-starter
一個基本的redux架構
有裝redux-thunk,redux,logger,react-router,設定好babel

### 使用 ###

  yarn install 或是 npm install
  npm start
  //127.0.0.1:3000


## karma
ref: https://leozdgao.me/modern-karma/
yarn add -D karma karma-cli karma-mocha karma-webpack karma-sourcemap-l
oader karma-chrome-launcher
yarn add mocha chai  

## 測試 
https://reflect.io/blog/js-testing-mocha-chai-enzyme/

## eslint http://eslint.org/
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-
jsx-a11y
npm install --save-dev babel-eslint
npm install --save-dev eslint-config-airbnb 

## 檢查性能 
ref: http://code.oneapm.com/javascript/2015/07/07/webpack_performance_1/
./node_modules/webpack/bin/webpack.js --display-modules --pro
file --env production

## Issue001: 沒有窄入任何東西，出現：<!-- react-empty: 1 -->
原因：使用了browserHistory
browserHistory 必須有server 才會正確
沒有server 要直接打開index.html請使用 hashHistory

## Issue002: 發現使用 ExtractTextPlugin 把CSS檔案全部壓在同一隻  
CSS會先被加載，如果有改變標籤的屬性，例如：

    img {
      border: 10px solid black;
    }

後來又會被預設的img屬性被蓋掉 

## Issue0003: 一直出現找不到babel-eslint，可是已經裝了 
解：重新打開vs code就可以了