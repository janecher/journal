import { Entry } from './journal.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let inputtedTitle = $("#title").val();
    let inputtedBody = $("#body").val();
    let entry = new Entry(inputtedTitle, inputtedBody);
    let journalEntry = "<li><h4>" + entry.title + "</h4><p>" + entry.body + "</p><p>Words: " + entry.numberOfWordsInBody() + 
    "; Vowels: " + entry.numberOfVowels() + "; Consonants: " + entry.numberOfConsonants() + "</p><p>Teaser: " + entry.getTeaser() + "</p></li>";
    $("ol").append(journalEntry);
  });
});