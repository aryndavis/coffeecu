Template.parallax.rendered = function () {
  $(document).ready(function(){
    $('.parallax').parallax();
  });
};

Template.parallax.helpers({
  'randomParallaxImage': function () {
    //var images = new Array('lowmorning', 'halalcart', 'grandcentral', 'subway', 'brooklynbridge', 'cityview','almainsnow', 'butler', 'butlerwithalma', 'engineer', 'lion', 'low', 'seas150', 'wallach', 'yule');
    var images = new Array('almainsnow', 'butler', 'butlerwithalma', 'engineer', 'lion', 'low', 'seas150', 'wallach', 'yule');
    var randNum = Math.floor(Math.random() * images.length);
    return images[randNum];
  }
});
