var stylus = require('stylus');
//var stylus = require('grunt-contrib-stylus/node_modules/stylus');

var fs = require('fs');
var str = fs.readFileSync('src.styl', 'utf8');

stylus(str)
	.set({filename: 'src.styl'})
	.define('url', stylus.resolver())
	.set('include css', true)
	.render(function(err, css) {
		if (err) {
			throw err;
		}
	console.log(css);
	fs.writeFileSync('res-node.css', css)
});

