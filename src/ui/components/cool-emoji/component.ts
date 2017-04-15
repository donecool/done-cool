import Component, { tracked } from '@glimmer/component';
import AutoEmoji from '../../../utils/auto-emoji';

export default class CoolEmoji extends Component {
  get emoji() {
    return AutoEmoji(this.args.text || '');
  }
};
