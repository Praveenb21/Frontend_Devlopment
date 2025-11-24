class User {
  constructor(name, rating = 5) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicleMake, vehicleNumber) {
    super(name, rating);
    this.vehicleMake = vehicleMake;
    this.vehicleNumber = vehicleNumber;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distanceKm) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distanceKm = distanceKm;
  }

  calculateFare() {
    if (this.distanceKm === undefined || this.distanceKm < 0) {
      throw new Error("Invalid distance");
    }
    return 50 + this.distanceKm * 12;
  }
}

const driver = new Driver("Vikram", 4.8, "Toyota", "UP32AB1234");
const trip = new Trip("A", "B", 10);

console.log(trip.calculateFare());
