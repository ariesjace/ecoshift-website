"use client"

import { notFound } from "next/navigation"
import Header from "@/components/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MapPin, Award, TrendingUp } from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Downtown Smart City Initiative",
    category: "Municipal",
    image: "/smart-city-street-lighting.jpg",
    shortDescription: "Upgraded entire downtown area with smart LED street lights.",
    fullDescription:
      "This comprehensive project transformed the downtown area with state-of-the-art LED street lighting integrated with IoT monitoring systems. The installation includes real-time energy monitoring, automated dimming based on traffic patterns, and emergency alert systems.",
    location: "Metro City",
    duration: "8 months",
    budget: "$1.2M",
    stats: {
      lightfixtures: "500+",
      energysaved: "40%",
      co2prevented: "200 tons/year",
      uptime: "99.8%",
    },
    challenges: [
      "Coordinated installation across 25 downtown blocks",
      "Minimized traffic disruption during peak hours",
      "Integrated with existing city infrastructure",
    ],
    results: [
      "40% reduction in energy consumption",
      "Improved public safety with better street lighting",
      "Real-time data analytics for city planning",
      "200 tons CO2 prevented annually",
    ],
    technologies: ["Smart LED", "IoT Sensors", "Cloud Analytics", "Motion Detection"],
  },
  {
    id: 2,
    title: "Corporate Office Energy Retrofit",
    category: "Commercial",
    image: "/modern-office-lighting.jpg",
    shortDescription: "Complete lighting system upgrade for major tech headquarters.",
    fullDescription:
      "Completely redesigned the lighting system for a 25-floor tech company headquarters, incorporating human-centric lighting that adapts to circadian rhythms and improves employee wellness while reducing energy costs.",
    location: "Tech Hub City",
    duration: "6 months",
    budget: "$500K",
    stats: {
      offices: "25 floors",
      investment: "$500K",
      completion: "Q3 2024",
      satisfaction: "98%",
    },
    challenges: [
      "Phased installation without disrupting operations",
      "Integration with existing smart building systems",
      "Employee wellness considerations",
    ],
    results: [
      "35% energy reduction",
      "Improved employee wellness scores",
      "98% employee satisfaction",
      "$80K annual savings",
    ],
    technologies: ["Human-centric Lighting", "Smart Controls", "Occupancy Sensors", "Daylight Harvesting"],
  },
  {
    id: 3,
    title: "Industrial Warehouse Modernization",
    category: "Industrial",
    image: "/warehouse-industrial-lighting.jpg",
    shortDescription: "High-bay LED installation with motion sensors.",
    fullDescription:
      "Modernized a 50,000 sq ft manufacturing facility with high-efficiency LED high-bays equipped with motion sensors and zoned controls, resulting in minimal maintenance and maximum productivity.",
    location: "Industrial Zone",
    duration: "4 months",
    budget: "$350K",
    stats: {
      area: "50,000 sqft",
      maintenance: "90% reduced",
      uptime: "99.9%",
      payback: "3.2 years",
    },
    challenges: [
      "24/7 facility operations during retrofit",
      "Heavy-duty industrial environment",
      "Motion sensor calibration for warehouse",
    ],
    results: ["90% maintenance reduction", "99.9% system uptime", "3.2-year ROI", "50% energy savings"],
    technologies: ["High-Bay LEDs", "Motion Sensors", "Zoned Controls", "Industrial Grade"],
  },
  {
    id: 4,
    title: "Hospital Surgical Suite Upgrade",
    category: "Healthcare",
    image: "/hospital-surgical-lighting.jpg",
    shortDescription: "Specialized LED lighting for operating rooms.",
    fullDescription:
      "Installed specialized surgical lighting with precise color temperature control and shadow elimination. The system supports critical medical procedures while maintaining the highest standards of hygiene and reliability.",
    location: "Medical Center",
    duration: "3 months",
    budget: "$400K",
    stats: {
      surgicalsuites: "12",
      heatreduction: "35%",
      equipment: "Premium",
      reliability: "99.99%",
    },
    challenges: [
      "Healthcare compliance and sterility standards",
      "Precision color temperature control",
      "Zero downtime requirements",
    ],
    results: [
      "35% heat reduction in ORs",
      "Improved surgical visibility",
      "99.99% reliability uptime",
      "Better patient recovery outcomes",
    ],
    technologies: ["Surgical Grade LEDs", "Color Temperature Control", "Shadow-Free Design", "Hospital Certified"],
  },
  {
    id: 5,
    title: "University Campus Lighting Transformation",
    category: "Education",
    image: "/campus-university-lighting.jpg",
    shortDescription: "Campus-wide sustainable lighting project.",
    fullDescription:
      "Transformed a major research university's lighting infrastructure across 30 buildings, creating a safer, more energy-efficient campus while maintaining architectural aesthetics and supporting student wellness.",
    location: "University Campus",
    duration: "12 months",
    budget: "$2.5M",
    stats: {
      buildingsupgraded: "30",
      students: "25,000",
      savings: "$150K/year",
      co2prevented: "500 tons/year",
    },
    challenges: [
      "Large-scale phased deployment",
      "Architectural preservation requirements",
      "Student and faculty coordination",
    ],
    results: [
      "$150K annual energy savings",
      "500 tons CO2 prevented yearly",
      "Improved campus safety",
      "Enhanced study environments",
    ],
    technologies: ["Scalable LED Systems", "Campus Controls", "Daylight Harvesting", "Emergency Systems"],
  },
  {
    id: 6,
    title: "Shopping Mall Entertainment Complex",
    category: "Retail",
    image: "/retail-mall-lighting.jpg",
    shortDescription: "Dynamic lighting system with ambient and accent lighting.",
    fullDescription:
      "Created a dynamic lighting ecosystem that enhances the shopping experience with layered ambient, accent, and feature lighting that can be adjusted for different seasons, events, and retail promotions.",
    location: "Shopping District",
    duration: "5 months",
    budget: "$600K",
    stats: {
      retailstores: "120+",
      lightlayers: "5",
      interactive: "Yes",
      foottraffic: "+25%",
    },
    challenges: ["120+ retail store integrations", "Dynamic scheduling and zoning", "Retail tenant coordination"],
    results: [
      "25% increase in foot traffic",
      "Enhanced customer experience",
      "Event-ready lighting system",
      "$120K annual savings",
    ],
    technologies: ["Dynamic LEDs", "Color Tuning", "Scheduling Systems", "Interactive Controls"],
  },
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <main className="w-full overflow-hidden bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-12 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-lg text-gray-200 max-w-2xl">{project.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* PROJECT INFO CARDS */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Location", value: project.location, icon: MapPin },
              { label: "Duration", value: project.duration, icon: null },
              { label: "Budget", value: project.budget, icon: Award },
              { label: "Category", value: project.category, icon: TrendingUp },
            ].map((info, i) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    {Icon && <Icon className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />}
                    <div>
                      <p className="text-sm text-gray-600 font-semibold">{info.label}</p>
                      <p className="text-lg font-bold text-emerald-900 mt-1">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-emerald-900 mb-4">Project Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{project.fullDescription}</p>
              </motion.div>

              {/* Challenges */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-emerald-900 mb-6">Key Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="flex gap-4 bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-600 font-bold text-lg flex-shrink-0">{i + 1}</div>
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-emerald-900 mb-6">Results Achieved</h2>
                <div className="space-y-3">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                      <div className="text-emerald-600 text-xl flex-shrink-0">✓</div>
                      <p className="text-gray-800 font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Stats & Technologies */}
            <div className="space-y-8">
              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-50 rounded-xl p-8 sticky top-20"
              >
                <h3 className="text-xl font-bold text-emerald-900 mb-6">Key Metrics</h3>
                <div className="space-y-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="border-b border-emerald-200 pb-4">
                      <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="text-2xl font-bold text-emerald-900 mt-1">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <Link href="/quotation">
                <button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl transition">
                  Similar Project? Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-lg font-bold text-emerald-900 mb-2">{relatedProject.title}</h3>
                      <p className="text-gray-600 text-sm">{relatedProject.shortDescription}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
