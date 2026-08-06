"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, User, X, BookOpen, Layers, CheckCircle } from "lucide-react";
import Image from "next/image";

// Detailed interface for Blog Post
interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

// Blog post data set relevant to PEB and structural steel engineering
const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "PEB Manufacturer in India: A Beginner’s Guide to Pre-Engineered Buildings",
    category: "PEB Tech",
    summary: "For companies planning expansion or setting up new infrastructure, choosing the right PEB Manufacturer in India has become a strategic decision. Read our beginner's guide to Pre-Engineered Buildings.",
    image: "/images/factory-interior.png",
    date: "August 6, 2026",
    readTime: "6 min read",
    author: "Maruti InfraENG LLP",
    featured: true,
    content: [
      "Walk through any modern industrial zone today and you’ll notice a silent transformation. Warehouses are rising faster, factories look more streamlined, and commercial spaces are becoming more efficient in both design and execution. This shift is not accidental—it reflects a growing preference for smarter construction methods that align with business speed and scalability.",
      "At the center of this evolution are Pre-Engineered Buildings (PEBs). For companies planning expansion or setting up new infrastructure, choosing the right PEB Manufacturer in India has become a strategic decision rather than just a vendor selection. From logistics hubs to industrial plants and commercial spaces, PEBs are offering a balance of speed, durability, and cost efficiency that traditional construction methods often struggle to deliver.",
      "For someone new to the concept, PEBs might seem technical, but the idea is simple—build better, build faster, and build with precision. Understanding how they work and why they are gaining traction can help businesses make more informed decisions for long-term growth.",
      "Pre-Engineered Buildings are structures designed and manufactured using steel components that are fabricated in a controlled factory environment and assembled at the project site. Unlike conventional construction, where everything is built on-site, PEBs follow a planned and engineered process that minimizes uncertainty and improves efficiency.",
      "Each component—columns, beams, roofing systems—is designed with accuracy using advanced software. Once manufactured, these components are transported and installed quickly, ensuring faster project completion without compromising on quality.",
      "The increasing demand for a reliable PEB Manufacturer in India is directly linked to changing business needs. Today, industries operate in highly competitive environments where delays in infrastructure can slow down operations and impact revenue. PEBs offer a practical solution to these challenges by focusing on efficiency and scalability. Businesses are choosing this method because it aligns with their need for faster execution and predictable outcomes.",
      "Traditional construction methods, while familiar, often present limitations in today’s fast-paced environment. Projects can face delays due to weather conditions, labor shortages, or on-site inefficiencies. In addition, maintaining consistent quality across different phases of construction becomes challenging. As architect Frank Lloyd Wright once said, 'An idea is salvation by imagination.' The need for a smarter and more reliable construction approach led to the rise of Pre-Engineered Buildings. For companies aiming to expand quickly, delays are not just inconvenient—they can result in missed opportunities. This is where PEBs provide a clear advantage by offering a streamlined and predictable construction process.",
      "A professional PEB Manufacturer in India plays a crucial role in transforming project execution. Instead of just supplying materials, they provide complete engineered solutions that address the limitations of traditional construction. Their approach focuses on efficiency, precision, and integration across all stages of the project. This end-to-end approach minimizes delays, reduces errors, and ensures that projects are completed within defined timelines and budgets.",
      "Among the leading players in this space, Maruti InfraENG LLP has emerged as a next-generation steel infrastructure solutions company. Recognized among the top steel construction companies in India, Maruti InfraENG LLP has built its reputation on delivering high-quality, reliable, and efficient structures. The company specializes in designing, manufacturing, and supplying both light and heavy complex steel structures using advanced techniques and global standards. Their team of highly skilled engineers uses modern software to ensure accuracy in design and detailing. This focus on precision allows them to create buildings that are structurally strong while also maintaining a refined and functional design."
    ]
  },
  {
    id: "post-2",
    title: "Top Industries That Rely on a PEB Manufacturer in India",
    category: "Manufacturing",
    summary: "Explore how warehousing, manufacturing, retail commercial developments, infrastructure, and defense sectors leverage Pre-Engineered Buildings for rapid expansion.",
    image: "/images/company-aerial-view.jpg",
    date: "August 6, 2026",
    readTime: "7 min read",
    author: "Maruti InfraENG LLP",
    content: [
      "India’s infrastructure sector is undergoing a major transformation. With industries expanding rapidly and timelines becoming tighter, the need for faster, more efficient construction methods has never been greater. This shift has led to the rising demand for a PEB Manufacturer in India, as Pre-Engineered Buildings (PEBs) offer a modern solution to traditional construction challenges.",
      "Unlike conventional methods, PEBs are designed, fabricated, and partially assembled in controlled factory environments before being transported to the site for quick installation. This approach significantly reduces construction time, minimizes material wastage, and ensures consistent quality. Today, businesses are not just looking for buildings—they are looking for smart infrastructure that supports growth, flexibility, and long-term performance.",
      "A reliable PEB Manufacturer in India plays a crucial role in helping industries meet these expectations. By combining advanced engineering, precision manufacturing, and efficient execution, PEB providers enable companies to build infrastructure that aligns with modern operational needs.",
      "1. Warehousing and Logistics: The rapid growth of e-commerce and organized retail has significantly increased the demand for modern warehousing facilities. Logistics companies require large, open spaces that can accommodate bulk storage and ensure smooth movement of goods. Key benefits include large column-free spans for efficient storage, faster construction, and flexibility for expansion.",
      "2. Manufacturing and Industrial Units: Manufacturing industries require robust infrastructure that can support heavy machinery, continuous operations, and future expansion. Key advantages include high load-bearing capacity for machinery, custom layouts to optimize production flow, crane integration, and reduced maintenance costs over time.",
      "3. Commercial and Retail Spaces: Modern commercial developments demand a combination of functionality and visual appeal. A PEB Manufacturer in India enables developers to achieve this balance by offering flexible design options and faster project completion. Shopping malls, showrooms, and office complexes are increasingly adopting PEB solutions.",
      "4. Infrastructure and Government Projects: Common applications include airport terminals, railway stations, metro depots, exhibition centers, and industrial corridors. The ability to deliver projects on time makes PEBs a preferred choice for government and infrastructure developments.",
      "5. Agriculture and Food Processing: The agriculture sector is adopting modern infrastructure like grain storage warehouses, cold storage facilities, poultry/dairy sheds, and food processing units. PEBs help enhance productivity and support organized agricultural operations.",
      "6. Energy and Power Sector: PEBs are widely used for solar equipment manufacturing units, power plant structures, utility buildings, and equipment storage facilities, designed to withstand challenging environmental conditions.",
      "7. Aviation and Defense: Highly specialized structures such as aircraft hangars, defense storage units, training facilities, and operational buildings are built using customized PEB solutions meeting strict engineering and safety standards.",
      "Maruti InfraENG LLP stands out as a trusted name in this space. As a next-generation steel infrastructure solutions company, it specializes in designing, manufacturing, and installing Pre-Engineered Buildings and structural steel, ensuring that every project meets industry standards and client expectations."
    ]
  }
];

const categories = ["All", "PEB Tech", "Design & Planning", "Manufacturing", "Site Execution", "Sustainability"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Post is the first featured post in the list
  const featuredPost = useMemo(() => {
    return blogPosts.find((post) => post.featured) || blogPosts[0];
  }, []);

  // Filtered list without the featured post (only if displaying all and no search)
  const remainingPosts = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery !== "") {
      return filteredPosts;
    }
    return filteredPosts.filter((post) => post.id !== featuredPost.id);
  }, [filteredPosts, selectedCategory, searchQuery, featuredPost]);

  return (
    <div className="bg-bg-off-white min-h-screen text-text-primary selection:bg-orange selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <PageHeader
        title="Maruti Infra Insights"
        description="Stay updated with our latest articles on Pre-Engineered Buildings (PEB), structural steel innovation, fabrication technology, and industrial design."
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Search and Category Filters */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-slate-200 pb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                id={`btn-cat-${category.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[#FF6B35] text-white shadow-md shadow-orange/20"
                    : "bg-white text-[#1A3A5C] border border-slate-200 hover:border-[#3A7CA5] hover:text-[#3A7CA5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, authors..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 bg-white text-[#1A3A5C] rounded-full outline-none focus:ring-2 focus:ring-[#FF6B35]/50 transition-all text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Featured Post - Displayed only if no filtering has occurred */}
        {selectedCategory === "All" && searchQuery === "" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-white rounded-3xl overflow-hidden shadow-xl shadow-navy/5 border border-slate-100 grid md:grid-cols-2"
          >
            <div className="relative min-h-[300px] md:min-h-full aspect-[4/3] md:aspect-auto">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-6 left-6 bg-[#FF6B35] text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                Featured
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mb-4">
                  <span className="bg-[#1A3A5C]/5 text-[#1A3A5C] font-bold px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#3A7CA5]" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A3A5C] hover:text-[#FF6B35] transition-colors leading-tight mb-4">
                  <button onClick={() => setActivePost(featuredPost)} className="text-left hover:underline cursor-pointer">
                    {featuredPost.title}
                  </button>
                </h2>
                
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1A3A5C] text-white flex items-center justify-center font-bold text-xs">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-[#1A3A5C]">{featuredPost.author}</span>
                </div>

                <Button
                  id="btn-featured-read-more"
                  onClick={() => setActivePost(featuredPost)}
                  className="bg-[#1A3A5C] hover:bg-[#3A7CA5] text-white rounded-full px-6 py-4 flex items-center gap-2 group text-sm font-semibold transition-all duration-300 cursor-pointer"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Post Grid */}
        <div>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1A3A5C] mb-2">No articles found</h3>
              <p className="text-slate-600 max-w-sm mx-auto">We couldn't find any posts matching "{searchQuery}" under "{selectedCategory}".</p>
              <Button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-6 bg-[#1A3A5C] text-white rounded-full hover:bg-[#3A7CA5] px-6 cursor-pointer"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-[#1A3A5C]/5 border border-slate-100 flex flex-col group hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#1A3A5C] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#3A7CA5]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#1A3A5C] group-hover:text-[#FF6B35] hover:underline transition-colors line-clamp-2 leading-snug mb-3">
                        <button onClick={() => setActivePost(post)} className="text-left cursor-pointer">
                          {post.title}
                        </button>
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                      <span className="text-xs text-[#1A3A5C] font-semibold flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#3A7CA5]" />
                        {post.author}
                      </span>
                      <button
                        onClick={() => setActivePost(post)}
                        className="text-xs font-bold text-[#1A3A5C] hover:text-[#FF6B35] flex items-center gap-1 group/btn cursor-pointer"
                      >
                        Read More
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Subscription Newsletter */}
      <Newsletter />

      {/* Full-Post Lightbox Modal (Custom styled and responsive) */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A3A5C]/60 backdrop-blur-md"
            id="blog-modal"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col relative border border-white/20"
            >
              {/* Header Image Header */}
              <div className="relative aspect-[21/9] w-full min-h-[220px]">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <button
                  onClick={() => setActivePost(null)}
                  id="btn-close-modal"
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-md transition-all shadow-md cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="bg-[#FF6B35] text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {activePost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-3 leading-tight text-white drop-shadow-md">
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 flex flex-col gap-6 text-left">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#FF6B35]" />
                    <span>Written by: <strong className="text-[#1A3A5C]">{activePost.author}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#FF6B35]" />
                    <span>Published: <strong className="text-[#1A3A5C]">{activePost.date}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FF6B35]" />
                    <span>Read time: <strong className="text-[#1A3A5C]">{activePost.readTime}</strong></span>
                  </div>
                </div>

                {/* Content blocks */}
                <div className="text-slate-800 text-base md:text-lg leading-relaxed space-y-6">
                  {activePost.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Quote card */}
                <div className="bg-slate-50 border-l-4 border-[#FF6B35] p-6 rounded-r-xl my-4">
                  <p className="italic text-[#1A3A5C] font-medium text-base">
                    "Maruti Infraeng LLP specializes in Pre-Engineered Metal Building Systems (PEB), offering complete solutions from design to execution with absolute commitment to quality and architectural innovation."
                  </p>
                </div>

                {/* Bottom checklist */}
                <div>
                  <h4 className="font-bold text-[#1A3A5C] text-lg mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#FF6B35]" /> Why Choose Maruti Infra PEB?
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {[
                      "Optimized load distribution and seismic designs",
                      "Controlled in-house automated fabrication",
                      "Rigorous quality verification (NDT, SAW)",
                      "Fast, safe execution by skilled rigging crews"
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#FF6B35] shrink-0" />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex justify-end gap-3 border-t border-slate-100 pt-6 mt-4">
                  <Button
                    onClick={() => setActivePost(null)}
                    className="bg-slate-100 hover:bg-slate-200 text-[#1A3A5C] font-semibold rounded-full px-6 py-2 cursor-pointer"
                  >
                    Close Article
                  </Button>
                  <Button
                    onClick={() => {
                      setActivePost(null);
                      // Scroll to contact form
                      window.location.href = "/contact";
                    }}
                    className="bg-[#FF6B35] hover:bg-[#E65A2C] text-white font-semibold rounded-full px-6 py-2 cursor-pointer"
                  >
                    Request Custom Quote
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
