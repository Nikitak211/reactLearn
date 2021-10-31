import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs, setBlogs] =  useState([
        {title: 'im a junior', body: "somthing somthing.....", author:"nikita", id:1},
        {title: 'im a senior', body: "somthing somthing.....", author:"leo", id:2},
        {title: 'im the best', body: "somthing somthing.....", author:"nikita", id:3}
    ]);

    const [name, setName] = useState('niktia')
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name)
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('leo')}>Change Name</button>
            <p>{ name }</p>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'nikita')} title="Nikita's Blogs" /> */}
        </div>
     );
}
 
export default Home;