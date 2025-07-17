'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
       <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, amount: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex-1"
            >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Phone */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <Phone className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Phone</h3>
          <p className="text-gray-600 dark:text-gray-400">+91-7979059768</p>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <Mail className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Email</h3>
          <p className="text-gray-600 dark:text-gray-400">gaurav5364sam@gmail.com</p>
        </div>

        {/* Location */}
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg p-6 text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <MapPin className="mx-auto mb-3 text-purple-500" size={32} />
          <h3 className="text-lg font-semibold mb-1">Location</h3>
          <p className="text-gray-600 dark:text-gray-400">Begusarai,Bihar, India</p>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
