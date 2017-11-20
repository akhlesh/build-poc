const path = require('path');

module.exports = {
  entry: {
    //  common: './src/ts-common/src/index.ts',
      angular: './src/angular/src/index.ts',
  },

  externals: {
    'common': 'msui.common',
    '@angular/core': 'ng.core',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                configFile: "tsconfig.json",
                compilerOptions: {
                  declaration: false
                }
            }
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'build/[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'msui.test'
  }
};