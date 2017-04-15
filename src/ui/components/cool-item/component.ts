import Component, { tracked } from "@glimmer/component";
import AutoEmoji from '../../../utils/auto-emoji';

export default class CoolItem extends Component {
  @tracked emoji: string;
  @tracked newValue: string;

  handleInput(event) {
    let value = event.target.value;
    this.args.handleInput(this.args.index, value);

    this.newValue = value;
    this.emoji = AutoEmoji(this.newValue || '');
  }
}
