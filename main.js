$( document ).ready(function() {
  getQuote();
  $("button").click( getQuote );
});

function getQuote () {
  var randColor = getRandomColor();

  $.ajax({
    url: "https://talaikis.com/api/quotes/random/",
    success: function( quote ){
      $("h1").fadeOut(500, function() {
        $(this)
          .html('<i class="fas fa-quote-left"></i> ' + quote.quote)
          .fadeIn(500);
        $(".fa-quote-left").css("color", colors[randColor]);
      });

      $("h2").fadeOut(500, function() {
        $(this).html("&mdash; " + quote.author).fadeIn(500);
      });
  }});

  $("body").css({
    backgroundColor: colors[randColor], 
    transition: "background-color 1s ease"
  });

  $("button").css({
    borderColor: colors[randColor],
    color: colors[randColor],
    opacity: "1",
    transition:
      "border 1s ease, color 1s ease, box-shadow 1s ease, opacity 2s ease",
  });
};

function getRandomColor () {
  return Math.floor( Math.random() * colors.length );
}

var colors = ["#ff9ff3", "#f368e0", "#00d2d3", "#01a3a4", "#feca57", "#ff9f43",
              "#ff6b6b", "#ee5253", "#5f27cd", "#341f97", "#48dbfb", "#0abde3",
              "#1dd1a1", "#10ac84", "#c8d6e5", "#8395a7"
            ];
