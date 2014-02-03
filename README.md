# sass loader for webpack

## Usage

Combine with style loader and css loader for best experience.

loaders: [
  { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"}
]

## Limitations

Include paths are a bit crude

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
