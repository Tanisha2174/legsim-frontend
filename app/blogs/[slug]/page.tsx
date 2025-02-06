"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPost() {
  return (
    <main className="bg-[#FFF7EB] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {/* Author and Date */}
          <div className="space-y-1">
            <span className="text-[#AC6604]">Rocco Cozza • October 14, 2024</span>
            <h1 className="text-4xl font-bold text-[#462A03]">
              Estate Planning for PA Business Owners | Expert Guide
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] w-full">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
              alt="Estate Planning"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <article className="prose max-w-none">
            <p className="text-[#6C4104]">
              The LEGSIM provides legal representation to small to large enterprises, entrepreneurs, and professionals in diverse industries, as well as professional athletes, musicians, actors, artists, and other professionals in the business, sports, and entertainment industries. The LEGSIM provides legal representation to small to large enterprises, entrepreneurs, and professionals in diverse industries, as well as professional athletes, musicians, actors, artists, and other professionals in the business, sports, and entertainment industries.
            </p>
            
            {/* Add more content sections as needed */}
          </article>
        </div>
      </div>
    </main>
  );
}