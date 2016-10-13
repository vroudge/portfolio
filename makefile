deploy:
	make build
	eb deploy
build:
	npm run build
	cp favicon.ico dist/favicon.ico || true
	rm dist/app.css.map
	rm dist/bundle.js.map
code:
	npm start
