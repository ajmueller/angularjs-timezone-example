# AngularJS Timezone Example #

## Setup ##

1. Clone the repository.
2. Install [Docker Community Edition](https://www.docker.com/community-edition).
3. Start the server with `docker-compose up`.
4. To build the database structures, run `docker container ls` to get the ID of the web container and then run `docker exec -it [ID] sequelize db:migrate` and replace `[ID]` with the ID of your container.
