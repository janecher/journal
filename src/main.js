import './styles.css';
import { Entry } from './journal.js';

console.log("hello");

/*function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numberOfWords = function() {
  while (this.body.includes("  "))
  {
      this.body = this.this.body.replace("  ", " ");
  }
  return this.body.split(" ").length;
};

Entry.prototype.numberOfVowels = function() {
  const vowelArray = 'AEIOUaeiou'.split('');
  let vowels = 0;
  for(let i=0; i<this.body.length; i++) {
    if(vowelArray.includes(this.body.charAt(i))) {
      vowels++;
    }
  }
  return vowels;
};*/