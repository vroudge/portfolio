deploy:
	make build
	eb deploy
build:
	npm run build
	cp favicon.ico dist/favicon.ico || true
	cp sitemap.xml dist/sitemap.xml
	rm dist/app.css.map
	rm dist/bundle.js.map
code:
	npm start
