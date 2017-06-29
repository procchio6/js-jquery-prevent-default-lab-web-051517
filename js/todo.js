$(document).ready(function(){
  $("form").submit(submitForm)
});

function submitForm(e) {
  e.preventDefault()
  let userInput = $("#item").val()
  let listItem = `<li>${userInput}</li>`
  $("#list ol").append(listItem)
  $("#item").val('')
}
