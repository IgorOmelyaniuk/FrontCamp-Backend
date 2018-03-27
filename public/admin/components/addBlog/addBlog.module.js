import angular from 'angular';
import ngMessages from 'angular-messages';

import AddBlogComponent from './addBlog.component';
import lengthValidator from '../../validators/form.validator';

const AddBlogModule = angular
  .module('app.add', [ngMessages])
  .component('add', AddBlogComponent)
  .directive('lengthValidator', lengthValidator)
  .name;

export default AddBlogModule;