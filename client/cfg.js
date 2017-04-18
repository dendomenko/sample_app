export const noParseTest = /\.min\.js$/;
export const jsLoaderTest = /\.jsx?$/;
export const cssLoaderTest = /\.css$/;
export const scssLoaderTest = /\.scss$/;
export const imagesLoaderTest = /\.(jpe?g|png|gif|svg|ico)$/;
export const fontsLoaderTest = /\.(woff2?|ttf|eot|svg)$/;
export const jsonLoaderTest = /\.json$/;

export const cssLoaderParams = params => (JSON.stringify({modules: true, importLoaders: params.importLoaders, localIdentName: '[name]__[local]__[hash:base64:5]'}));

export const sassLoaderParams = (JSON.stringify({
    includePaths: [process.cwd()]
}));