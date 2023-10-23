# davide-faggionato-repo

Creazione di due microservizi per la gestione di camere e prenotazioni di un albergo \n\n

## Installation Steps

\n

### 1. Clone the Repository

```bash
git clone https://github.com/TunaSandwichhh/davide-faggionato-repo.git
```

\n

### 2. Install Dependencies

Navigate to your project directory and run the following:

```bash
npm install mongodb
npm install ksuid
npm install joi
npm install express
```

\n\n

## Script Descriptions

\n

#### - npm run setup:

this script starts both the docker container and the server listening on local port.

#### - npm run teardown:

this script effectively tears down the docker container

\n

#### NOTE: Make sure Docker is up and running before running the 'setup' script

\n\n

## API Endpoints

\n

#### - GET rooms/:id

Returns the room with the specified ID if it exists.\n

#### - POST rooms/

Creates a new room and saves it in the database \n

#### - GET bookings/:id

Returns the booking with the specified ID if it exists \n

#### - POST bookings/

Creates a new booking and saves it in the database \n\n

## Architecture

\n

### server.ts

App entry point. \n
When using "/rooms" endpoint, the app will connect to the Room-API index \n
When using "/bookings" endpoin, the app will connect to the Booking-API index \n\n

### index.ts

App redirector. \n
When making a POST request, index will validate input data via middleware, then call the appropriate creation function. \n
When making a GET request, index will call the appropriate retrieval function. \n\n

### Functions

\n

- #### createBooking

  Connects to the database \n
  Checks whether another room with same roomId and booking date exists \n
  If so, returns the appropriate error (409) in a JSON \n
  Otherwise, inserts record into database \n\n

- #### getBooking

  Connects to the database \n
  Retrieves existing record from the database if it exists \n
  Returns the appropriate error (404) otherwise \n\n

- #### createRoom

  Connects to the database \n
  Inserts record into database \n\n

- #### getRoom

  Connects to the database \n
  Retrieves existing record from the database if it exists \n
  Returns the appropriate error (404) otherwise \n
