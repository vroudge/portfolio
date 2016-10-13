deploy:
	make build
	eb deploy
build:
	npm run build
	cp favicon.ico dist/favicon.ico || true
code:
	npm start
