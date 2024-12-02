import React from 'react';
import { Sparkles } from "lucide-react";

export  default function HeroBadge() {
  return (
    <div className=" inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/40">
      <Sparkles className="w-4 h-4 text-teal-400" />
      <span className="text-sm text-gray-300">Revolutionary Blockchain Technology</span>
    </div>
  );
}