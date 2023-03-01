export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = selector;
  }

  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  appendItem(element) {
    this._container.append(element);
  }
}