import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescryptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [
    typescryptLoader,
  ]
}