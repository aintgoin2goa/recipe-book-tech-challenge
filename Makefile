
install-api:
	cd api && npm install

install-app:
	cd app && npm install

run-api:
	cd api && npm run start

test-api:
	cd api && npm test

install: install-api install-app

run: run-api

test: test-api