import './styles.css';
import { Entry } from './journal.js';
import $ from 'jquery';

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let inputtedTitle = $("#title").val();
    let inputtedBody = $("#body").val();
    let entry = new Entry(inputtedTitle, inputtedBody);
    let journalEntry = "<li><h4>" + entry.title + "</h4><p>" + entry.body + "</p><p>Words: " + entry.numberOfWordsInBody() + "; Vowels: " + entry.numberOfVowels() + "; Consonants: " + entry.numberOfConsonants() + "</p></li>";
    $("ol").append(journalEntry);
  });
});