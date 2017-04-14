import emoji from 'emojilib';

const Cool = emoji.lib.sunglasses.char

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function AutoEmoji(text: string) : string {
  let words = text.trim().split(/\s+/);
  let matches = emoji.ordered.filter(function(e) {
    let { keywords } = emoji.lib[e];

    return words.some(w => keywords.some(k => k.includes(w) || w.includes(k)));
  });

  if (text.trim().length === 0 || matches.length === 0) {
    return Cool;
  }

  return emoji.lib[random(matches)].char;
}
