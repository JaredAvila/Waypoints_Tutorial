const nav = document.getElementById("nav");
const first = document.getElementById("one");
const second = document.getElementById("two");
const third = document.getElementById("three");

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

const firstWaypoint = new Waypoint({
  element: first,
  handler: function() {
    console.log(this.triggerPoint);
  }
});

const secondWaypoint = new Waypoint({
  element: second,
  handler: function(direction) {
    console.log(this.triggerPoint, direction);
  }
});

const thirdWaypoint = new Waypoint({
  element: third,
  handler: function() {
    console.log(this.triggerPoint);
  },
  offset: 100
});
