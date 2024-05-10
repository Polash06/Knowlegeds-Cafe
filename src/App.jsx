
import Blogs from "./componets/Blogs/Blogs"
import Bokmark from "./componets/Bokmark/Bokmark"
import Navber from "./componets/Navber/Navber"

function App() {
 

  return (
    <>
     
     <div className="mt-3 mx-16">
     <Navber></Navber>
     <hr></hr>
     </div>
     <div className="md:flex">
     <Blogs></Blogs>
      <Bokmark></Bokmark>
     </div>
      
    </>
  )
}

export default App
