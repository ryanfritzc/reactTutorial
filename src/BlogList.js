const BlogList = ({blogs,title}) => {
//const BlogList = ({blogs,title, handleDelete}) => {       Video 17
    //const BlogList = (props) => {                     Video 11
    //const blogs = props.blogs;
    //const title = props.title;                            |

    return (
        <div className = "blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
    /*return (                                                                          Video 17
        <div className = "blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>                                                                              |
    );*/    
}
 
export default BlogList;
//npx json-server --watch data/db.json --port 8000