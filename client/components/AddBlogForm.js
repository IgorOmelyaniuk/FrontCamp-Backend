import React from 'react'

class AddBlog extends React.Component {

    addBlogHandler = (event) => {
        event.preventDefault()
        const data = {
            title: this.titleInput.value,
            text: this.textInput.value,
            author: this.authorInput.value
        }
        this.props.addBlog(data);
        this.refreshInput(this.titleInput, this.textInput, this.authorInput);
    }

    refreshInput = (...inputs) => {
        inputs.forEach(input => input.value = '');
    }

    render() {
        return (
            <div className="col-3 offset-1 form-wrap">
                <h2>Add Blog</h2>
                <form className="form" onSubmit={this.addBlogHandler}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" ref={title => this.titleInput = title }/>
                    </div>
                    <div className="form-group">
                        <label>Text</label>
                        <input type="text" className="form-control" ref={text => this.textInput = text} />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <input type="text" className="form-control" ref={author => this.authorInput = author} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Post</button>
                </form>
            </div>
        )
    }
}

export default AddBlog