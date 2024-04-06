import path from 'path'
import nodeExternals from 'webpack-node-externals'
import { fileURLToPath } from 'url'
import { merge } from 'webpack-merge'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const mode = 'development'

const frontConfig = {
  target: "web",
  entry: './front/src/index.tsx',
  output: {
    filename: 'bundle-front.js',
    path: path.resolve(__dirname, 'front/dist'),
    clean: {
      keep: 'index.html'
    }
  }
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '...'],
  }
}

export default [ merge(common, frontConfig), merge(common, backConfig) ]