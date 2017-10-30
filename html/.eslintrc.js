module.exports = {
	"extends": [
		"eslint:recommended",
	],
	"env": {
		"es6": true,
		"browser": true,
		"node": true,
		"jquery": true
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"allowImportExportEverywhere": false,
		"codeFrame": false
	},
	rules: {
		'no-console': 'off',
		'no-unused-vars': 'warn'
	},
};