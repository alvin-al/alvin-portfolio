import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";

const BlogDashboard: React.FC = () => {
  return (
    <div className=''>
      <div className='border-b-2 flex justify-between pb-4 mb-4'>
        <p className='text-3xl font-semibold text-white'>Blog</p>
        <Link href='/dashboard/write'>
          <Button className='bg-white'>Add Post</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDashboard;
