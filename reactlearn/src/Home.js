import BlogList from "./BlogList"
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/Blogs')
    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && 
            <div className="loader-container">
                <h1>Loading...</h1>
                <div className="loader"></div>
            </div>
             }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
     );
}
 
export default Home;