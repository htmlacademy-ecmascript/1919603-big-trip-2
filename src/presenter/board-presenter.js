import SortView from '../view/sort-view/sort-view.js';
import EventListView from '../view/event-list-view/event-list-view.js';
import PointView from '../view/event-item-view/event-item-view.js';
import CreationMenuView from '../view/form-create-view/form-create-view.js';
import EditMenuView from '../view/form-edit-view/form-edit-view.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();
  creationMenuComponent = new CreationMenuView();
  editMenuComponent = new EditMenuView();

  constructor({ container, pointModel }) {
    this.container = container;
    this.pointModel = pointModel;
  }

  init() {
    this.boardPoints = [...this.pointModel.getPoint()];
    render(this.sortComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.eventListComponent, this.container);
    render(new EditMenuView({
      point: this.boardPoints[0],
      checkedOffers: [...this.pointModel.getOfferById(this.boardPoints[0].type, this.boardPoints[0].offers)],
      offers: this.pointModel.getOfferByType(this.boardPoints[0].type),
      destination: this.pointModel.getDestinationById(this.boardPoints[0].destination)
    }), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView({
        point: this.boardPoints[i],
        offers: [...this.pointModel.getOfferById(this.boardPoints[i].type, this.boardPoints[i].offers)],
        destination: this.pointModel.getDestinationById(this.boardPoints[0].destination)
      }), this.eventListComponent.getElement());
    }

    render(this.creationMenuComponent, this.container);
  }
}
