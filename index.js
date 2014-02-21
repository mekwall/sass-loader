var sass = require('node-sass');

module.exports = function (content) {
    this.cacheable && this.cacheable();
    var callback = this.async();
    var loaderContext = this;

    if (!callback) {
        var compiled;
        try {
            compiled = sass.renderSync({
                file: loaderContext.resource,
                outputStyle: 'compressed'
            });
        }
        catch (e) {
            throw new Error(e);
        }

        return compiled;
    }

    sass.render({
        file: loaderContext.resource,
        outputStyle: 'compressed',
        success: function (css) {
            callback(null, css);
        },
        error: function (error) {
            loaderContext.emitError(error);
            callback(error);
        }
    });
}

module.exports.raw = true;
