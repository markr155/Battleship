import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    mode: "development",
    entry: {
      main: "./src/index.js",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    devtool: 'inline-source-map',
    devServer: {
      watchFiles: ["src/*.html"],
      hot: true,
      port: 3000,
      devMiddleware: {
        publicPath: "/dist/", // Specify the public path for the bundled files in devMiddleware
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
];
