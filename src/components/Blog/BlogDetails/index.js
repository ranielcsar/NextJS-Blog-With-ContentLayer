import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

const BlogDetails = ({ blog, slug }) => {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">10 Views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${blog.slug[0]}`} className="m-3">
        #{blog.slug[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
