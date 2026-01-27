import {render, RenderPosition} from '../framework/render.js';
import HeaderInfoView from '../view/header-info-view/header-info-view.js';
import HeaderFiltersView from '../view/filter-view/filter-view.js';

export default class HeaderPresenter {
  headerInfoComponent = new HeaderInfoView();
  headerFiltersComponent = new HeaderFiltersView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    render(this.headerInfoComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.headerFiltersComponent, this.container);
  }
}
