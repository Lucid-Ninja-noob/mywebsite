function readMore(postId) {
    var post = document.getElementById(postId);
    if (post.style.display === "block") {
        post.style.display = "none";
    } else {
        post.style.display = "block";
    }
}
