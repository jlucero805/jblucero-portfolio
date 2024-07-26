#!/bin/bash
#docker pull postgres
docker run \
    --name portfolio \
    -e POSTGRES_PASSWORD=password \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=postgres \
    -p 5432:5432 \
    -d postgres
