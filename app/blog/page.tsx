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
    title: "The Evolution of Pre-Engineered Buildings (PEB) in Modern Industrial Infrastructure",
    category: "PEB Tech",
    summary: "Discover how Pre-Engineered Buildings are transforming industrial architecture with rapid deployment, cost efficiency, and unprecedented design flexibility.",
    image: "/images/company-aerial-view.jpg",
    date: "July 28, 2026",
    readTime: "5 min read",
    author: "Amit Patel (Director)",
    featured: true,
    content: [
      "Pre-Engineered Buildings (PEB) have completely revolutionized industrial infrastructure development. Traditionally, building a manufacturing plant, warehouse, or distribution center took years of coordinate design, structural steel sourcing, onsite fabrication, and extensive welding. PEB systems bypass these bottlenecks through intelligent off-site pre-fabrication.",
      "At Maruti Infra Engineering, our design and engineering phase uses modern software tools to optimize steel consumption. By tailoring sections to the precise stress profiles of the structure, we reduce load and save materials. Once designed, the primary structural frames, purlins, and cladding are fabricated under controlled factory conditions in our Surat plant.",
      "The result is a structure that arrives on site ready to bolt together. Erection time is slashed by up to 50% compared to conventional concrete or traditional structural steel methods. Furthermore, PEB structures allow for vast clear spans of up to 90 meters without internal columns, maximizing storage and assembly line efficiency.",
      "In this era of rapid e-commerce expansion and high-capacity manufacturing, PEB is no longer just an alternative; it is the industry standard for agile, strong, and highly customizable structural infrastructure."
    ]
  },
  {
    id: "post-2",
    title: "Advanced Structural Steel Design: Leveraging Software for Precision Engineering",
    category: "Design & Planning",
    summary: "How modern CAD/BIM applications and structural analysis software ensure precision, load distribution, and wind resistance in heavy steel structures.",
    image: "/images/core-design.jpg",
    date: "July 15, 2026",
    readTime: "6 min read",
    author: "Rohan Vyas (Lead Structural Engineer)",
    content: [
      "Safety in industrial buildings starts on the screen. Pre-Engineered Buildings and structural steel skeletons are subjected to tremendous dynamic forces: heavy wind velocities, seismic activities, crane loads, and temperature shifts. Designing for these forces requires state-of-the-art computational analysis.",
      "Our engineering team relies on world-class analysis suites like STAAD.Pro and Tekla Structures. These platforms allow us to create 3D virtual models of the buildings and run stress simulations. We test extreme weather events and dynamic load shifting to ensure that columns, rafter sections, anchor bolts, and bracing structures hold firm.",
      "BIM (Building Information Modeling) integration ensures that there is zero mismatch between structural design and utility routing. When the fabricated beams arrive on-site, they fit perfectly with pre-cast concrete columns and anchor grids. This precision engineering reduces field modifications, prevents delays, and ensures that the structural integrity matches theoretical design to a millimeter.",
      "Ultimately, investing in advanced software-based design processes upfront saves material costs by avoiding over-engineering while upholding the highest level of safety and structural longevity."
    ]
  },
  {
    id: "post-3",
    title: "Inside Our Surat Fabrication Facility: Quality Standards & Manufacturing Excellence",
    category: "Manufacturing",
    summary: "A sneak peek into Maruti Infra's state-of-the-art Surat fabrication plant, showcasing automated line cuts, welding systems, and rigorous quality check protocols.",
    image: "/images/factory-interior.png",
    date: "June 30, 2026",
    readTime: "4 min read",
    author: "Sanjay Shah (Plant Manager)",
    content: [
      "While designs are made in the office, the real metal of a building is forged in the fabrication facility. In Surat, Maruti Infra operates a massive, automated fabrication plant. Here, raw steel plates are converted into high-load built-up sections, columns, and rafters.",
      "The fabrication line begins with CNC plasma cutting, ensuring plates are sliced to exact dimensions with perfect edge finishes. Next, plates are aligned and run through automated submerged arc welding (SAW) machines. Automating the welding process produces uniform, deep-penetration welds that are free from slag inclusions, ensuring unmatched structural strength.",
      "Every weld undergoes non-destructive testing (NDT), including ultrasonic and dye-penetrant checks. Following fabrication, components are shot-blasted to remove rust and scale, creating a clean profile for paint adhesion. A high-durability epoxy primer is applied, followed by protective finish coats to guard against corrosion in humid industrial climates.",
      "Maintaining these strict manufacturing standards ensures that every Maruti Infra column and beam performs perfectly under load, withstanding decades of harsh industrial environments."
    ]
  },
  {
    id: "post-4",
    title: "Best Practices for Site Execution and Erection of Large-Scale Pre-Engineered Buildings",
    category: "Site Execution",
    summary: "Safe erection of heavy metal structures requires rigorous coordination, high safety standards, and specialized machinery. Explore our proven execution roadmap.",
    image: "/images/visionary-planning.jpg",
    date: "June 12, 2026",
    readTime: "7 min read",
    author: "Karan Desai (Projects Head)",
    content: [
      "Even the best-designed and fabricated PEB parts will fail if the site execution is flawed. Erection is the phase where heavy steel sections, sometimes weighing several tons, are lifted and secured high above the ground. It is an exercise in engineering coordination and safety discipline.",
      "Maruti Infra's erection methodology follows a strict step-by-step blueprint. First, foundation anchor bolts are verified for alignment. Next, the first bay (usually the most braced bay) is erected and completely tightened. This acts as the anchor point for the rest of the building.",
      "Rigging plans, crane capacities, and wind monitoring are checked daily. Workers on-site use mandatory fall-protection harnesses, safety nets, and temporary guy wires to stabilize frames during assembly. Specialized high-strength bolts are torqued using calibrated impact wrenches to ensure the connections behave as design equations predicted.",
      "By sticking to these rigid site guidelines, we maintain an accident-free record and ensure that structures are built safely, quickly, and to specification."
    ]
  },
  {
    id: "post-5",
    title: "Sustainable Infrastructure: Steel as the Future of Eco-Friendly Construction",
    category: "Sustainability",
    summary: "Steel is one of the most recycled materials globally. Learn how Pre-Engineered Buildings contribute to green certifications and reduce environmental footprints.",
    image: "/images/facility-aerial.jpg",
    date: "May 25, 2026",
    readTime: "5 min read",
    author: "Dr. Alok Mehta (Sustainability Adviser)",
    content: [
      "As environmental regulations tighten and corporate social responsibility grows, green building has become a necessity. Steel plays a central role in this shift. Unlike concrete, structural steel is 100% recyclable, meaning it can be melted down and reused indefinitely without losing strength.",
      "Pre-Engineered Buildings are particularly eco-friendly. Since every component is pre-cut and fabricated in a factory, raw material waste is almost completely eliminated. Erection on-site is dry, requiring minimal water consumption and generating virtually no dust pollution or debris compared to traditional masonry.",
      "Additionally, PEB systems are highly compatible with energy-efficient insulation materials. High R-value glass wool insulations, double-skin roof panels, and natural skylights reduce the cooling and lighting loads of industrial buildings, lowering their lifetime carbon footprints.",
      "By selecting a PEB solution, industries not only save time and money but also make a direct investment in sustainable, recyclable, and energy-efficient building infrastructure."
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
