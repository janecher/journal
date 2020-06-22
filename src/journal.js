export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

function numberOfWords(str) {
  while (str.includes("  "))
  {
      str = str.replace("  ", " ");
  }
  return str.split(" ").length;
}

Entry.prototype.numberOfWordsInBody = function() {
  return numberOfWords(this.body);
}

Entry.prototype.numberOfVowels = function() {
  const vowelArray = 'AEIOUaeiou'.split('');
  let vowels = 0;
  for(let i=0; i<this.body.length; i++) {
    if(vowelArray.includes(this.body.charAt(i))) {
      vowels++;
    }
  }
  return vowels;
}

Entry.prototype.numberOfConsonants = function() {
  const vowelArray = 'AEIOUaeiou'.split('');
  let consonants = 0;
  for(let i=0; i<this.body.length; i++) {
    if(!vowelArray.includes(this.body.charAt(i))) {
      consonants++;
    }
  }
  return consonants;
}

Entry.prototype.getTeaser = function()  {
  let sentence = this.body.split(". ")[0];
  if (numberOfWords(sentence) > 8) {
    while (sentence.includes("  "))
    {
      sentence = sentence.replace("  ", " ");
    }
    return sentence.split(" ").slice(0, 9).join(" ");
  } else {
    return sentence;
  }
}
