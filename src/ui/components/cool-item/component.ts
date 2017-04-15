import Component, { tracked } from "@glimmer/component";
import AutoEmoji from '../../../utils/auto-emoji';

export default class CoolItem extends Component {
  @tracked text = "";

  args: {
    text: string;
    onInput: (string) => void;
  };

  constructor({ args: { text } }) {
    super(...arguments);
    this.text = text;
  }

  @tracked("text")
  get emoji() {
    return AutoEmoji(this.text);
  }

  onInput({ target: { value } }) {
    this.args.onInput(value);
    this.text = value;
  }
}
