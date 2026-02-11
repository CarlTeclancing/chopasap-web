import { useNavigate } from "react-router";
import { COLORS } from "../constants/constants";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  image,
  readTime,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div
        className="h-48 overflow-hidden cursor-pointer"
        onClick={() => navigate(`/blog/${id}`)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-3">
          <span
            className="px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: COLORS.brown }}
          >
            {category}
          </span>
          <span className="text-xs text-gray-600">{readTime}</span>
        </div>
        <h3
          className="text-lg font-bold text-gray-900 mb-2 leading-snug cursor-pointer hover:opacity-80"
          onClick={() => navigate(`/blog/${id}`)}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-600">{date}</span>
          <button
            onClick={() => navigate(`/blog/${id}`)}
            className="text-sm font-semibold transition-all duration-200 hover:gap-2"
            style={{ color: COLORS.brown }}
          >
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
