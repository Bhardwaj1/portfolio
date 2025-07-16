'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Phone */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
          <Phone className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-600 dark:text-gray-400">+91-7979059768</p>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
          <Mail className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-600 dark:text-gray-400">gaurav5364sam@gmail.com</p>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
          <MapPin className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Location</h3>
          <p className="text-gray-600 dark:text-gray-400">Begusarai,Bihar, India</p>
        </div>
      </div>
    </section>
  );
}
