import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  readTime: string;
}

export default function BlogCard({ title, excerpt, date, category, href, readTime }: BlogCardProps) {
  return (
    <div className="group flex flex-col p-6 rounded-2xl bg-white border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          <Tag className="w-3 h-3" /> {category}
        </span>
        <span className="text-gray-400 text-xs">{readTime} read</span>
      </div>
      <h3 className="text-gray-900 font-bold text-lg mb-3 leading-snug group-hover:text-purple-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Calendar className="w-3 h-3" /> {date}
        </span>
        <Link
          href={href}
          className="flex items-center gap-1 text-purple-600 text-sm font-semibold hover:text-purple-800 group"
        >
          Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
