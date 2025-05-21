// app/projects/page.tsx

'use client'

import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Low-Resource Hindi Language Modeling',
    description: 'Custom tokenizers and transformer-based models for efficient Hindi NLP tasks in constrained environments.',
    tech: ['Python', 'HuggingFace', 'Subword Tokenization', 'Transformers'],
    github: 'https://github.com/rohitkrtiwari/Low-Resource-NLP-Indian-Language-LLMs',
  },
  {
    title: 'Real-Time Vehicle Tracking System',
    description: 'GPS/GSM-based tracking using ESP32 with real-time data visualization using Mapbox and analytics via ThingSpeak.',
    tech: ['ESP32', 'GPS', 'GSM', 'Mapbox', 'ThingSpeak'],
    github: 'https://github.com/rohitkrtiwari/real-time-vehicle-tracking-system',
  },
  {
    title: 'ISSAT - ISRO Satellite Tracker',
    description: '3D/2D visualization of satellite orbits with real-time data from ISRO and N2YO APIs. Flask + MySQL backend.',
    tech: ['Flask', 'MySQL', 'Three.js', 'API Integration'],
    github: 'https://github.com/rohitkrtiwari/ISSAT-ISRO-Satellite-Tracker',
  },
  {
    title: 'Electrozon E-Commerce Site',
    description: 'Full-stack PHP-based electronics shopping platform built from scratch for academic deployment.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/rohitkrtiwari/electrozon',
  },
  {
    title: 'LSB Image Steganography in C',
    description: 'Bit-level image steganography tool for hiding messages in 24-bit BMP images using LSB technique.',
    tech: ['C', 'Image Processing', 'Steganography'],
    github: 'https://github.com/rohitkrtiwari/lsb-image-steganography',
  },
]

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <div key={idx} className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition hover:shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub repository"
                className="text-neutral-500 hover:text-blue-500 transition"
              >
                <ArrowUpRightIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
