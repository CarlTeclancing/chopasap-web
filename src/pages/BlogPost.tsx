import { useParams, useNavigate } from "react-router";
import { useBlogStore } from "../store/blogStore";
import { COLORS, SOCIAL_LINKS } from "../constants/constants";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const getPostById = useBlogStore((state) => state.getPostById);

  const post = getPostById(Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: COLORS.brown }}
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div
        className="h-96 md:h-[500px] bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${post.image}")`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span
              className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-4 animate-fade-up"
              style={{ backgroundColor: COLORS.brown }}
            >
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up-delay-1">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90 animate-fade-up-delay-2">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="text-gray-800 leading-relaxed"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
          >
            {post.content.split("\n").map((paragraph, index) => {
              // Handle markdown-style headings
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="text-4xl font-bold text-gray-900 mb-6 mt-8"
                  >
                    {paragraph.replace("# ", "")}
                  </h1>
                );
              }
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold text-gray-900 mb-4 mt-8"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-2xl font-bold text-gray-900 mb-3 mt-6"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              // Handle bullet points
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph
                      .replace("- ", "")
                      .split("**")
                      .map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
                      )}
                  </li>
                );
              }
              // Handle italic text in quotes
              if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 pl-4 italic text-gray-700 my-6"
                    style={{ borderColor: COLORS.brown }}
                  >
                    {paragraph.replace(/\*/g, "")}
                  </blockquote>
                );
              }
              // Handle bold text
              if (paragraph.includes("**")) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} style={{ color: COLORS.brown }}>
                          {part}
                        </strong>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Share this article
          </h3>
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:opacity-90 hover:scale-110"
              style={{ backgroundColor: "#1DA1F2" }}
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:opacity-90 hover:scale-110"
              style={{ backgroundColor: "#4267B2" }}
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:opacity-90 hover:scale-110"
              style={{ backgroundColor: "#0077B5" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/blog")}
            className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: COLORS.brown }}
          >
            Read More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
