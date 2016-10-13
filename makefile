deploy:
	make build
	eb deploy
build:
	npm run build
	git commit -am "build"
code:
	npm start
