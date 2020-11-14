function render(data) {

  // Om du setter opp templaten sånn får du feilkoder i chromes console (inspect tool: console)
  // som er enklere å finne, fordi du får feilen på riktig linje!

  // Feilen var som sagt bruk av backtics, og plusstegn (se originalkoden du sendte for å se forskjellen!)
  var HTML = `<div class="commentBox">
        <div class="left">
            <img src=sushipic/profilepic.png />
        </div>
        <div class="right">
            <span>${data.name}</span>
            <div class="date">${data.date}></div>
            <p>${data.body}</p>
        </div>
        <div class="clear"></div>
    </div>`;

  $(`#container`).append(HTML);
}


$(document).ready(function () {
    
    var comment = [];
    
    if(!localStorage.commentData){
        localStorage.commentData = [];
    }else{
        comment = JSON.parse(localStorage.commentData);
    }


  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  // liten slurvefeil her med punktum bare
  $(`#addKommentar`).click(function () {
    var addObj = {
      "name": $(`#name`).val(),
      "date": $(`#date`).val(),
      "body": $(`#bodyText`).val(),
    };

    comment.push(addObj);
    localStorage.commentData = JSON.stringify(comment);
    render(addObj);
      $(`#name`).val(``),
      $(`#date`).val(`dd/mm/yyyy`),
      $(`#bodyText`).val(``);
  });
  });


