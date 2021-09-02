
const Post = (props) => {
    let { post } = props
    return ( 
        <div>
            <h4>Title : {post.title}</h4>
            <h4>Title : {post.body}</h4>
        </div>
    )


}
export default Post