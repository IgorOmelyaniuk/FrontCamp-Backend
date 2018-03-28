import template from './addBlog.html';

const AddBlogComponent = {
  template,
  controller: class AddBlogPage {
    constructor(BlogService, $scope, $state) {
      'ngInject';
      this.BlogService = BlogService;
      this.scope = $scope;
      this.$state = $state;
      this.submitType = 'Create';
      this.submitHandler = this.submitHandler.bind(this);
    }

    $onInit() {
      this.blog = {
        author: '',
        title: '',
        text: ''
      }
    }

    submitHandler(blog) {
      this.BlogService.addBlog(blog);
      this.$state.go('blogs');
    }
  }
}

export default AddBlogComponent;