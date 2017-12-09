$(function() {
  $(".modal-button").click(function() {
    $("#modal-one").hide();
    $("#modal-two").hide();
    $("#modal-three").hide();
    $("#modal-four").hide();
    value = $(this).val();
    $("#modal-" + value).show();
  });
  $(".close-modal").click(function() {
    $("#modal-one").hide();
    $("#modal-two").hide();
    $("#modal-three").hide();
    $("#modal-four").hide();
  });
});
