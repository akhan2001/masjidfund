import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChurchIcon as Mosque, Users, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">MasjidFund</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/campaigns" className="hover:underline">Campaigns</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Support Your Local Mosque</h1>
            <p className="text-xl mb-8">Join our community in funding important projects for mosques around the world.</p>
            <Button size="lg">Start a Campaign</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mosque className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Create a Campaign</h3>
                <p>Set up a fundraising campaign for your mosque's project or need.</p>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Share with Community</h3>
                <p>Spread the word and invite others to contribute to your cause.</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Collect Donations</h3>
                <p>Receive funds securely and transparently through our platform.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Campaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={`/placeholder.svg?text=Campaign+${i}`} alt={`Campaign ${i}`} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Mosque Renovation Project {i}</h3>
                    <p className="text-sm mb-4">Help us renovate our local mosque to better serve our growing community.</p>
                    <div className="mb-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold">$45,000 / $100,000</span>
                      <Button variant="outline" size="sm">Donate</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About MasjidFund</h3>
              <p className="text-sm">MasjidFund is a crowdfunding platform dedicated to supporting mosques and Islamic projects worldwide.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li><Link href="/campaigns" className="hover:underline">Browse Campaigns</Link></li>
                <li><Link href="/start-campaign" className="hover:underline">Start a Campaign</Link></li>
                <li><Link href="/how-it-works" className="hover:underline">How It Works</Link></li>
                <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">Email: info@masjidfund.com</p>
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 MasjidFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

