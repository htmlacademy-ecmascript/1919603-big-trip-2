import PointCreateView from './view/create-points-form-view.js';
import FilterView from './view/points-filters-view.js';
import {render} from './render.js';
import TripsPresenter from './presenter/trips-presenter.js';

const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripMainElement = document.querySelector('.trip-main');
const tripEventsElement = document.querySelector('.trip-events');
const tripsPresenter = new TripsPresenter({container: tripEventsElement});

render(new PointCreateView(), tripMainElement);
render(new FilterView(), tripFiltersElement);

tripsPresenter.init();
