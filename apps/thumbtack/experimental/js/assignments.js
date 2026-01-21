/**
 * An assignment.
 */
class Assignment {
    /**
     * Creates a new `Assignment`.
     * @param {*} name The name of the assignment.
     * @param {*} course The course it's from.
     * @param {*} progress Progress represented as "x/y z" where x/y is a fraction, and z is a unit (e.g. "4/8 questions").
     * @param {*} worth The amount of points it's worth.
     * @param {*} deadline The date by which this assignment is to be done.
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

/**
 * Synchronizes the `assignments` array with the DOM.
 * Should be called after any changes to the array.
 */
function synchronizeAndRender() {
    const container = document.getElementById("assignments");
    container.innerHTML = "";

    assignments.forEach((assignment, index) => {
        const div = document.createElement("div");
        const name = document.createElement("b");
        const course = document.createElement("i");
        const progress = document.createElement("span");
        const worth = document.createElement("span");
        const deadline = document.createElement("span");
        const removeButton = document.createElement("button");
        const editButton = document.createElement("button");
        div.id = "assignment" + index;
        div.className = "assignment";
        name.innerText = assignment.name;
        course.innerText = assignment.course;
        progress.innerText = assignment.progress;
        worth.innerText = assignment.worth + " points";
        deadline.innerText = "due on " + assignment.deadline;
        // TODO: Implement remove and edit functionality
        removeButton.innerText = "Remove";
        removeButton.className = "removeButton";
        editButton.innerText = "Edit";
        editButton.className = "editButton";
        div.append(name);
        div.append(course);
        div.append(progress);
        div.append(worth);
        div.append(deadline);
        div.append(editButton);
        div.append(removeButton);
        container.append(div);
    });
}

// Set up autosave before unloading the page.
window.addEventListener("beforeunload", () => saveAssignments());

/**
 * The assignments array.
 * @type Assignment[]
 */
let assignments = JSON.parse(localStorage.getItem("assignments")) || [];