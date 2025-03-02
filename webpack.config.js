import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configr = {
  mode: "development",
  entry: "./public/js/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public/dist"),
  },
  watch: true,
};

export default configr