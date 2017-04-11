import Component, { tracked } from "@glimmer/component";

export default class DoneCool extends Component {
  @tracked state = {
    items: [""]
  }

  input(index, { target: { value }}) {
    let items = this.state.items.slice();

    items[index] = value

    if (items.every(i => i.length > 0)) {
      items.push("");
    }

    this.state = {
      ...this.state,
      items
    }
  }
}