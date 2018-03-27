import template from './blogs.html';

const BlogsComponent = {
  bindings: {
    blogs: '<'
  },
  template,
  controller: class BlogsPage {
    constructor(BlogService) {
      this.BlogService = BlogService;
    }

    $onInit() {
      this.BlogService.getBlogs().then(data => this.blogs = data);
    }
  }
}

export default BlogsComponent;