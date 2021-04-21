import {useState} from 'react';

const Home = () => {
    /*let name = 'ryan';                                Video 8
    const [name, setName] = useState('ryan');           
    const [age, setAge] = useState(22);                 

    const handleClick = ()  =>{                         
        setName('fritz');                               
        setAge(25)                                          
    }                                                      |
    const handleClick = ()  =>{                         Video 7     
        console.log('hello, ryan');
    }

    const handleClick2 = (name) => {              
        console.log('hello ' + name);                       |
    }*/ 

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'ryan', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'fritz', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ryan', id: 3},
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
        /*<div className="home">                        Video 8
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>                                              |
        <div className="home">                         Video 7
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>            
            <button onClick={() => handleClick2('fritz')}>Click me 2</button> 
        </div> */
     );
}
 
export default Home;