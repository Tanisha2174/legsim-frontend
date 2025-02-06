"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // For accessing the slug from the URL
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPostData {
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL
  const [postData, setPostData] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug as string);
    }
  }, [slug]);

  const fetchBlogPost = async (slug: string) => {
    try {
      const response = await fetch(`https://your-api-endpoint.com/api/blogs/${slug}`);
      const data = await response.json();
      setPostData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-2xl font-bold mt-10">Loading...</p>;
  }

  if (!postData) {
    return <p className="text-center text-2xl font-bold mt-10">Post not found.</p>;
  }

  return (
    <main className="bg-[#FFF7EB] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {/* Author and Date */}
          <div className="space-y-1">
            <span className="text-[#AC6604]">{postData.author} • {postData.date}</span>
            <h1 className="text-4xl font-bold text-[#462A03]">
              {postData.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] w-full">
            <img
              src={postData.imageUrl}
              alt={postData.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <article className="prose max-w-none">
            <p className="text-[#6C4104]">
              {postData.content}
            </p>
            
            {/* Add more content sections as needed */}
          </article>
        </div>
      </div>
    </main>
  );
}
