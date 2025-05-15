import {Blog} from "@/types/blogs";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import {formatDate} from "@/lib/utils";

export default function BlogCard(props: Blog) {

    return (
        <Link href={`https://sparsh-shandilya.hashnode.dev/${props.slug}`} target="_blank" className="w-full flex flex-col items-center justify-center gap-5">
            <Image priority src={props.coverImage.url} alt={props.title} width={500} height={500} className="w-full h-[300px] object-cover rounded-xl" />
            <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-xl line-clamp-2">{props.title}</h3>
                <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between lg:gap-0 gap-1">
                    <p className="text-stone text-stone-300">{formatDate(props.publishedAt)}</p>
                    <div className="flex items-center lg:justify-center gap-2 text-stone-300">
                        <p>{props.readTimeInMinutes} minutes read</p>
                        <span>•</span>
                        <p>{props.views} views</p>
                    </div>
                </div>
                <p className="line-clamp-2 text-stone-300 text-sm">{props.brief}</p>
                <div className="self-start flex items-center justify-center gap-2 text-accent">
                    <p>Read More</p>
                    <FaArrowRightLong size={16} />
                </div>
            </div>
        </Link>
    )
}