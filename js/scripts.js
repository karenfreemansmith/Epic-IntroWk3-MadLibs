$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    var answers = ["person1", "person2", "animal", "exclamation", "verb", "noun"]
    answers.forEach(function(answer) {
      var userInput = $("input#" + answer).val();
      $("." + answer).text(userInput);
    });
    $("#story").show();
    event.preventDefault();
  });
});
