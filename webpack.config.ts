import path from "path";
import webpack from 'webpack';
import {BuildPaths} from "./config/build/types/config";
import {buildWebpackconfig} from "./config/build/buildWebpackconfig";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode = 'development';
const isDev = mode === "development"
const config: webpack.Configuration = buildWebpackconfig({
    mode: 'development',
    paths,
    isDev
})

export default config