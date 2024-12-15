import BlogList from "./BlogList";
import useFetch from "./useFetch"

function Home() {
  const { data:blogs, isPending, error} = useFetch('http://localhost:8000/blog') 
  return (
    <div className="home"> 
    { error && <div><h4>{ error }</h4></div>}
    {isPending && <div><h1>Loading ...</h1></div>}
      { blogs && <BlogList blogs={blogs} title="all blogs"/> }
    </div>
  );
}

export default Home;
