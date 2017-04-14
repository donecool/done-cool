import Component, { tracked } from '@glimmer/component';
import AutoEmoji from '../../../utils/auto-emoji';

export default class CoolItem extends Component {
  @tracked("args")
  get emoji() {
    console.log("Calling AutoEmoji");
    return AutoEmoji(this.args.text || '');
  }
};
