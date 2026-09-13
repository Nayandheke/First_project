(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Theme toggle, persisted ---- */
  var toggle = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }
  function currentTheme() { return root.getAttribute("data-theme") || "dark"; }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---- Mobile nav ---- */
  var menuBtn = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Active nav link on scroll ---- */
  var sections = ["services", "about", "history", "registry"];
  var navLinks = {};
  document.querySelectorAll(".nav a").forEach(function (a) {
    var id = a.getAttribute("href").replace("#", "");
    navLinks[id] = a;
  });
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navLinks[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(navLinks).forEach(function (k) { navLinks[k].classList.remove("active"); });
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  /* ---- Uptime count up, one orchestrated moment ---- */
  var counter = document.getElementById("uptimeCount");
  if (counter) {
    var target = parseInt(counter.getAttribute("data-target"), 10) || 0;
    if (reduceMotion) {
      counter.textContent = String(target);
    } else {
      var start = null;
      var duration = 900;
      counter.textContent = "0";
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        counter.textContent = String(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
  }

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
