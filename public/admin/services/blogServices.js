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
  };
  
}

export default BlogService;