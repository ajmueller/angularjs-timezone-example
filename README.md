# AngularJS Timezone Example #

## Setup ##

1. Clone the repository.
2. Install [Docker Community Edition](https://www.docker.com/community-edition).
3. Start the server with `docker-compose up`.
4. To build the database structures, run `docker container ls` to get the ID of the web container and then run `docker exec -it [ID] sequelize db:migrate` and replace `[ID]` with the ID of your container.

## Disclosure ##

There are a lot of decisions made about this project to keep it simple and therefore not production-ready by any means.  These include not having build processes to bundle the AngularJS app and repetition in the CRUD operations on the server side and client side.  Please don't use this as an example for full application architecture, but purely to learn how to save and display dates in different timezones with AngularJS.
