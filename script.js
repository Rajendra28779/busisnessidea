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


function filterList() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const listItems = document.querySelectorAll(".list-item");
    
    listItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.classList.toggle("hidden", !text.includes(input));
    });
  }

  function searchBlogs() {
    const searchTerm = document.getElementById('searchField').value.toLowerCase();
    const blogContents = document.querySelectorAll('.blog-content');

    blogContents.forEach(blog => {
      const textContent = blog.textContent.toLowerCase();
      if (textContent.includes(searchTerm)) {
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  }