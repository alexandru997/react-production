import HTMLWebpackPlugins from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildPlugins({paths}:BuildOptions):webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugins({
            template:paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}