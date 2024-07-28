
function Post({ id, title, body }) {
    return (
        <div>
            <div key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Post;