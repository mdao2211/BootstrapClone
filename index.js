document.addEventListener("DOMContentLoaded", function () {
  var accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var collapse = button
        .closest(".accordion-item")
        .querySelector(".accordion-collapse");

      if (collapse.classList.contains("show")) {
        collapse.classList.remove("show");
        button.classList.remove("active");
        button.classList.add("collapsed");
      } else {
        // Close all other accordion items
        var allCollapses = document.querySelectorAll(".accordion-collapse");
        var allButtons = document.querySelectorAll(".accordion-button");

        allCollapses.forEach(function (otherCollapse) {
          otherCollapse.classList.remove("show");
        });

        allButtons.forEach(function (otherButton) {
          otherButton.classList.remove("active");
          otherButton.classList.add("collapsed");
        });

        // Open the clicked accordion item
        collapse.classList.add("show");
        button.classList.add("active");
        button.classList.remove("collapsed");
      }
    });
  });
});

// With controls
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    prevSlide();
  }
  if (event.key === "ArrowRight") {
    nextSlide();
  }
});

// Automatically show the first slide
showSlide(currentIndex);

// Automatically change slide every 2 seconds
setInterval(nextSlide, 3000);

//Nav tab
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});

// Modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.getElementsByClassName("close")[0];
  const btnCloseArray = document.getElementsByClassName("btnClose");

  btn.onclick = function () {
    modal.style.display = "block";
    document.querySelector(".navtab").style.filter = "blur(5px)";
  };

  for (let i = 0; i < btnCloseArray.length; i++) {
    btnCloseArray[i].onclick = function () {
      modal.style.display = "none";
      document.querySelector(".navtab").style.filter = "none";
    };
  }

  span.onclick = function () {
    modal.style.display = "none";
    document.querySelector(".navtab").style.filter = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector(".navtab").style.filter = "none";
    }
  };
});
