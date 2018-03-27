import angular from 'angular';
import ngMessages from 'angular-messages';

import AddBlogComponent from './addBlog.component';
import minlength from '../../validators/form.validator';

const AddBlogModule = angular
  .module('app.add', [ngMessages])
  .component('add', AddBlogComponent)
  .directive('minlength', minlength)
  .name;

export default AddBlogModule;