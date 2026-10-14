const fs = require('fs');
const path = require('path');

// Include the page, favicon, and stylesheet so dist is a complete static site.
class StaticSitePlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('StaticSitePlugin', (compilation) => {
      const files = ['index.html', 'assets/favicon.ico', 'css/style.css'];
      files.forEach((file) => compilation.fileDependencies.add(path.resolve(__dirname, file)));
      compilation.hooks.processAssets.tap(
        { name: 'StaticSitePlugin', stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
        () => {
          const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8')
            .replace('assets/favicon.ico', 'favicon.ico')
            .replace('css/style.css', 'style.css')
            .replace('dist/main.js', 'main.js');
          const assets = {
            'index.html': html,
            'favicon.ico': fs.readFileSync(path.resolve(__dirname, 'assets/favicon.ico')),
            'style.css': fs.readFileSync(path.resolve(__dirname, 'css/style.css'))
          };
          for (const [name, content] of Object.entries(assets)) {
            compilation.emitAsset(name, new compiler.webpack.sources.RawSource(content));
          }
        }
      );
    });
  }
}

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [new StaticSitePlugin()]
};
