deploy:
	rm deploy.zip
	npm i
	npm run build
	zip deploy.zip src dist node_modules styles package.json webpack.config.js
	eb deploy
