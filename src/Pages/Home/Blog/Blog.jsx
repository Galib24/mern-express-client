import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Blog = () => {
    return (
        <section>
            <SectionTitle
                heading='  blog section'
                subHeading="Our Respected CEO, Chief marketing officer and product Manager"
            >

            </SectionTitle>
            <div className='grid md:grid-cols-3 gap-6 mt-20 mb-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/fN2CS0r/Capture.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">CEO</h2>
                        <p>
                            Welcome to our Home Page! At <strong>Mern Express</strong>, we are driven by innovation, collaboration, and trust. Our cutting-edge technologies and exceptional team are dedicated to delivering top-quality solutions. Explore our website to learn more about how we can partner with you to drive success and make a difference.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-extrabold">Marketing Officer</h2>
                        <p>Welcome to our web page, we are dedicated to creating impactful marketing campaigns that resonate with our audience. Through data-driven insights and innovative strategies, we aim to build lasting relationships and deliver an exceptional user experience. Explore our page and discover the difference we can make.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title font-extrabold">Product Manager</h2>
                        <p>As the Product Manager of <strong>Mern Express</strong>, I'm thrilled to present our innovative offerings on this web page. Our team has worked tirelessly to develop products that meet the evolving needs of our customers. We are committed to delivering exceptional value, quality, and user experience. Explore our page and discover the exciting features that make our products stand out from the crowd.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;