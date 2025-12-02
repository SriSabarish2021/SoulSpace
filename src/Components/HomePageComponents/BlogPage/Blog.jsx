import '../../../Sass/HomePageSASS/BlogPage/Blog.scss';
import { useRef } from 'react';

import { FaCircleArrowRight } from "react-icons/fa6";

const Blog = () => {

 

  const blogmoveelement=useRef(null)
  const blogmoveX=useRef(0)
  const blogmoveY=useRef(0)

   const MouseMoveEvent=(event)=>{

    
    const elementtargeting=event.currentTarget
    const viewelement=elementtargeting.getBoundingClientRect()

    const totwidht=event.clientX-viewelement.left
    const totheight=event.clientY-viewelement.top

    const offsetX=(totwidht/viewelement.width)*100
    const offsetY=(totheight/viewelement.height)*100

    blogmoveX.current=-offsetX/10
    blogmoveY.current=-offsetY/10

    if (blogmoveelement.current) {
      blogmoveelement.current.style.transform=`translateX(${blogmoveX.current}px) translateY(${blogmoveY.current}px)`
    }

  }
  
  return (
    <div className='blog-main-container' onMouseMove={(e)=>MouseMoveEvent(e)}>
      <div className='blog-container-title-div'>
        <p className='blog-site-name' ref={blogmoveelement} style={{transitionDuration:'0.2s'}}>MindSpires's</p>
        <p className='blog-site-sub-name'>Blog, News & Updates</p>
      </div>
      <div className='blog-container-main-content-div'>
        <div className='blog-news-one-div'>
          <img
              
              src="./psy-blog-2.jpg"
              alt="Student Image"
              className='blog-image-container'
            />
          <div className='blog-content-container'>
            <div className='blog-upload-date'>
               <p>March 20 2023</p>
            </div>
            <div className='blog-news-main-content'>
              <p className='blog-main-cont-para-one'>{`How to Choose the Right Tutoring Match`.slice(0,40)}</p>
              <p className='blog-main-cont-para-two'>{`Learn about Mindspire's personalized tutor-matching process designed to pair students with the best coaches for their unique needs. `.slice(0,80)+'...'}</p>
            </div>
           
          </div>
        </div>
        <div className='blog-news-two-div'>
          <img
            
            src="./psy-img-blog-2.jpg"
            alt="Student Image"
            className='blog-image-container'
            
          />
          <div className='blog-content-container'>
             <div className='blog-upload-date'>
               <p>March 20 2023</p>
            </div>
            <div className='blog-news-main-content'>
              <p className='blog-main-cont-para-one'>{`What Students Should Know for 2025+`.slice(0,40)}</p>
              <p className='blog-main-cont-para-two'>{`Explore the evolving landscape of college admissions, including policy changes, technological advancements, and the growing emphasis on student well-being.`.slice(0,80)+'...'}</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
