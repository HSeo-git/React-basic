import { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () => {
      axios.post('http://localhost:3001/posts', {
        title, 
        body
      })
    };
    return(
        <div>
            <h1>Create a blog post</h1>
            <div className="mb-3">
                <lable className="form-lable">Title</lable>
                    <input
                    className="form-control"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    />
            </div>
            <div className="mb-3">
                <lable className="form-lable">Body</lable>
                    <textarea
                    className="form-control"
                    value={body}
                    onChange={(event) => {
                        setBody(event.target.value);
                    }}
                    rows="20"
                    />
            </div>
            <div>
                <button 
                    className="btn btn-primary"
                    onClick={onSubmit}
                >
                    Post
                </button>
            </div>
        </div>
    )
};

export default BlogForm