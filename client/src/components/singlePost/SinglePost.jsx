import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress" alt="" className="singlePostImg"/>
          <h1 className="singlePostTitle">Lorem ipsum, dolor sit amet
          <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">Author: <b>Safak</b></span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam perferendis similique expedita labore eaque aliquid blanditiis voluptatem fuga, maxime aspernatur! Sint eveniet consequuntur omnis et atque, minima aspernatur dicta unde?</p>
          
          
          </div>
    </div>
  )
}
