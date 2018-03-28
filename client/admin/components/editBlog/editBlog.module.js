import angular from 'angular';

import EditBlogComponent from './editBlog.component';

const EditBlogModule = angular
  .module('app.edit', [])
  .component('edit', EditBlogComponent)
  .name;

export default EditBlogModule;