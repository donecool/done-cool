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
    let text = this.state.text;
    if (text.length > 0) {
      let e = "😎";
      if (text.includes('horse')) {
        e = "🐴";
      }
      if (text.includes('chicken')) {
        e = "🐔";
      }
      return e;
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
