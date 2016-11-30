deploy:
	make build
	eb deploy
install:
	@echo "NPM Install"
	npm install
	@echo ""
	@make build
build:
	NODE_ENV=production webpack -p --progress --colors --profile
	cp favicon.ico dist/favicon.ico || true
	cp sitemap.xml dist/sitemap.xml || true
	cp styles/assets/favicon-16x16.png dist/favicon-16x16.png || true
	cp styles/assets/favicon-32x32.png dist/favicon-32x32.png || true
	cp styles/assets/favicon-96x96.png dist/favicon-96x96.png || true
	cp styles/assets/favicon-196x196.png dist/favicon-196x196.png || true
	cp styles/assets/favicon-128.png dist/favicon-128.png || true
	cp styles/assets/apple-touch-icon-72x72.png dist/apple-touch-icon-72x72.png || true
	cp styles/assets/apple-touch-icon-76x76.png dist/apple-touch-icon-76x76.png || true
	cp styles/assets/apple-touch-icon-114x114.png dist/apple-touch-icon-114x114.png || true
	cp styles/assets/apple-touch-icon-120x120.png dist/apple-touch-icon-120x120.png || true
	cp styles/assets/apple-touch-icon-144x144.png dist/apple-touch-icon-144x144.png || true
	cp styles/assets/apple-touch-icon-152x152.png dist/apple-touch-icon-152x152.png || true
	cp styles/assets/mstile-70x70.png dist/mstile-70x70.png || true
	cp styles/assets/mstile-144x144.png dist/mstile-144x144.png || true
	cp styles/assets/mstile-150x150.png dist/mstile-150x150.png || true
	cp styles/assets/mstile-310x150.png dist/mstile-310x150.png || true
	cp styles/assets/mstile-310x310.png dist/mstile-310x310.png || true
	rm dist/app.css.map
	rm dist/bundle.js.map
code:
	NODE_ENV=development node src/server/index.js --progress --colors --profile
code-prod:
	NODE_ENV=production node src/server/index.js --progress --colors --profile
