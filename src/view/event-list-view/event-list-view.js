import { createListTemplate } from './event-list-template.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class PointsListView extends AbstractView {

  get template() {
    return createListTemplate();
  }
}
