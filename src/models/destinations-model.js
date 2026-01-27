import { mockDestinations } from '../mock/destinations.js';

export default class DestinationsModel {
  #destinations = mockDestinations;
  getAllDestinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    const allDestinations = this.getAllDestinations();
    return allDestinations.find((item) => item.id === id);
  }
}
