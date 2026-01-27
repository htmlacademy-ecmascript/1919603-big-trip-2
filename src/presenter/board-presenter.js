import SortView from '../view/sort-view/sort-view.js';
import PointsListView from '../view/event-list-view/event-list-view.js';
import PointView from '../view/event-item-view/event-item-view.js';
import EditFormView from '../view/form-edit-view/form-edit-view.js';
import {render, RenderPosition, replace} from '../framework/render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  pointsListComponent = new PointsListView();

  constructor({ container, pointModel, offerModel, destinationModel }) {
    this.container = container;
    this.pointModel = pointModel;
    this.offerModel = offerModel;
    this.destinationModel = destinationModel;
  }

  init() {
    this.boardPoints = [...this.pointModel.getAllPoints()];
    render(this.sortComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.pointsListComponent, this.container);

    for (let i = 1; i < this.boardPoints.length; i++) {
      this.#renderPoint(this.boardPoints[i]);
    }
  }

  #renderPoint(task) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const taskComponent = new PointView({
      point: task,
      offers: [...this.offerModel.getOfferById(task.type, task.offers)],
      destination: this.destinationModel.getDestinationById(task.destination),
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const taskEditComponent = new EditFormView({
      point: task,
      offers: [...this.offerModel.getOfferById(task.type, task.offers)],
      destination: this.destinationModel.getDestinationById(task.destination),
      checkedOffers: [...this.offerModel.getOfferById(task.type, task.offers)],
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormClose: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(taskEditComponent, taskComponent);
    }

    function replaceFormToCard() {
      replace(taskComponent, taskEditComponent);
    }

    render(taskComponent, this.pointsListComponent.element);
  }
}
