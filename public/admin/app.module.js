import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import BlogService from './services/blogServices';
import AppComponent from './app.component';

import BlogModule from './components/blogs/blogs.module';
import AddBlogModule from './components/addBlog/addBlog.module';

import routing from './app.routing';

const AppModule = angular
      .module('admin', [
            BlogModule,
            AddBlogModule,
            uiRouter
      ])
      .component('app', AppComponent)
      .service('BlogService', BlogService)
      .config(routing);