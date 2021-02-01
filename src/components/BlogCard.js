import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const BlogCard = ({ lgWidth, img, name, category }) => {
    return (
        <div className={`blog-card ${lgWidth && "blog-card-full"}`}>
            <img src={img} alt="blog-img" />
            <div className="blog-card-info">
                <div className="blog-card-content">
                    <span className="blog-tag">{category}</span>
                    <h3 className="blog-title">{name}</h3>
                </div>

                <a href="/" className="blog-btn"><FaArrowRight /></a>

            </div>
        </div>
    )
}

export default BlogCard
