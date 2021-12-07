const posts = [
    { title: "Post One" , body: " This is post one." },
    { title: "Post Two" , body: " This is post Two." }
];

function getPosts() {
    // We use setTimeout to mimic the time taken to fetch data from a server

    setTimeout(() => {
        let output = "";
        posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

//getPosts();

function createPost(post, callback) {
    setTimeout(() => {
    posts.push(post);
    callback();
    }, 2000);
}

createPost({title: "Post three", body: "This is post three."}, getPosts);