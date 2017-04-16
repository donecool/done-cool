import Component, { tracked } from "@glimmer/component";

export default class DoneCool extends Component {
  @tracked state = {
    items: ["horse", "chicken"]
  }

  addItem(value) {
    if (!value || typeof value !== 'string') {
    }
    let items = this.state.items.slice();
    items.push(value);

    this.state = {
      ...this.state,
      items
    }
  }

  onEnter(value) {
    this.addItem(value);
  }

  refactorThis() {
  }

  onInput(index, value) {
    let items = this.state.items.slice();

    items[index] = value;

    this.state = {
      ...this.state,
      items
    }
  }
}
