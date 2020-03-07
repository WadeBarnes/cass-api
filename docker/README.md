# Running the CASS API in Docker

This is the API Docker portion of the CASS appliaction.  The Frontend portion of the application is in the CASS Frontend repository.

See the docker folder of the CASS Frontend repository for details.

## Build
```
Wade@Epoch MINGW64 /c/cass-api/docker (master)
$ ./manage build
```

## Start
```
Wade@Epoch MINGW64 /c/cass-api/docker (master)
$ ./manage start
```

## Restore a backup of the database

Create a `/c/cass-api/docker/tmp` folder if it does not exist.
Place a backup archive in that folder.

### Connect to the running database container
```
Wade@Epoch MINGW64 /c/cass-api/docker (master)
$ winpty docker exec -it cass_postgres_1 bash
```

### Restore the database
```
bash-4.2$ psql -ac "CREATE USER shersched WITH PASSWORD 'n05dmkFjio1GCUVY';"
bash-4.2$ psql -ac "GRANT ALL ON DATABASE ${POSTGRESQL_DATABASE} TO shersched;"
bash-4.2$ gunzip -c /tmp2/postgres-appdb_2020-03-06_13-42-56.sql.gz | psql -v -x -h 127.0.0.1 -d appdb
```

### Test the restore
```
bash-4.2$ psql -d ${POSTGRESQL_DATABASE}
appdb=# select count(*) from shersched.duty;
 count
-------
  3706
(1 row)

appdb=# \q
bash-4.2$ exit
```

## Stop without deleting data
```
Wade@Epoch MINGW64 /c/cass-api/docker (master)
$ ./manage stop
```

## Cleanup / Reset
```
Wade@Epoch MINGW64 /c/cass-api/docker (master)
$ ./manage down
```