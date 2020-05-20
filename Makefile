

up:
	docker-compose up -d

down:
	docker-compose down -v

wait-db:
	docker run --rm --network=rbtt jfisbein/wait-for dynamodb:8000 -q -- echo 'db is up'

wait-api:
	docker run --rm --network=rbtt jfisbein/wait-for api:8181 -q -- echo 'api is up'

wait-all:
	$(MAKE) -j 2 wait-db wait-api

run: up wait-all
	$(MAKE) seed SEED=recipes

seed:
	scripts/seed.sh 
