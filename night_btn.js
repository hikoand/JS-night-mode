var Links = {
  setColor: function (color) {
    var h1list = document.querySelectorAll("h1");
    var i = 0;
    while (i < h1list.length) {
      h1list[i].style.color = color;
      i = i + 1;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  SetBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.SetBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";
    Links.setColor("yellow");
  } else {
    Body.SetBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";
    Links.setColor("black");
  }
}
