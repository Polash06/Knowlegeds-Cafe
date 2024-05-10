import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
console.log(blogs)
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 mx-16">
      <h2 className="text-4xl font-medium">Blogs : {blogs.length}</h2>

      {
        blogs.map( item => <Blog key={item.id} item={item}></Blog>)
      }
    </div>
  );
};

export default Blogs;
