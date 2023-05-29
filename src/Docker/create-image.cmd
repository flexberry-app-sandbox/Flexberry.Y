docker build --no-cache -f SQL\Dockerfile.PostgreSql -t y/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t y/app ../..
