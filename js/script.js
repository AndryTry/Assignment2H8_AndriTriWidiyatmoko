// const source_nama = document.querySelector("#form_nama");
// const target_nama = document.querySelector("#nama");
// const form_el = document.querySelector("#theForm");

// form_el.style.display = "none";

function submit() {
    // target_nama.innerText = source_nama.value;
    // form_el.style.display = "none";
    $("#name").text($("#f-name").val());
    $("#role").text($("#f-role").val());
    $("#avail").text($("#f-avail").val());
    $("#age").text($("#f-age").val());
    $("#loc").text($("#f-loc").val());
    $("#exp").text($("#f-exp").val());
    $("#email").text($("#f-email").val());

    $('#myform')[0].reset();
    $("#eleform").hide();
  }
 
  
  function hide_form() {
     // target_nama.innerText = source_nama.value;
    // form_el.style.display = "none";
    $("#eleform").hide();
  }

  function show_form() {
    // let form_el = document.querySelector("#theForm");
    // form_el.style.display = "block";
    $("#eleform").show();
  }
  
function edit() {
    $("#f-name").val($("#name").text());
    $("#f-role").val($("#role").text());
    $("#f-avail").val($("#avail").text());
    $("#f-age").val($("#age").text());
    $("#f-loc").val($("#loc").text());
    $("#f-exp").val($("#exp").text());
    $("#f-email").val($("#email").text());

    $("#eleform").show();
}