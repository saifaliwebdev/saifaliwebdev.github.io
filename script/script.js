// typing animation head

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  // var css = document.createElement("style");
  // css.type = "text/css";
  // css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  // document.body.appendChild(css);
};


// The target div is in the viewport!

function myFunction() {
  //   services typing animaction

  var i1 = 0;
  var txt1 = '_web designer';
  var speed1 = 50;

  function services1typeWriter() {
    // Add your code here to perform actions when the div is in the viewport

    if (i1 < txt1.length) {
      document.getElementById("services1animaction").innerHTML += txt1.charAt(i1);
      i1++;
      setTimeout(services1typeWriter, speed1);
    }
  }
  services1typeWriter()

  var i2 = 0;
  var txt2 = '_front-end developer';
  var speed2 = 50;

  function services2typeWriter() {
    if (i2 < txt2.length) {
      document.getElementById("services2animaction").innerHTML += txt2.charAt(i2);
      i2++;
      setTimeout(services2typeWriter, speed2);
    }
  }
  services2typeWriter()

  var i3 = 0;
  var txt3 = '_full-stack engineer';
  var speed3 = 50;

  function services3typeWriter() {
    if (i3 < txt3.length) {
      document.getElementById("services3animaction").innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(services3typeWriter, speed3);
    }
  }
  services3typeWriter()
  // Add your code here to perform actions when the div is in the viewport


}

// Options for the Intersection Observer
let options = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.5, // Trigger when 50% of the target is visible
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Call the function when the div is in the viewport
      myFunction();
      // Stop observing after the first intersection if needed
      observer.unobserve(entry.target);
    }
  });
}, options);

// Observe the target div
const services = document.getElementById('services');
observer.observe(services);


// responsiv nav bar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const navitem = document.getElementsByClassName('nav-item')


// function navitemremove(){

//   navMenu.style.display="none";
// }

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// end responsiv nav bar


// type array


function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 10,
    tempTypeSpeed = 0;

  var type = function () {

    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      }
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      writingTag = false;
      if (tagOpen) {
        var newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }

  };

  return {
    type: type
  };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

// end type array


