import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './containers/App'
import BlogList from './components/BlogList'
import AddBlogForm from './components/AddBlogForm'
import './styles.css'


render(
  <BrowserRouter>
    <div>

        <Route path='/blogs/add' component={BlogList} />
        <Route path='/' component={BlogList} />

    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
