import template from './editBlog.html';

const EditBlogComponent = {
  bindings: {
    blog: '<'
  },
  template,
  controller: class EditBlogPage {
    constructor(BlogService, $scope, $state) {
      'ngInject';
      this.BlogService = BlogService;
      this.scope = $scope;
      this.$state = $state;
      this.submitType = 'Update';
      this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(blog) {
      this.BlogService.updateBlog(blog);
      this.$state.go('blogs');
    }
  }
}

export default EditBlogComponent;