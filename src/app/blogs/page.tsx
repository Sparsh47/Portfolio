"use client";

import {getAllPosts} from "@/lib/hashnode";
import {useEffect, useState} from "react";
import {Blog} from "@/types/blogs";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function Page() {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        (async ()=>{
            const data = await getAllPosts(10);
            setBlogs(data);
        })();
    }, []);

    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center bg-background py-40 px-10">
                <div className="w-full max-w-7xl flex flex-col items-center justify-center text-white gap-8">
                    <div className="text-center section-heading">
                        <h2 className="text-5xl">All Blogs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {blogs.length > 0 && blogs.map((blog, index) => (
                            <BlogCard key={index} {...blog} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}