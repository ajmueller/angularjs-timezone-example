# AngularJS Timezone Example #

## Setup ##

1. Clone the repository.
2. Install [Docker Community Edition](https://www.docker.com/community-edition).
3. Set up a Google Cloud account and [get an API key](https://support.google.com/cloud/answer/6158862?hl=en).  Make sure to enable the Geocoding and Time Zone APIs for the key.
4. Make a .env file in the repository root from the .env.sample file with your Google Cloud API key.
5. Start the server with `docker-compose up`.
6. To build the database structures, run `docker container ls` to get the ID of the web container and then run `docker exec -it [ID] sequelize db:migrate` and replace `[ID]` with the ID of your container.
7. Open http://localhost:3000 in your browser to view the app.

## Disclosure ##

There are a lot of decisions made about this project to keep it simple and therefore not production-ready by any means.  These include not having build processes to bundle the AngularJS app and repetition in the CRUD operations on the server side and client side.  Please don't use this as an example for full application architecture, but purely to learn how to save and display dates in different timezones with AngularJS.
