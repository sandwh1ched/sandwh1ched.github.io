const assignmentForm = document.getElementById("newEditForm");

assignmentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(assignmentForm);
    
    const assignment = new Assignment(
        data.get("name"),
        data.get("course"),
        data.get("progress"),
        data.get("worth"),
        data.get("deadline")
    );
    assignments.push(assignment);
    saveAssignments();

    synchronizeAndRender();

    assignmentForm.reset();
    document.getElementById("newEditDialog").close();
});

function showNewEditDialog() {
    document.getElementById("newEditDialog").showModal();
}

function closeNewEditDialog() {
    document.getElementById("newEditDialog").close();
}
