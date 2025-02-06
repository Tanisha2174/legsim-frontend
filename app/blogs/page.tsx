"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
  const blogPosts = Array(6).fill({
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80",
    author: "Rocco Cozza",
    date: "October 16, 2024",
    title: "Probate Process in Pennsylvania: What You Need to Know"
  });

  return (
    <main className="bg-[#FFF7EB] min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-[#462A03]">BLOG ARTICLES</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="space-y-4">
                <img
                  src={post.image}
                  alt="Blog post"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <div className="text-sm text-[#6C4104]">
                    By {post.author} • {post.date}
                  </div>
                  <h3 className="font-bold text-[#462A03]">{post.title}</h3>
                  <Button 
                    variant="link"
                    className="text-[#462A03] hover:text-[#6C4104] p-0 flex items-center"
                  >
                    READ MORE <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}