const API = 'http://localhost:4100';
const BLOGS_API = '/blogs';

const table = document.querySelector('.table');
const blogContent = document.querySelector('.table tbody');

const addBlogForm = document.querySelector('.add-blog');
const addTitleInput = document.getElementById('title');
const addTextInput = document.getElementById('text');
const addAuthorInput = document.getElementById('author');
const addBlogBtn = document.getElementById('add-blog-btn');

const editBlogForm = document.querySelector('.edit-blog');
const editTitleInput = document.getElementById('title-edit');
const editTextInput = document.getElementById('text-edit');
const editAuthorInput = document.getElementById('author-edit');
const blogIdForm = document.getElementById('blog-id');

const editBlogBtn = document.getElementById('edit-blog-btn');

const createBlog = blog => {
    const item = document.createElement('tr');
    item.innerHTML =
        `<td class="blog-id">${blog._id}</td>
        <td class="blog-title">${blog.title}</td>
        <td class="blog-text">${blog.text}</td>
        <td class="blog-author">${blog.author}</td>
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
        author: addAuthorInput.value,
        title: addTitleInput.value,
        text: addTextInput.value
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

const deleteBlog = parent => {
    const id = parent.getAttribute('data-id');
    fetch(`${API}${BLOGS_API}/${id}`, {
        method: 'DELETE',
    })
    .then(() =>parent.remove())
}

const fillEditForm = blog => {
    blogIdForm.value = blog._id;
    editTextInput.value = blog.text;
    editAuthorInput.value = blog.author;
    editTitleInput.value = blog.title
    editBlogBtn.removeAttribute('disabled');
}

const prepareTiEditBlog = parent => {
    const id = parent.getAttribute('data-id');
    fetch(`${API}${BLOGS_API}/${id}`)
    .then(res => res.json())
    .then(blog => fillEditForm(blog));
    editBlogForm.scrollIntoView();
}

const updateBlog = blog => {
    const items = document.querySelectorAll('tbody tr');
    items.forEach(item => {
        if (item.dataset.id === blog._id) {
            item.querySelector('.blog-title').textContent = blog.title;
            item.querySelector('.blog-text').textContent = blog.text; 
            item.querySelector('.blog-author').textContent = blog.author; 
        }
    });
    editBlogBtn.setAttribute("disabled", "disabled");
}

const editBlog = () => {
    const blog = {
        author: editAuthorInput.value,
        title: editTitleInput.value,
        text: editTextInput.value
    };
    const id = blogIdForm.value;
    fetch(`${API}${BLOGS_API}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(blog),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    })
    .then(res => res.json())
    .then((blog) => updateBlog(blog));
    editBlogForm.reset()
}

const clickOnBtn = event => {
    const btn = event.target.parentNode;
    const parent = event.target.parentNode.parentNode;

    if (btn.classList.contains('delete')) {
        deleteBlog(parent);
    }

    if (btn.classList.contains('edit')) {
        prepareTiEditBlog(parent);
    }
};

window.addEventListener('DOMContentLoaded', renderBlogs);
table.addEventListener('click', clickOnBtn);
addBlogBtn.addEventListener('click', addBlog);
editBlogBtn.addEventListener('click', editBlog);