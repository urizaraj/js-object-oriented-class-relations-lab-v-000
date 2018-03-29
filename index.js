let userid = 0
let passengerid = 0
let tripid = 0

const store = {
  drivers: [],
  passengers: [],
  trips: []
}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++userid
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverid === this.id
    })
  }

  passengers() {

  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerid
    store.passengers.push(this)
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripid
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
}
