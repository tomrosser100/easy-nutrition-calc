import path from 'path'
import nodeExternals from 'webpack-node-externals'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const mode = 'production'

const frontConfig = {
  target: "web",
  entry: './front/src/index.tsx',
  output: {
    filename: 'bundle-front.js',
    path: path.resolve(__dirname, 'front/dist'),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    meta: {
      viewport:
        "width=device-width, initial-scale=1, minimum-scale=1,shrink-to-fit=no",
    },
    inject: "body",
    template: "./front/src/index.html",
    favicon: "./front/src/favicon.png"
  })]
}

const backConfig = {
  externals: [nodeExternals()],
  externalsPresets: {
    node: true
  },
  entry: './back/src/server.ts',
  output: {
    filename: 'bundle-back.js',
    path: path.resolve(__dirname, 'back/dist'),
    clean: true
  }
}

const common = {
  mode: mode,
  devtool: 'source-map',
  devServer: {
    static: './front/dist'
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '...'],
  }
}

export default [merge(common, frontConfig), merge(common, backConfig)]