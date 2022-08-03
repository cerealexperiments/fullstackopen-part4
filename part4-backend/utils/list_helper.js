const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let total = 0;
    blogs.forEach(blog => total += blog.likes);
    return total;
}

const favoriteBlog = (blogs) => {
    let favoriteLikes = 0;
    let favoriteBlog = blogs[0];
    blogs.forEach(blog => {
        if(blog.likes > favoriteLikes) {
            favoriteLikes = blog.likes;
            favoriteBlog = {...blog};
        }
    })
    return favoriteBlog;
}

const mostBlogs = (blogs) => {
    let mostBlogsAuthor = "";
    let mostBlogs = 0;
    let authors = {}
    blogs.forEach(blog => {
        let author = blog.author;
        if(authors[author]) {
            authors[author] += 1
        } else {
            authors[author] = 1;
        }
    })
    for(const [author, blogs] of Object.entries(authors)) {
        if(blogs > mostBlogs) {
            mostBlogs = blogs;
            mostBlogsAuthor = author;
        }
    }
    return {author: mostBlogsAuthor, blogs: mostBlogs}
}

const mostLikes = (blogs) => {
    let mostLikesAuthor = "";
    let mostLikes = 0;
    let authors = {};
    blogs.forEach(blog => {
        let author = blog.author;
        if(authors[author]) {
            authors[author] += blog.likes;
        } else {
            authors[author] = blog.likes
        }
    })
    for(const [author, likes] of Object.entries(authors)) {
        if(likes > mostLikes) {
            mostLikes = likes;
            mostLikesAuthor = author
        }
    }
    return {author: mostLikesAuthor, likes: mostLikes}
}

module.exports = {
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
