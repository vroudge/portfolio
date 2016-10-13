deploy:
	make build
	eb deploy
build:
	npm run build
code:
	npm start
