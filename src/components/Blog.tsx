import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "How to Use Ahrefs for Keyword Research in 2026",
    excerpt: "Master the latest keyword research techniques using Ahrefs Keywords Explorer. Find low-competition keywords in minutes.",
    date: "March 24, 2026",
    author: "Alex Johnson",
    image: "https://picsum.photos/seed/seo-1/800/600",
    slug: "ahrefs-keyword-research-guide",
  },
  {
    title: "The Ultimate Guide to Backlink Audits with Site Explorer",
    excerpt: "Learn how to analyze your competitor's backlink profile and find high-quality link building opportunities.",
    date: "March 20, 2026",
    author: "Sarah Miller",
    image: "https://picsum.photos/seed/seo-2/800/600",
    slug: "backlink-audit-guide",
  },
  {
    title: "Closing the Content Gap: A Step-by-Step SEO Strategy",
    excerpt: "Discover the keywords your competitors rank for but you don't. A complete guide to using the Content Gap tool.",
    date: "March 15, 2026",
    author: "David Chen",
    image: "https://picsum.photos/seed/seo-3/800/600",
    slug: "content-gap-strategy",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="text-left max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-text">
              Latest <span className="text-primary">SEO Tips</span>
            </h2>
            <p className="text-lg font-medium text-muted">
              Stay ahead of the curve with our expert SEO guides and Ahrefs tutorials.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-3 group hover:gap-4 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-surface border border-border overflow-hidden mb-8 relative aspect-[4/3]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-primary" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black uppercase tracking-tighter text-text transition-colors group-hover:text-primary leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-sm font-medium leading-relaxed text-muted line-clamp-2">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary pt-4 group-hover:gap-3 transition-all"
                >
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
