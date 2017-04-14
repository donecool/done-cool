import emojilib from 'emojilib';

const Cool = emojilib.lib.sunglasses.char

function choose(array) {
  return array[0];
}

export default function AutoEmoji(text: string) : string {
  let words = text.trim().split(/\s+/);
  let matches = emojilib.ordered.filter(function(name) {
    let emoji = emojilib.lib[name];

    return words.some(w => name.includes(w) || emoji.keywords.some(k => k.includes(w)));
  });

  if (text.trim().length === 0 || matches.length === 0) {
    return Cool;
  }

  return emojilib.lib[choose(matches)].char;
}
