import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import BlogList from './components/BlogList';
import AddBlogForm from './components/AddBlogForm';
import EditBlogForm from './components/EditBlogForm';
import './styles.css'

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/blogs/add' component={AddBlogForm} />
          <Route path='/blogs/:id/edit' component={EditBlogForm} />
          <Route path='/' component={BlogList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
