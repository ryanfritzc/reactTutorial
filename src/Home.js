//import {useState, useEffect} from 'react';        Vdieo 24
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    /*const [isPending, setIsPending]= useState(true);                  Video 20
    const [error, setError] =useState(null);                          Video 20
    let name = 'ryan';                                Video 8
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
        console.log('hello ' + name);                       
    }                                                       |

    //const [blogs, setBlogs] = useState(null);                 Video 20
    /*const [blogs, setBlogs] = useState([                                                  Video 17
        {title: 'My new website', body: 'lorem ipsum...', author: 'ryan', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'fritz', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'ryan', id: 3},             
    ]);                                                                                         |

    //const [name, setName] = useState('ryan');             Video 15

    /*const handleDelete = (id) => {                                                Video 17
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);                                                             
    }                                                                                   |

    /*useEffect(() => {                                                            Video 20
        setTimeout(() => {                                                        
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=> {
                setIsPending(false);
                setError(err.message);
            })                                                                          
        }, 1000) 
    },  []);                                                                                |
    useEffect(() => {                                                                   Video 15
        console.log('use effect ran')
        console.log(name)                                                                    |
    }, [name]); */

        /*<div className="home">                                                                    Video 17
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
        </div>                                                                                          |
        <div className="home">                                                                Video 15
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName('fritz')}>Change Name</button>
            <p>{name}</p>                                                                           
        </div>                                                                                    |
        <div className="home">                                                                    Video 12
            <BlogList blogs={blogs} title="All Blogs!"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'ryan')} title="Ryan's Blogs"/>       
        </div>                                                                                          |

        <div className="home">                        Video 8
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>                                              |
        <div className="home">                                                           Video 7
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>            
            <button onClick={() => handleClick2('fritz')}>Click me 2</button>               
        </div> */                                   
     );
}
 
export default Home;