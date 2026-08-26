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
    "id": "post-1",
    "title": "PEB Manufacturer in India: A Beginner\u2019s Guide to Pre-Engineered Buildings",
    "category": "PEB Tech",
    "summary": "For companies planning expansion or setting up new infrastructure, choosing the right PEB Manufacturer in India has become a strategic decision. Read our beginner's guide to Pre-Engineered Buildings.",
    "image": "/images/factory-interior.png",
    "date": "August 6, 2026",
    "readTime": "6 min read",
    "author": "Maruti InfraENG LLP",
    featured: true,
    "content": [
      "Walk through any modern industrial zone today and you\u2019ll notice a silent transformation. Warehouses are rising faster, factories look more streamlined, and commercial spaces are becoming more efficient in both design and execution. This shift is not accidental\u2014it reflects a growing preference for smarter construction methods that align with business speed and scalability.",
      "At the center of this evolution are Pre-Engineered Buildings (PEBs). For companies planning expansion or setting up new infrastructure, choosing the right PEB Manufacturer in India has become a strategic decision rather than just a vendor selection. From logistics hubs to industrial plants and commercial spaces, PEBs are offering a balance of speed, durability, and cost efficiency that traditional construction methods often struggle to deliver.",
      "For someone new to the concept, PEBs might seem technical, but the idea is simple\u2014build better, build faster, and build with precision. Understanding how they work and why they are gaining traction can help businesses make more informed decisions for long-term growth.",
      "Pre-Engineered Buildings are structures designed and manufactured using steel components that are fabricated in a controlled factory environment and assembled at the project site. Unlike conventional construction, where everything is built on-site, PEBs follow a planned and engineered process that minimizes uncertainty and improves efficiency.",
      "Each component\u2014columns, beams, roofing systems\u2014is designed with accuracy using advanced software. Once manufactured, these components are transported and installed quickly, ensuring faster project completion without compromising on quality.",
      "The increasing demand for a reliable PEB Manufacturer in India is directly linked to changing business needs. Today, industries operate in highly competitive environments where delays in infrastructure can slow down operations and impact revenue. PEBs offer a practical solution to these challenges by focusing on efficiency and scalability. Businesses are choosing this method because it aligns with their need for faster execution and predictable outcomes.",
      "Traditional construction methods, while familiar, often present limitations in today\u2019s fast-paced environment. Projects can face delays due to weather conditions, labor shortages, or on-site inefficiencies. In addition, maintaining consistent quality across different phases of construction becomes challenging. As architect Frank Lloyd Wright once said, 'An idea is salvation by imagination.' The need for a smarter and more reliable construction approach led to the rise of Pre-Engineered Buildings. For companies aiming to expand quickly, delays are not just inconvenient\u2014they can result in missed opportunities. This is where PEBs provide a clear advantage by offering a streamlined and predictable construction process.",
      "A professional PEB Manufacturer in India plays a crucial role in transforming project execution. Instead of just supplying materials, they provide complete engineered solutions that address the limitations of traditional construction. Their approach focuses on efficiency, precision, and integration across all stages of the project. This end-to-end approach minimizes delays, reduces errors, and ensures that projects are completed within defined timelines and budgets.",
      "Among the leading players in this space, Maruti InfraENG LLP has emerged as a next-generation steel infrastructure solutions company. Recognized among the top steel construction companies in India, Maruti InfraENG LLP has built its reputation on delivering high-quality, reliable, and efficient structures. The company specializes in designing, manufacturing, and supplying both light and heavy complex steel structures using advanced techniques and global standards. Their team of highly skilled engineers uses modern software to ensure accuracy in design and detailing. This focus on precision allows them to create buildings that are structurally strong while also maintaining a refined and functional design."
    ]
  },
  {
    "id": "post-2",
    "title": "Top Industries That Rely on a PEB Manufacturer in India",
    "category": "Manufacturing",
    "summary": "Explore how warehousing, manufacturing, retail commercial developments, infrastructure, and defense sectors leverage Pre-Engineered Buildings for rapid expansion.",
    "image": "/images/company-aerial-view.jpg",
    "date": "August 6, 2026",
    "readTime": "7 min read",
    "author": "Maruti InfraENG LLP",
    "content": [
      "India\u2019s infrastructure sector is undergoing a major transformation. With industries expanding rapidly and timelines becoming tighter, the need for faster, more efficient construction methods has never been greater. This shift has led to the rising demand for a PEB Manufacturer in India, as Pre-Engineered Buildings (PEBs) offer a modern solution to traditional construction challenges.",
      "Unlike conventional methods, PEBs are designed, fabricated, and partially assembled in controlled factory environments before being transported to the site for quick installation. This approach significantly reduces construction time, minimizes material wastage, and ensures consistent quality. Today, businesses are not just looking for buildings\u2014they are looking for smart infrastructure that supports growth, flexibility, and long-term performance.",
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
  },
  {
    "id": "post-3",
    "title": "Common Mistakes to Avoid When Choosing a PEB Structure Manufacturer in India",
    "category": "Design & Planning",
    "summary": "Choosing the right PEB structure manufacturer in India is not simply about comparing quotations. Learn the 10 critical mistakes to avoid\u2014from low-ball quotes and engineering capabilities to fabrication quality, site installation, and long-term scalability.",
    "image": "/images/core-design.jpg",
    "date": "August 26, 2026",
    "readTime": "10 min read",
    "author": "Maruti InfraENG LLP",
    "content": [
      "A Pre-Engineered Building (PEB) can look straightforward from the outside: steel frames, roofing, cladding and a structure assembled at the site. But behind that simplicity is a detailed process involving engineering, design, material selection, fabrication, logistics and installation.",
      "That is why choosing the right PEB Manufacturer in India is not simply about comparing quotations. The manufacturer you select can influence the structural performance, project timeline, maintenance requirements and overall value of your building for years to come.",
      "From industrial warehouses and manufacturing units to commercial facilities, logistics centres and large-scale infrastructure, PEBs are increasingly becoming a practical choice for businesses looking for efficient and adaptable construction solutions. However, the benefits of PEB construction depend heavily on how well the structure is designed, manufactured and installed.",
      "A low quotation may look attractive at the beginning, but the real cost of a project becomes clear only when design changes, delays, material inconsistencies or installation issues start appearing.",
      "So, before you sign a contract, here are some of the most common mistakes worth avoiding.",
      "Choosing a PEB Manufacturer in India Based Only on the Lowest Quote",
      "Cost is naturally an important consideration in any construction project. However, choosing a manufacturer solely because they offer the lowest price can become an expensive decision later.",
      "Different manufacturers may quote differently because their specifications, material grades, engineering approach, fabrication processes, quality checks and scope of work are not necessarily the same. A lower quote may sometimes exclude important components or services that another manufacturer has already included.",
      "Instead of comparing only the final figure, understand what you are actually getting for the price.",
      "Look closely at:",
      "Steel specifications and material grades",
      "Design and engineering scope",
      "Fabrication and quality-control processes",
      "Roofing and cladding specifications",
      "Surface treatment and painting systems",
      "Transportation and logistics",
      "Erection and installation",
      "Project supervision",
      "Warranty and after-sales support",
      "The right comparison is not between two numbers. It is between two complete solutions.",
      "Ignoring the Manufacturer's Engineering and Design Capabilities",
      "PEB construction is an engineering-driven process. A manufacturer may have impressive fabrication facilities, but that alone does not tell you whether its design and detailing capabilities are strong.",
      "Your manufacturer should have experienced engineers who understand structural requirements, loading conditions, site parameters and the intended use of the building. Good detailing is equally important because even a well-designed structure needs accurate drawings and fabrication information to be executed correctly.",
      "This is where software, engineering expertise and attention to detail make a meaningful difference.",
      "A capable manufacturer should be able to discuss the technical aspects of your project clearly rather than simply presenting a standard building package.",
      "Ask whether the company has:",
      "An in-house engineering and detailing team",
      "Modern design and detailing software",
      "Experience with different types of steel structures",
      "Proper design review and checking processes",
      "Capability to handle customised or complex requirements",
      "Engineers who can coordinate effectively with consultants and project teams",
      "A building designed around your actual requirements is more valuable than a generic solution that simply looks cheaper on paper.",
      "Treating Every PEB Project as a Standard Package",
      "No two projects are exactly alike.",
      "A warehouse, factory, logistics facility and commercial building can have very different requirements. Span, height, crane loads, insulation, ventilation, openings, mezzanine floors, equipment loads and future expansion plans can all influence the structural design.",
      "A manufacturer that takes the time to understand these requirements is more likely to deliver a solution that works in the real world.",
      "Before finalising your manufacturer, clearly discuss:",
      "Building dimensions and future expansion plans",
      "Location and site conditions",
      "Equipment or machinery loads",
      "Crane requirements, if applicable",
      "Roofing and insulation needs",
      "Doors, windows and ventilation",
      "Electrical and service openings",
      "Mezzanine or additional floor requirements",
      "Architectural and aesthetic expectations",
      "The objective should not simply be to manufacture a steel building. It should be to develop a structure that supports the way your business operates.",
      "Overlooking Manufacturing Quality and Material Traceability",
      "A PEB may be designed on a computer, but its final performance depends on what happens inside the manufacturing facility.",
      "Fabrication accuracy, welding quality, cutting, drilling, surface preparation, painting and inspection all contribute to the final structure. Small inaccuracies during manufacturing can create complications during transportation or erection.",
      "This is why visiting the manufacturing facility, when possible, can provide useful insight into the company's capabilities.",
      "Look beyond the size of the facility. Pay attention to whether the manufacturer follows organised processes and quality checks throughout production.",
      "A reliable manufacturer should be able to explain how it manages:",
      "Raw material inspection",
      "Cutting and fabrication",
      "Welding and dimensional checks",
      "Surface preparation",
      "Painting or protective treatment",
      "Quality inspection",
      "Documentation and traceability",
      "Packing and dispatch",
      "The goal is consistency\u2014from the first piece of steel leaving the production line to the final structure being erected at your site.",
      "Not Checking Previous Projects and Industry Experience",
      "A company's website can tell you what it offers. Completed projects can tell you how it actually works.",
      "Before selecting a manufacturer, take the time to understand its experience across different project types and scales. If possible, review completed projects that are comparable to yours in terms of size, complexity or application.",
      "Do not hesitate to ask questions such as:",
      "How many years has the company been involved in PEB and structural steel?",
      "What types of projects has it completed?",
      "Has it handled projects of similar scale?",
      "Does it manage design, manufacturing and installation?",
      "Can it provide relevant project references?",
      "Does it have experience with complex structural requirements?",
      "Experience matters because construction rarely goes exactly according to plan. A manufacturer that has dealt with different site conditions, engineering challenges and project requirements is better placed to identify potential issues before they become major problems.",
      "Focusing on Manufacturing but Forgetting Installation",
      "A high-quality structure still needs to be installed correctly.",
      "Transportation, sequencing, lifting, alignment, bolting and on-site coordination are important parts of PEB execution. Poor installation can affect both the construction schedule and the final quality of the building.",
      "This is why it is worth understanding whether your manufacturer provides installation support or has a qualified erection team.",
      "As the old saying goes, \u201cPrice is what you pay. Value is what you get.\u201d",
      "In PEB construction, value comes from the complete journey\u2014not just the fabrication stage.",
      "A manufacturer offering an integrated solution can make coordination easier because design, fabrication, supply and installation are handled with greater continuity.",
      "Not Discussing Timelines and Project Coordination Clearly",
      "One of the major reasons businesses choose PEB construction is speed. But faster construction does not happen automatically.",
      "It requires planning at every stage\u2014from design approval and material procurement to fabrication, transportation and erection.",
      "Before work begins, establish a realistic project schedule and clarify the responsibilities of everyone involved.",
      "Important points include:",
      "Design approval timelines",
      "Manufacturing schedule",
      "Material procurement",
      "Dispatch planning",
      "Transportation arrangements",
      "Site readiness",
      "Erection schedule",
      "Inspection and handover",
      "Responsibility for project coordination",
      "A manufacturer who communicates proactively can help identify potential delays before they affect the overall project.",
      "Choosing a Manufacturer Without Looking at Its Complete Capabilities",
      "Another common mistake is hiring different vendors for every stage without considering whether an integrated solution would be more efficient.",
      "When design, detailing, fabrication, supply and installation are fragmented between multiple parties, coordination can become complicated. A change made during design may need to be communicated to fabrication, logistics and installation teams separately.",
      "An integrated PEB partner can simplify this process.",
      "This is where companies such as Maruti InfraENG LLP position themselves around complete steel infrastructure solutions. The company works across the design, manufacturing and supply of light to heavy and complex steel structures and Pre-Engineered Buildings, supported by engineering and detailing capabilities.",
      "Its structural steel division covers detailing, fabrication, supply and logistics, while its PEB capabilities address the requirements of projects that demand both structural performance and practical execution.",
      "Choosing a PEB Manufacturer in India Without Asking About Future Requirements",
      "A building should not only work for today's requirements. Businesses grow, production capacities change and operational needs evolve.",
      "If you expect your facility to expand in the future, discuss this during the design stage itself. Future expansion, additional equipment, increased storage capacity or changes in internal layouts may influence today's structural decisions.",
      "Planning ahead can prevent unnecessary modifications later.",
      "A good manufacturer should be willing to understand not only where your business stands today, but also where the building may need to go tomorrow.",
      "The Right Manufacturer Is a Project Partner, Not Just a Supplier",
      "Selecting a PEB Manufacturer in India should ultimately be viewed as a long-term project decision rather than a simple procurement exercise.",
      "The right partner brings together engineering knowledge, manufacturing capabilities, quality processes, project coordination and installation expertise. More importantly, it should be transparent about specifications, timelines, costs and responsibilities from the beginning.",
      "Before making your final decision, ask yourself:",
      "Does the manufacturer understand my project's specific requirements?",
      "Does it have strong engineering and detailing capabilities?",
      "Can it demonstrate relevant project experience?",
      "Are its manufacturing and quality processes transparent?",
      "Can it support logistics and installation?",
      "Does it communicate clearly about timelines and costs?",
      "Can it provide a complete solution rather than just fabricated components?",
      "Is it capable of supporting future project requirements?",
      "If the answer to these questions is yes, you are already closer to making a sound decision.",
      "Build Better by Choosing Better",
      "PEB construction can offer businesses a practical route to creating efficient, durable and adaptable spaces\u2014but the quality of the outcome starts with the manufacturer you choose.",
      "At Maruti InfraENG LLP, the focus is on bringing engineering, technology and steel construction capabilities together to deliver Pre-Engineered Buildings and structural steel solutions for diverse project requirements. With skilled engineers, modern software and experience in light to heavy and complex steel structures, the company approaches each project with an emphasis on precision, performance and execution.",
      "If you are evaluating options for your next industrial, commercial or infrastructure project, don't let the lowest quotation make the decision for you.",
      "Look at the engineering. Examine the quality. Understand the process. And choose a PEB partner that can stand behind the structure long after the steel leaves the factory.",
      "Planning your next PEB or structural steel project? Connect with Maruti InfraENG LLP to explore a complete solution tailored to your requirements."
    ]
  },
  {
    "id": "post-4",
    "title": "Why Choose a PEB Manufacturer in India Over Traditional Construction",
    "category": "PEB Tech",
    "summary": "Discover why modern industries are replacing traditional concrete construction with Pre-Engineered Buildings (PEBs) in India for rapid project execution, cost predictability, high precision, and future-proof infrastructure.",
    "image": "/images/ingenious-design.jpg",
    "date": "August 26, 2026",
    "readTime": "8 min read",
    "author": "Maruti InfraENG LLP",
    "content": [
      "Introduction: Building for a Faster, Smarter Future",
      "The way India builds is changing\u2014and it\u2019s happening faster than most realize. With industries scaling rapidly, infrastructure demands rising, and timelines becoming tighter than ever, businesses can no longer afford delays or inefficiencies in construction. What once worked for decades is now being re-evaluated through the lens of speed, precision, and long-term value.",
      "This shift has brought Pre-Engineered Buildings (PEBs) into the spotlight. Today, choosing a PEB Manufacturer in India is not just a construction decision\u2014it is a strategic move toward efficiency and growth.",
      "From industrial warehouses and manufacturing units to commercial spaces and logistics hubs, PEB solutions are enabling businesses to build smarter, faster, and more cost-effectively. As companies look for scalable infrastructure that aligns with modern needs, PEBs are emerging as the clear choice.",
      "The Problem: Why Traditional Construction No Longer Fits Modern Demands",
      "Traditional construction methods have long been the foundation of infrastructure development. However, in today\u2019s fast-paced environment, their limitations are becoming increasingly evident. Projects often take longer than expected, costs escalate unpredictably, and quality can vary depending on site conditions.",
      "For businesses operating in competitive markets, these challenges can significantly impact timelines, budgets, and operational readiness.",
      "Common pain points with conventional construction include:",
      "Time DelaysOn-site dependencies, weather interruptions, and sequential construction processes often lead to extended timelines.",
      "Cost UncertaintyFluctuating material prices and labor costs make budgeting difficult and can lead to overruns.",
      "Quality InconsistencyVariations in workmanship and site conditions can affect the overall quality and durability of the structure.",
      "Limited FlexibilityOnce construction begins, making design changes becomes complex and expensive.",
      "High Resource DependencyTraditional methods require extensive manpower and on-site supervision.",
      "As American architect Buckminster Fuller once said:\u201cYou never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.\u201d",
      "This perfectly reflects the current construction landscape\u2014where businesses are no longer trying to fix traditional methods but are instead moving toward more efficient alternatives like PEBs.",
      "The Solution: Why Choosing a PEB Manufacturer in India is the Smarter Choice",
      "A PEB Manufacturer in India offers a fundamentally different approach to construction\u2014one that prioritizes precision, efficiency, and scalability. Unlike traditional construction, PEBs are designed and fabricated in controlled factory environments, ensuring consistency and accuracy before they even reach the site.",
      "This off-site manufacturing approach transforms the entire construction process, making it faster, more reliable, and less dependent on unpredictable factors.",
      "Key Benefits of Choosing a PEB Manufacturer in India",
      "Faster Project ExecutionSince components are pre-designed and pre-fabricated, on-site assembly becomes significantly quicker, reducing overall project timelines.",
      "Cost Efficiency and ControlOptimized use of materials, reduced labor dependency, and shorter construction durations help keep costs predictable and manageable.",
      "High Precision and QualityFactory-controlled production ensures uniformity and adherence to strict quality standards, resulting in structurally sound buildings.",
      "Design VersatilityPEBs can be customized to suit various industrial, commercial, or institutional requirements, offering flexibility in design and layout.",
      "Reduced Construction WasteEfficient planning and fabrication minimize material wastage, making PEBs a more resource-conscious option.",
      "Low MaintenanceEngineered components and durable materials lead to longer-lasting structures with minimal maintenance needs.",
      "Ease of ExpansionFuture modifications and expansions can be carried out with ease, making PEBs ideal for growing businesses.",
      "PEB vs Traditional Construction: A Clear Advantage",
      "To truly understand the impact of choosing a PEB Manufacturer in India, it helps to compare both approaches side by side:",
      "Construction TimePEB: Rapid installation and faster completionTraditional: Time-intensive and often delayed",
      "Cost ManagementPEB: Predictable and optimized costsTraditional: Subject to fluctuations and overruns",
      "Quality AssurancePEB: Consistent, factory-controlled qualityTraditional: Dependent on site conditions",
      "Flexibility and ScalabilityPEB: Easily adaptable and expandableTraditional: Rigid and difficult to modify",
      "SustainabilityPEB: Efficient use of materials with less wasteTraditional: Higher material consumption and wastage",
      "This comparison clearly highlights why businesses are increasingly shifting toward PEB solutions.",
      "Why India is Emerging as a Hub for PEB Solutions",
      "India has positioned itself as a strong player in the global PEB industry. Rapid industrial growth, technological advancements, and a skilled workforce have contributed to the rise of high-quality manufacturing capabilities.",
      "A PEB Manufacturer in India today brings together engineering expertise, modern technology, and cost-effective production processes. This combination enables the delivery of world-class infrastructure solutions that meet both domestic and international standards.",
      "Key advantages of choosing an Indian PEB manufacturer include:",
      "Access to advanced design and engineering software",
      "Skilled professionals with industry-specific expertise",
      "Competitive pricing without compromising on quality",
      "Ability to handle large-scale and complex projects",
      "Compliance with international construction standards",
      "These strengths make India a reliable destination for businesses looking to invest in efficient and scalable infrastructure.",
      "Choosing the Right PEB Manufacturer in India",
      "Selecting the right partner is crucial to ensuring the success of any construction project. Not all manufacturers offer the same level of expertise, technology, or service quality.",
      "When evaluating a PEB Manufacturer in India, consider the following factors:",
      "Experience and Track RecordLook for a company with proven expertise across diverse industries and project types.",
      "Design and Engineering CapabilitiesStrong in-house design teams ensure precision and customization.",
      "Technology and InfrastructureAdvanced manufacturing facilities and software tools are essential for quality output.",
      "End-to-End SolutionsFrom design and fabrication to installation and logistics, a complete solution provider ensures seamless execution.",
      "Timely DeliveryAdherence to deadlines is critical for project success and business continuity.",
      "Maruti InfraENG LLP: Redefining Steel Infrastructure",
      "Among the leading names in the industry, Maruti InfraENG LLP has established itself as a trusted PEB Manufacturer in India, delivering innovative and reliable steel infrastructure solutions.",
      "As a next-generation company, Maruti InfraENG LLP focuses on designing, manufacturing, and supplying light to heavy and complex steel structures tailored to modern industry requirements. With a strong emphasis on precision and quality, the company leverages advanced software and international standards to deliver . robust and visually refined buildings.",
      "What makes Maruti InfraENG LLP stand out:",
      "A team of highly skilled engineers ensuring accurate design and detailing",
      "Use of advanced technology for efficient and precise manufacturing",
      "Expertise in handling complex and large-scale steel structures",
      "End-to-end solutions covering design, fabrication, and installation",
      "Commitment to quality, durability, and aesthetic appeal",
      "From structural steel components to trusses and complete PEB solutions, the company provides a comprehensive approach to modern construction needs.",
      "Conclusion: Building the Future with Confidence",
      "The construction industry is no longer just about building structures\u2014it is about delivering value, efficiency, and long-term performance. Traditional methods, while reliable in the past, are gradually being replaced by smarter and more adaptable solutions.",
      "Choosing a PEB Manufacturer in India offers businesses a clear edge by combining speed, precision, and cost-effectiveness into one streamlined process. It enables faster project completion, better quality control, and the flexibility to scale as needed.",
      "Ready to Build Smarter?",
      "If you are planning your next project, now is the time to rethink your approach. Partnering with an experienced PEB Manufacturer in India like Maruti InfraENG LLP ensures that your infrastructure is built not just for today, but for the future.",
      "Make the shift toward smarter construction\u2014and experience the difference that precision engineering and modern innovation can bring to your projects."
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
