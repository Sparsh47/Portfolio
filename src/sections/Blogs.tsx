"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllPosts} from "@/lib/hashnode";
import BlogCard from "@/components/BlogCard";
import {Blog} from "@/types/blogs";

export default function Blogs() {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        (async ()=>{
            const data = await getAllPosts(4);

            setBlogs(data);
        })();
    }, []);

    return (
        <section className="w-full min-h-screen bg-background flex flex-col items-center justify-center p-5 py-16">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center text-white gap-8">
                <div className="text-center section-heading">
                    <h2 className="text-5xl">My Blogs</h2>
                    <p className="w-full my-4 max-w-md text-center">
                        Thoughts and technical deep-dives that fuel my work and curiosity.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {blogs.length > 0 && blogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>

                <Link href="/blogs" className="py-2 px-6 font-bold rounded-full border-[1px] border-accent text-accent">All Blogs</Link>
            </div>
        </section>
    )
}