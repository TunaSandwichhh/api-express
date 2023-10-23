# davide-faggionato-repo

Creazione di due microservizi per la gestione di camere e prenotazioni di un albergo

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/TunaSandwichhh/davide-faggionato-repo.git
```

### 2. Install Dependencies

Navigate to your project directory and run the following:

```bash
npm install mongodb
npm install ksuid
npm install joi
npm install express
```

## Script Descriptions

#### - npm run setup:

this script starts both the docker container and the server listening on local port.

#### - npm run teardown:

this script effectively tears down the docker container

#### NOTE: Make sure Docker is up and running before running the 'setup' script

## API Endpoints

#### - GET rooms/:id

Returns the room with the specified ID if it exists

#### - POST rooms/

Creates a new room and saves it in the database

#### - GET bookings/:id

Returns the booking with the specified ID if it exists

#### - POST bookings/

Creates a new booking and saves it in the database

## Architecture

### server.ts

App entry point.

When using "/rooms" endpoint, the app will connect to the Room-API index

When using "/bookings" endpoin, the app will connect to the Booking-API index

### index.ts

App redirector.

When making a POST request, index will validate input data via middleware, then call the appropriate creation function.

When making a GET request, index will call the appropriate retrieval function.

### Functions

- #### createBooking

  Connects to the database

  Checks whether another room with same roomId and booking date exists

  If so, returns the appropriate error (409) in a JSON

  Otherwise, inserts record into database

- #### getBooking

  Connects to the database

  Retrieves existing record from the database if it exists

  Returns the appropriate error (404) otherwise

- #### createRoom

  Connects to the database

  Inserts record into database

- #### getRoom

  Connects to the database

  Retrieves existing record from the database if it exists

  Returns the appropriate error (404) otherwise
