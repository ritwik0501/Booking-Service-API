 function addLockOnFlights(flightId) {

    return `SELECT * FROM Flights WHERE Flights.id = ${flightId};`
}

module.exports={
    addLockOnFlights
}