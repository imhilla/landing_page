import Image from 'next/image'
import TopSection from './Components/TopSection'
import Footer from './Components/Footer'
import FutureOfWorking from './Components/FutureOfWorking'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TopSection />
      <FutureOfWorking />
      <Footer />
    </main>
  )
}

// https://www.behance.net/gallery/156897961/CoDesks-Co-Working-Space-Landing-Page?tracking_source=search_projects|office+landing+page