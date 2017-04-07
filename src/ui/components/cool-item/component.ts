import Component, { tracked } from '@glimmer/component';

export default class CoolItem extends Component {
  @tracked state = {
    text: "",
  }

  @tracked("state")
  get emoji() {
    if (this.state.text.length > 0) {
      return "😎";
    } else {
      return "😑";
    }
  }

  didUpdate() {
    let { text } = this.args;

    this.state = {
      ...this.state,
      text
    };
  }
};
