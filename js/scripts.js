$(function(){
  $("form#numberPlay").submit(function(event) {
  event.preventDefault();
  var number = parseFloat($("#number").val());
  var endNumber = parseFloat($("#endNumber").val());
  var total = []

    if (number>endNumber){
      alert("Count to number has to be greater than number!");
    } else {
        for(var i=number; i<=endNumber; i+=number){
          total.push(i);
        };
      };
  $("#output").text(total);
  });
});
$(function(){
  $("form#wordPlay").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    console.log(sentence);
    sentence = sentence.replace(/[aeuoi]/gi, "-");
    // for(var i=0;i<=sentence.length; i++){
    //   sentence = sentence.replace("a", "-")
    //   sentence = sentence.replace("e", "-")
    //   sentence = sentence.replace("i", "-")
    //   sentence = sentence.replace("o", "-")
    //   sentence = sentence.replace("u", "-")
      // console.log(sentence);
    // };
    $("#output2").text(sentence);
    $("#sentence").hide();

  });
});
