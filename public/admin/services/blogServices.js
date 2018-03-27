class BlogService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.blogs = [];
  }

  fetchBlogs() {
    return this.$http.get('http://localhost:4200/api/blogs')
      .then(res => {
        this.blogs = res.data;
        return this.blogs;
      })
  }

  getBlogs() {
    return this.fetchBlogs();
  }
}

export default BlogService;