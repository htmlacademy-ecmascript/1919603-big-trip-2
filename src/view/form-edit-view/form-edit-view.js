import { createElement } from '../../render.js';
import { createEditMenuTemplate } from './form-edit-template.js';

export default class EditMenuView {

  getTemplate() {
    return createEditMenuTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
