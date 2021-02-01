import React from 'react'
import BlogCard from './BlogCard'

//images
import img1 from '../images/blog-img.jpg'
import img2 from '../images/blog-img-2.jpg'
import img3 from '../images/blog-img-3.jpg'
import img4 from '../images/blog-img-4.jpg'
import img5 from '../images/blog-img-5.jpg'

const Blog = () => {

    //dummy data
    const [blogPosts] = React.useState([
        { id: 1, name: "What to Know About Cannabis and Covid-19", category: "MedMen News", img: img1, lgWidth: true },
        { id: 2, name: "Stoned Book Club: 7 Escapist Novels to Read Right Now", category: "Culture", img: img2, lgWidth: true },
        { id: 3, name: "Talking to Night + Market’s Founder", category: "The Spark", img: img3, lgWidth: false },
        { id: 4, name: "What are the Benefits of CBD?", category: "Wellness", img: img4, lgWidth: false },
        { id: 5, name: "Working Out Regularly?", category: "Wellness", img: img5, lgWidth: false }
    ])

    return (
        <section className="blog">
            <div className="my-container">
                <div className="blog-wrapper">
                    <h2 className="h2-heading">Blog</h2><br />
                    <p className="p-text mb90">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo </p>
                    <div className="blog-list">
                        {blogPosts.map(el => (<BlogCard key={el.id} {...el} />))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
