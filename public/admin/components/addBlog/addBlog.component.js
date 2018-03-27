import template from './addBlog.html';

const AddBlogComponent = {
  bindings: {
    submitType: '<',
    submitHandler: '<',
    blog: '<'
  },
  template,

  controller: class AddBlogPage {
    constructor(BlogService, $scope, $state) {
      'ngInject';
      this.BlogService = BlogService;
      this.scope = $scope;
      this.$state = $state;
    }

    $onInit() {
      this.blog = {
        author: '',
        title: '',
        text: ''
      }
    }

    showErrors(field) {
      return (field.$dirty || field.$touched);
    };

    submit(addBlog) {
      if (addBlog.$valid) {
        this.BlogService.addBlog(this.blog);
        this.$state.go('blogs');
      }

    }
  }
}

export default AddBlogComponent;