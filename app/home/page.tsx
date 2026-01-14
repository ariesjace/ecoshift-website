import Header from "@/components/homepage/header"
import HeroSection from "@/components/homepage/hero-section"
import WorkflowSection from "@/components/homepage/workflow-section"
import FeaturesSection from "@/components/homepage/features-section"
import BlogsSection from "@/components/homepage/blogs-section"
import CTASection from "@/components/homepage/cta-section"
import Footer from "@/components/homepage/footer"
import BackToTop from "@/components/homepage/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <BlogsSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </main>
  )
}
