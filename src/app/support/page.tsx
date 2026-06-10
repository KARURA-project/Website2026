'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '@/components/InfoCard';
import SponsorMarquee from '@/components/SponsorCard';

const sponsorTiers = [
  {
    tier: 'Platinum',
    amount: '$10,000+',
    color: 'border-gray-400',
    badge: 'bg-gray-200 text-gray-800',
    perks: [
      'Logo on rover and team uniforms',
      'Full-page feature in our annual report',
      'Speaking opportunity at team events',
      'Priority placement on website',
      'Social media spotlight campaign',
      'Exclusive team visit & demo',
    ],
  },
  {
    tier: 'Gold',
    amount: '$5,000–$9,999',
    color: 'border-yellow-400',
    badge: 'bg-yellow-100 text-yellow-800',
    perks: [
      'Logo on rover',
      'Half-page feature in annual report',
      'Website sponsorship page feature',
      'Social media recognition',
      'Virtual team Q&A session',
    ],
  },
  {
    tier: 'Silver',
    amount: '$1,000–$4,999',
    color: 'border-gray-300',
    badge: 'bg-gray-100 text-gray-700',
    perks: [
      'Logo on team uniforms',
      'Mention in annual report',
      'Website sponsorship listing',
      'Social media thank-you post',
    ],
  },
  {
    tier: 'Bronze',
    amount: '$500–$999',
    color: 'border-orange-300',
    badge: 'bg-orange-50 text-orange-800',
    perks: [
      'Name/logo on website',
      'Social media recognition',
      'Annual report acknowledgment',
    ],
  },
];

const currentSponsors = [
  { id: '1', name: 'Sanso', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x740_v-frms_webp_47ab9e3a-894f-4fa5-ae7e-e04e6f6ff0a7_small.webp', tier: 'Platinum' },
  { id: '2', name: 'Kikusui', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_35ab6be7-00ff-45b5-b575-6589198d4233_small.webp', tier: 'Gold' },
  { id: '3', name: 'Tenchijin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1482x370_v-fms_webp_392f814c-2b0f-4bfa-9b98-a4c136832d54_small.webp', tier: 'Gold' },
  { id: '4', name: 'Crecia', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-2400x900_v-frms_webp_e4afed17-bd2a-46bb-bc4d-ac6e68d37be9_small.webp', tier: 'Silver' },
  { id: '5', name: 'Hiwin', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-738x150_v-fs_webp_a7752d8d-06eb-465b-bcac-89b642aeef58_small.webp', tier: 'Silver' },
  { id: '6', name: 'Spacegoods', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-800x209_v-fs_webp_5abd98f2-f13a-48f4-924d-29d9c0312265_small.webp', tier: 'Silver' },
  { id: '7', name: 'OptoSigma', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-1812x452_v-frms_webp_db352a0c-c6d2-4509-9518-9d34e1c6636a_small.webp', tier: 'Bronze' },
  { id: '8', name: 'Amulapo', logo: 'https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-666x140_v-fs_webp_c2904793-5b05-4517-8245-9c3657d440e2_small.webp', tier: 'Bronze' },
];

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', tier: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-white overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-100">
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
            alt="Support KARURA"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 py-32 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-8 tracking-tight">Support Us</h1>
            <div className="w-24 h-1 bg-mars-red mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Help us push the boundaries of Mars exploration technology
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-16" />

      {/* Why Sponsor */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Why Partner with KARURA?</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
          </div>

          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              <InfoCard
                title="Support Next-Gen Aerospace Leaders"
                subtitle="Why Sponsor Us"
                description="KARURA represents a unique opportunity to associate your brand with cutting-edge space technology and international academic excellence. Our team made history at URC 2024 as the first Japanese and international team to reach the finals — and we are just getting started. Your sponsorship directly funds rover components, competition entry fees, travel, and the development of the next generation of aerospace engineers across two countries: 46+ Engineers, 2 Countries, 3+ Years of Innovation."
                imageSrc="https://storage.googleapis.com/studio-design-asset-files/projects/RQqJYAoZOg/s-3022x3327_v-frms_webp_d339df29-d451-447f-a4a6-111324ea758e.png"
                imageAlt="KARURA Rover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-16" />

      {/* Sponsorship Tiers */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Sponsorship Tiers</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose a partnership level that works for your organization</p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
              {sponsorTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`bg-white border-2 ${tier.color} rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col`}
                >
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${tier.badge} self-start`}>
                    {tier.tier}
                  </div>
                  <div className="text-2xl font-bold text-charcoal mb-6">{tier.amount}</div>
                  <ul className="space-y-3 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-mars-red rounded-full mt-2 shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16" />

      {/* Current Sponsors */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Our Current Sponsors</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-12xl mx-auto">Thank you to the partners who make our mission possible</p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full">
              {currentSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group"
                >
                  <div className="relative h-24 w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-mars-red transition-colors duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-3 filter transition-all duration-300"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">{sponsor.tier}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16" />

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">Get In Touch</h2>
            <div className="w-16 h-1 bg-mars-red mx-auto mb-8" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interested in partnering with us? Send us a message and our team will get back to you.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl w-full px-6 md:px-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="text-5xl mb-6">🚀</div>
                  <h3 className="text-3xl font-bold text-charcoal mb-4">Message Received!</h3>
                  <p className="text-gray-600 text-lg">Thank you for your interest in supporting KARURA. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-mars-red focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-mars-red focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-mars-red focus:outline-none transition-colors"
                      placeholder="Company or university"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Sponsorship Tier of Interest</label>
                    <select
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-mars-red focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select a tier</option>
                      {sponsorTiers.map((t) => (
                        <option key={t.tier} value={t.tier}>
                          {t.tier} — {t.amount}
                        </option>
                      ))}
                      <option value="custom">Custom / In-kind contribution</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-mars-red focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your organization and how you'd like to collaborate..."
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-charcoal text-white font-medium hover:bg-mars-red transition-colors duration-300 text-lg"
                  >
                    Send Message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="py-16" />

      <Footer />
    </main>
  );
}