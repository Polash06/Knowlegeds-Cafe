/* eslint-disable react/prop-types */
const Blog = ({item}) => {
    console.log(item)
    const {title } = item;
    return (
        <div>
            <h2> Polash :{title}</h2>
        </div>
    );
};

export default Blog;