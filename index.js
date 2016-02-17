function BrowserSyncReloaderPlugin(options) {
    options = options || {};

    if(!options.browserSync)
        throw new Error("'options.browserSync' must be defined...")

    this.browserSync = options.browserSync;
}

BrowserSyncReloaderPlugin.prototype.apply = function(compiler) {
    var self = this;

    compiler.plugin('done', function (stats) {
        self.browserSync.reload();
    })
}

module.exports = BrowserSyncReloaderPlugin;