#!/bin/bash

if [ -z "$SEED" ]; then
      echo "SEED is required"
	  exit 1
fi

docker run -it --rm \
--network rbtt \
-w /usr/app/seed  \
-v $(pwd)/scripts/seed:/usr/app/seed \
-v $(pwd)/mocks/data:/usr/app/seed/data \
-v  ~/.aws:/root/.aws \
-e SEED=$SEED \
node:alpine\
 sh -c 'npm install && node seed.js'