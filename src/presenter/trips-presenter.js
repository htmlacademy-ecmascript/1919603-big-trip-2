import SortView from '../view/points-sort-view.js';
import PointsListView from '../view/points-list-view.js';
import PointInListView from '../view/point-in-list.js';
import PointEditView from '../view/edit-points-form-view.js';
import { render } from '../render.js';

export default class TripsPresenter {
  sortComponent = new SortView();
  pointsListComponent = new PointsListView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.pointsListComponent, this.container);
    render(new PointEditView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointInListView(), this.pointsListComponent.getElement());
    }
  }
}
