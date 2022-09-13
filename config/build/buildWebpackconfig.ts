import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolver} from "./buildResolver";
import {BuildOptions} from "./types/config";
import webpack from "webpack";


export function buildWebpackconfig(options:BuildOptions):webpack.Configuration{
    const {mode, paths}=options
    return{
        mode:mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules:buildLoaders()
        },
        resolve: buildResolver(),
    }
}