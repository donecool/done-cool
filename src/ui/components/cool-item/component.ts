import Component, { tracked } from '@glimmer/component';

export default class CoolItem extends Component {
  args: {
    text: string
  }

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
    this.state = {
      ...this.state,
      text: this.args.text
    };
  }
};
