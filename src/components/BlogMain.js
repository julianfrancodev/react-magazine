import React from 'react'
import SidebarBlog from './SidebarBlog'
import BlogPost from './BlogPost'

export default function BlogMain() {
    return (
        <>
            <main role="main" className="container">
                <div className="row">
                    <div className="col-md-8 blog-main">
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                            From the Firehose
                        </h3>

                            <BlogPost/>
                            <BlogPost/>

                            <nav className="blog-pagination">
                                <a className="btn btn-outline-primary" href="#">Older</a>
                                <a className="btn btn-outline-secondary ml-3" href="#">Newer</a>
                            </nav>

                    </div>
                        {/* SIDEBAR BLOG */}
                       <SidebarBlog/>

                </div>

            </main>
        </>
    )
}
