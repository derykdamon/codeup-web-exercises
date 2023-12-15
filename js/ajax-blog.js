 document.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var blogPosts = JSON.parse(this.responseText);
    var output = '';
    for(var i = 0; i < blogPosts.length; i++) {
    output += '<div class="blog-post">';
    output += '<h2 class="title">' + blogPosts[i].title + '</h2>';
    output += '<p class="date">' + blogPosts[i].date + '</p>';
    output += '<div class="content">' + blogPosts[i].content + '</div>';
    output += '<p class="categories">Categories: ' + blogPosts[i].categories.join(', ') + '</p>';
    output += '</div>';
}
    document.getElementById('posts').innerHTML = output;
}
};
    xhttp.open("GET", "data/blog.json", true);
    xhttp.send();
});
