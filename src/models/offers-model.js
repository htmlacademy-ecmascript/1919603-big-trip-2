import { mockOffers } from '../mock/offers.js';

export default class OffersModel {
  #offers = mockOffers;
  getAllOffers() {
    return this.#offers;
  }

  getAllOffersBySpecificType(type) {
    const allOffers = this.getAllOffers();
    return allOffers.find((offer) => offer.type === type);
  }

  getOfferById(type, itemsId) {
    const offersType = this.getAllOffersBySpecificType(type);
    return offersType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}
