
install-api:
	cd api && npm install

install-app:
	cd app && npm install

run-api:
	cd api && npm run start

install: install-api install-app

run: run-api