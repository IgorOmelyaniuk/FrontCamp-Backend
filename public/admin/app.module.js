import angular from 'angular';
import AppComponent from './app.component';

const AppModule = angular
      .module('admin', [])
      .component('app', AppComponent)
      // .config(routing)