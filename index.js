let userid = 0
let passengerid = 0
let tripid = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++userid
  }

  trips() {

  }


  passengers() {

  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerid
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripid
    this.driverId = driver.id
    this.passengerId = passenger.id
  }
}
