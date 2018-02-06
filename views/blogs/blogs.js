const API = 'http://localhost:4100';
const BLOGS_API = '/blogs';

const table = document.querySelector('.table');
const addBlogForm = document.querySelector('.add-blog');
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');
const authorInput = document.getElementById('author');
const addBlogBtn = document.getElementById('add-blog-btn');
const blogContent = document.querySelector('.table tbody');

const createBlog = blog => {
    const item = document.createElement('tr');
    item.innerHTML =
        `<td>${blog.title}</td>
        <td>${blog.text}</td>
        <td>${blog.author}</td>
        <td class="edit">
            <button class="btn btn-success">Edit</button>
        </td>
        <td class="delete">
            <button class="btn btn-danger">Delete</button>
        </td>
    `;

    item.setAttribute('data-id', blog._id)

    return item;
}

const renderBlogs = () => {
    blogContent.innerHTML = '';
    fetch(`${API}${BLOGS_API}`)
    .then(res => res.json())
    .then(blogs => blogs.forEach(blog => renderBlog(blog)));
}

const renderBlog = blog => {
    const item = createBlog(blog);
    blogContent.appendChild(item);
}

const addBlog = () => {
    const blog = {
        author: authorInput.value,
        title: titleInput.value,
        text: textInput.value
    };
    fetch(`${API}${BLOGS_API}`, {
        method: 'POST',
        body: JSON.stringify(blog),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    })
    .then(res => res.json())
    .then((blog) => renderBlog(blog));
    addBlogForm.reset()
}

const deleteBlog = (event) => {
    if (event.target.parentNode.classList.contains('delete')) {
        const parent = event.target.parentNode.parentNode;
        const id = parent.getAttribute('data-id');
        fetch(`${API}${BLOGS_API}/${id}`, {
            method: 'DELETE',
        })
        .then(() =>parent.remove())
    }
}

window.addEventListener('DOMContentLoaded', renderBlogs);
addBlogBtn.addEventListener('click', addBlog);
table.addEventListener('click', deleteBlog);

