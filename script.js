document.addEventListener("DOMContentLoaded", function() {
    const commentSection = document.querySelector('.comments-section');

    // Example function to add a comment
    function addComment(commentText) {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentSection.appendChild(newComment);
    }

    // Example comment
    addComment("This is a great first post!");
});
