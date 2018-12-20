function myFunction() {
    document.getElementById("vervolgtekst").style.visibility = "visible";
    document.getElementById("leesmeer").style.visibility= "hidden";
}


$(document).ready(function(){
  $("#close").click(function(){
    $("#vervolgtekst").hide(300);
  });
  $("#close").click(function(){
    $("#leesmeer").show(300);
  });
});


/*einde leesmeer inleiding*/


/*begin oorzaken*/
$(document).ready(function(){
  $("#zoen").mouseenter(function(){
    $("p.meertekst1").show(300);
  });
  $("#zoen").mouseleave(function(){
    $("p.meertekst1").hide(300);
  });
});

$(document).ready(function(){
  $("#zak").mouseenter(function(){
    $("p.meertekst2").show(300);
  });
  $("#zak").mouseleave(function(){
    $("p.meertekst2").hide(300);
  });
});

$(document).ready(function(){
  $("#pyjama").mouseenter(function(){
    $("p.meertekst3").show(300);
  });
  $("#pyjama").mouseleave(function(){
    $("p.meertekst3").hide(300);
  });
});

$(document).ready(function(){
  $("#uitnodiging").mouseenter(function(){
    $("p.meertekst4").show(300);
  });
  $("#uitnodiging").mouseenter(function(){
    $("p.meertekst4").display(inline);
  });
  $("#uitnodiging").mouseleave(function(){
    $("p.meertekst4").hide(300);
  });
});


$(document).ready(function(){
  $("#chocolade").mouseenter(function(){
    $("p.meertekst5").show(300);
  });
  $("#chocolade").mouseenter(function(){
    $("p.meertekst5").display(inline);
  });
  $("#chocolade").mouseleave(function(){
    $("p.meertekst5").hide(300);
  });
});

$(document).ready(function(){
  $("#mandje").mouseenter(function(){
    $("p.meertekst6").show(300);
  });
  $("#mandje").mouseenter(function(){
    $("p.meertekst6").display(inline);
  });
  $("#mandje").mouseleave(function(){
    $("p.meertekst6").hide(300);
  });
});

/*einde oorzaken*/

/*begin zelfhulpgroep uitleg*/

$(document).ready(function(){
  $("#zelfhulpgroepbutton").mouseenter(function(){
    $(".verborgenuitleg").show(300);
  });
  $("#zelfhulpgroepbutton").mouseleave(function(){
    $(".verborgenuitleg").hide(300);
  });
});

/*einde zelfhulpgroep uitleg*/

/*bedanking inschrijving*/
$(document).ready(function(){
  $("#inschrijven").click(function(){
    $(".bedankt").show(300);
  });
});