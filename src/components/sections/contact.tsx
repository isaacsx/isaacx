"use client";

import { SiDiscord, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center p-4 mb-10"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-4xl bg-gray-800/30 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-gray-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">
          Ready to Work Together?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's turn your ideas into reality
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-300">contact@isaacx.me</p>
          </div>
          <div className="flex flex-col items-center">
            <SiWhatsapp className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-300">+52 33 1235 4484</p>
          </div>
          <div className="flex flex-col items-center">
            <SiDiscord className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-gray-300">@isaacx5757</p>
          </div>
        </div>

        <Button size="lg" className="px-8 py-6 text-lg">
          <Link href="mailto:contact@isaacx.me">Get in Touch</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
