import { useNavigate } from "react-router-dom";
import { COLORS } from "../constants/constants";
import { Calendar, User } from "lucide-react";

interface FeaturedBlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  image,
  readTime,
}) => {
  const navigate = useNavigate();

  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        <div
          className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96 cursor-pointer"
          onClick={() => navigate(`/blog/${id}`)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span
              className="px-4 py-2 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: COLORS.brown }}
            >
              {category}
            </span>
            <span className="text-sm text-gray-600 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight cursor-pointer hover:opacity-80"
            onClick={() => navigate(`/blog/${id}`)}
          >
            {title}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {author}
              </span>
              <span>{readTime}</span>
            </div>
            <button
              onClick={() => navigate(`/blog/${id}`)}
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: COLORS.brown }}
            >
              Read Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
