import {useState, useEffect} from 'react';
import BlogList from './BlogList';

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

    const [name, setName] = useState('ryan');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('fritz')}>Change Name</button>
            <p>{name}</p>
        </div>
        /*<div className="home">                                                                    Video 12
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'ryan')} title="Ryan's Blogs"/>       |
        </div>

        <div className="home">                        Video 8
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