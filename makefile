deploy:
	npm run build
	rm dist/app.css.map || true
	rm dist/bundle.js.map || true
	cp favicon.ico dist/favicon.ico || true
	git commit -am "build"
	eb deploy
build:
	npm run build
code:
	npm start
