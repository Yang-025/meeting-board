20171208 - browserhistory & hashhistory

前端要設定browserhistory或是hashhistory需要動到兩隻檔案
第一支在**src/index.js**

```js
import {
  // HashRouter as Router
  BrowserRouter as Router
} from 'react-router-dom';
```

第二隻在**src/store/index.js**

```js
// import { createHashHistory as createHistory } from 'history';
import { createBrowserHistory as createHistory } from 'history';
```


當我們要使用browserhistory的時候，需要有一個server
比如Django，我們已Django為例來看Django的事定要注意哪些地方

1. static
webpack build的時候要指定public path，比如我們的靜態檔案最後都會放到/`static/yp123`底下，那麼我們就設定 

```js
// webpack.prod.js
class WebpackProdConfig {

  constructor() {
    this.env = 'production';
    process.env.ENV = 'production';
    process.env.NODE_ENV = 'production';
    this.config = {
      entry: {
        // 'babel-polyfill', // 解決ie問題
        bundle: ['babel-polyfill', './src/index.js'],
        vendor: VENDOR_LIBS
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
        // url-loader會把檔案路徑指到publicPath下面
        publicPath: '/static/yp123/',  // django 使用
        filename: 'js/[name].[hash].js'  // [name] : entry的key
      },
  }
}

```

2. urls

我們要把根路徑交給前端，但是又要讓Django吃得到Django自己的url規則，所以這裡有個重點：  要給前端的根路徑要寫在最下面

```
url(r'', TemplateView.as_view(template_name='index.html')),
```



全部設定如下 ： 

```python

from django.conf.urls import include, url
from django.views.generic import TemplateView

urlpatterns = [
    
    url(r'^api/tables/', include("tables.api.urls", namespace='tables-api')),
    # frontend page
    url(r'$', TemplateView.as_view(template_name='index.html')),
]

```