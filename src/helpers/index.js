import * as R from 'ramda';

const maxLengthInSet = set => {
  return R.pipe(
    R.map(R.prop('length')),
    R.reduce(R.max, -Infinity)
  )([...set]);
}

const splitIntoCharacters = (text, ligatures) => {
  if (ligatures.size === 0) {
    return text.split(/\s*/);
  }

  let characters = [];

  const words = text.trim().split(/\s+/);
  const maxLigatureLength = maxLengthInSet(ligatures);

  R.forEach(
    word => {
      let i = 0;

      while (i < word.length) {
        let character;

        for (let j = maxLigatureLength; j >= 1; j--) {
          character = word.slice(i, i + j);
          if (ligatures.has(character) || j === 1) {
            i += j;
            break;
          }
        }

        characters.push(character);
      }
    }
  )(words)

  return characters;
}

const computeCharToCount = (text, ligatures) => {
  let charToCount = {};
  const characters = splitIntoCharacters(text, ligatures);

  R.forEach(
    character => {
      if (charToCount[character]) {
        charToCount[character]++
      } else {
        charToCount[character] = 1
      }
    }
  )(characters);

  return charToCount;
}

export const computeCharCount = (text, ligatures) => {
  return R.length(splitIntoCharacters(text, ligatures));
}

export const computeCharCountArray = (text, ligatures) => {
  const charToCount = computeCharToCount(text, ligatures)
  return R.pipe(
    R.toPairs,
    R.map(([character, count]) => ({ character, count })),
  )(charToCount);
}

// sorting helpers

export const sortByCount = R.sort(R.descend(R.prop('count')));

export const sortByCharacter = (items, ligatures) => {
  const partitionBySets = (items, sets) => {
    return R.reduce(
      (acc, set) => {
        return R.concat(
          R.init(acc),
          R.partition(({ character }) => set.has(character))(R.last(acc))
        )
      },
      [items],
    )(sets)
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const specialPunctuation = '.,';

  // the character sets we will partition by, in this order
  const sets = [
    new Set(alphabet.split('')),               // lower case letters
    ligatures,                                 // ligatures
    new Set(alphabet.toUpperCase().split('')), // upper case letters
    new Set(specialPunctuation.split('')),     // special punctuation
  ]                                            // everything else

  const partitionedItems = partitionBySets(items, sets);

  const sortAlphabetically = R.sort(R.ascend(R.prop('character')));
  return R.pipe(
    R.map(sortAlphabetically),
    R.flatten,
  )(partitionedItems);
}