// --------------------------------------DOM Elements

const landing = document.getElementById("landing");
const boxes = document.getElementById("boxes");
const nav = document.getElementById("nav");

// --------------------------------------Waypoints

const firstWaypoint = new Waypoint({
  element: landing,
  handler: function(direction) {}
});
const secondWaypoint = new Waypoint({
  element: boxes,
  handler: function() {
    boxes.classList.add("fadeIn");
  }
});

const navWaypoint = new Waypoint({
  element: nav,
  handler: function(direction) {
    if (direction === "down") {
      nav.classList.add("sticky");
      nav.classList.remove("nav");
    } else if (direction === "up") {
      nav.classList.remove("sticky");
      nav.classList.add("nav");
    }
  }
});
