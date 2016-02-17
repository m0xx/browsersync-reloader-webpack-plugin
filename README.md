# browsersync-reloader-webpack-plugin

Reload any instance of `BrowserSync` with your `Webpack` configuration after every compilation. It's also useful to reload `Browsersync` from another place... i.e. from gulp file when stylesheets change.

# Usage

```
var BrowserSyncReloadPlugin = require('browsersync-reloader-webpack-plugin');
var BrowserSync = require('browser-sync');
    
var browserSync = BrowserSync.create();

//webpack config
{
    //...
    plugins: [
        new BrowserSyncReloadPlugin({
            browserSync: browserSync
        })
    ]
}
```