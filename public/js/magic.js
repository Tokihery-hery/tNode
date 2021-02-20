

let ajaxTmethod = (method, url, elAfficher, dataForm) => {
  if (method == "POST") {
    $.ajax({
      type: method,
      url: url,
      data: dataForm,
      success: function (data) {
        $(elAfficher).html(data)
      }, error: function (error) {
        console.log(error);
      }
    });
  } else if (method == "GET") {
    $.ajax(
      {
        type: method,
        url: url,
        data:$('body'),
      }).done(function (data) {
        $(elAfficher).html(data)
      }).fail(function (jqXHR, textStatus) {
        alert('Error occurred: ' + textStatus);
      });
  } else if (method == "DELETE") {
    $.ajax(
      {
        type: method,
        url: url,
        data:$('body'),
      }).done(function (data) {
        $(elAfficher).html(data)
      }).fail(function (jqXHR, textStatus) {
       alert(`Error occured ${textStatus}`)

      });
  } else {
    alert("Hollala, what your method??, method " + method + " incorrect,  try methode POST or GET")
  }
}
$(document).ready(() => {
  $('#obj_search').on('change', function () {
    $("a#search").attr({
      href: "/crudmysql/search/" + $('#obj_search').val()
    })
  })
})
let edit =(id)=> {
  let id_edit = id
  let session = localStorage.getItem('id')
  let value_name = $(".name_" + id_edit).text()
  let value_lastname = $(".lastname_" + id_edit).text()
  let value_mail = $(".mail_" + id_edit).text()

  $(".name_" + id_edit).replaceWith("<input type='text' name='name' class='form-control' value='" + value_name + "' id='name_" + id_edit + "'>")
  $(".lastname_" + id_edit).replaceWith("<input type='text' name='lastname' value='" + value_lastname + "' class='form-control' id='lastname_" + id_edit + "'>")
  $(".mail_" + id_edit).replaceWith("<input type='text' name='mail' value='" + value_mail + "' class='form-control' id='mail_" + id_edit + "'>")
  $(".edit_" + id_edit).replaceWith("<button type='submit' id='modif_" + id_edit + "'  class='manova modif edit btn btn-success' onclick='modifieUnseul(" + id_edit + ")'>Modifier</>")
  $(".delete_" + id_edit).replaceWith("")
  localStorage.setItem('id', id)
}

let  alerto =(id)=> {
  let id_edit = typeof id != 'number' ? id : parseInt(id)
  let value_name = $("#name_" + id_edit).val()
  let value_lastname = $("#lastname_" + id_edit).val()
  let value_mail = $("#mail_" + id_edit).val()
  $("#name_" + id_edit).replaceWith("<a href='/crudmysql/profil/" + id_edit + "' class='name_" + id + "'>" + value_name + "</a>")
  $("#lastname_" + id_edit).replaceWith("<a href='/crudmysql/profil/" + id_edit + "' class='lastname_" + id + "'>" + value_lastname + "</a>")
  $("#mail_" + id_edit).replaceWith("<a href='crudmysql/profil/" + id_edit + "' class='mail_" + id + "''>" + value_mail + "</a>")

  $("#modif_" + id_edit).replaceWith("<button id='" + id_edit + "' value='" + id_edit + "' class='btn edit_" + id_edit + " edit btn-success' onclick='edit'" + id_edit + ")'>Edit aka</button></td>")
  $("#annuler_" + id_edit).replaceWith("<a href='crudmysql/delete/" + id_edit + "' class='btn btn-danger delete_" + id_edit + "'>Delete</a>")
}

let modifieUnseul = (id_tr) => {
  $('input#_name').val($(`input#name_${id_tr}`).val())
  $('input#_lastname').val($(`input#lastname_${id_tr}`).val())
  $('input#_mail').val($(`input#mail_${id_tr}`).val())
  $form = $('#formgot')
  ajaxTmethod('POST', '/crudmysql/update/' + id_tr, 'body', $form.serialize())
}


