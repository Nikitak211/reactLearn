import { useParams,useHistory } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/Blogs/'+ id)
    const history = useHistory()

    const handleDelete = () => {
        fetch('http://localhost:8000/Blogs/' + blog.id, { 
            method: 'DELETE'
        }).then(()=> {
            history.push("/")
        })
    }
    
    return ( 
        <div className="blog-details">
            { isPending && 
            <div className="loader-container">
                <h1>Loading...</h1>
                <div className="loader"></div>
            </div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;