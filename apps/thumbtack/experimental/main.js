/* Utility */

/**
 * An assignment.
 */
class Assignment {
    /**
     * Creates a new `Assignment`.
     * @param {*} name the name of the assignment
     * @param {*} course the course it's from
     * @param {*} progress progress represented as "x/y z" where x/y is a fraction, and z is a unit
     * @param {*} worth the amount of points it's worth
     * @param {*} deadline the date by which this assignment is to be done
     */
    constructor(name, course, progress, worth, deadline) {
        this.name = name;
        this.course = course;
        this.progress = progress;
        this.worth = worth;
        this.deadline = deadline;
    }
}

/**
 * Saves the current assignment array to storage.
 */
function saveAssignments() {
    try {
        localStorage.setItem("assignments", JSON.stringify(assignments));
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        alert(`Error: ${errorMessage}`);
    }
}

/* Example navbar; refactor to needs
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/

/* ------- */



/* Runtime */

// Set up autosave before unloading the page.
window.addEventListener("beforeunload", () => saveAssignments());

/**
 * The assignments array.
 * @type Assignment[]
 */
let assignments = JSON.parse(localStorage.getItem("assignments"));

/* ------- */