class BlogService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.blogs = [];
  }

  fetchBlogs() {
    return this.$http.get('http://localhost:4200/api/blogs')
      .then(res => this.blogs = res.data);
  }

  getBlogs() {
    return this.fetchBlogs();
  }

  addBlog(blog) {
    return this.$http.post('http://localhost:4200/api/blogs', blog)
      .then(res => this.blogs.push(res.data));
  }

  getBlogById(id) {
    return this.blogs.find(({ _id }) => _id === id);
  }

  updateBlog(updatedBlog) {
    return this.$http.put(`http://localhost:4200/api/blogs/${updatedBlog._id}`, updatedBlog)
      .then(res => {
        const index = this.blogs.findIndex(blog => blog._id === res.data._id);
        this.blogs.splice(index, 1, updatedBlog);
      })
  }
  
}

export default BlogService;