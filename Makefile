API_PORT=8181

install-api:
	cd api && npm install

install-app:
	cd app && npm install

run-api:
	export PORT=$(API_PORT) && cd api && npm run start

run-app:
	export API_PORT=$(API_PORT) && cd app && npm run start

test-api:
	cd api && npm test

test-app:
	cd app && npm test

install: install-api install-app

run:
	make -j run-app run-api

test: test-api test-app