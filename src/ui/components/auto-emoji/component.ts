import Component, { tracked } from '@glimmer/component';
import AutoEmoji from '../../../utils/auto-emoji';

export default class CoolItem extends Component {
  args: {
    text: string
  }

  @tracked state = {
    text: "",
  }

  @tracked("state")
  get emoji() {
    return AutoEmoji(this.state.text);
  }

  didUpdate() {
    this.state = {
      ...this.state,
      text: this.args.text
    };
  }
};
