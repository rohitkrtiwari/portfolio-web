'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Low-Resource Hindi Language Modeling',
    description: 'Custom tokenizers and transformer-based models for efficient Hindi NLP tasks in constrained environments.',
    tech: ['Python', 'Data Science', 'Research'],
    github: 'https://github.com/rohitkrtiwari/Low-Resource-NLP-Indian-Language-LLMs',
  },
  {
    title: 'Real-Time Vehicle Tracking System',
    description: 'GPS/GSM-based tracking using ESP32 with real-time data visualization using Mapbox and analytics via ThingSpeak.',
    tech: ['C/C++', 'Embedded', 'PHP'],
    github: 'https://github.com/rohitkrtiwari/real-time-vehicle-tracking-system',
  },
  {
    title: 'ISSAT - ISRO Satellite Tracker',
    description: '3D/2D visualization of satellite orbits with real-time data from ISRO and N2YO APIs. Flask + MySQL backend.',
    tech: ['Python', 'Web'],
    github: 'https://github.com/rohitkrtiwari/ISSAT-ISRO-Satellite-Tracker',
  },
  {
    title: 'Electrozon E-Commerce Site',
    description: 'Full-stack PHP-based electronics shopping platform built from scratch for academic deployment.',
    tech: ['PHP', 'Web', 'e-Commerce'],
    github: 'https://github.com/rohitkrtiwari/ELECTROZON-Ecommerce-website-/',
  },
  {
    title: 'Chronic Kidney Disease Prediction',
    description: 'A Web Based Kidney Disease prediction app implemented on Random Forest Algorithm and deployed on Flask.',
    tech: ['Python', 'Data Science'],
    github: 'https://github.com/rohitkrtiwari/Chronic-Kidney-Disease-Prediction',
  },
  {
    title: 'Book Recommendation System',
    description: 'research-driven project aimed at exploring various recommendation algorithms.',
    tech: ['Python', 'Data Science', 'Research'],
    github: 'https://github.com/rohitkrtiwari/book-recommendation-system',
  },
  {
    title: 'Social-Media-web-Application',
    description: 'A Social Media Web Application Implemented on Flask on which user can post their daily lives and connect with the rest the world.',
    tech: ['Python', 'Web'],
    github: 'https://github.com/rohitkrtiwari/STOCKET-Social-Media-Web-App',
  },
  {
    title: 'BITLY - Influencers Online Presence',
    description: 'Bitly is an initiative for leading youtube creaters to share their other than video contents with thier audience.',
    tech: ['PHP', 'Web'],
    github: 'https://github.com/rohitkrtiwari/BITLY-Influencers-Online-Presence-',
  },
  {
    title: 'PasswordManager',
    description: 'A Command Line Password Manager Utility written in c++ with sqlite3 database.',
    tech: ['C/C++', 'CLI'],
    github: 'https://github.com/rohitkrtiwari/PasswordManager',
  },
  {
    title: 'DES & Stegnograohy',
    description: 'DES and Stegnography Implementaion from scratch in C',
    tech: ['C/C++', 'CLI'],
    github: 'https://github.com/rohitkrtiwari/Information-Security-CS-5-34-MO/blob/main/DES/DES.c',
  },
]

// Extract all unique tags
const allTags = Array.from(
  new Set(projects.flatMap(project => project.tech))
).sort()

export default function ProjectsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    )
  }

  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project =>
        selectedTags.every(tag => project.tech.includes(tag))
      )

  return (
    <main className="max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
        My Projects
      </h1>

      {/* Tag Filter - unchanged */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-xs rounded-full transition-all 
                        ${selectedTags.includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700'
                        }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <div className="text-center">
            <button 
              onClick={() => setSelectedTags([])}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear filters ({selectedTags.length})
            </button>
          </div>
        )}
      </div>

      {/* Updated Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 transition hover:shadow-md h-full flex flex-col"
          >
            <div className="flex-grow">
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
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all
                            ${selectedTags.includes(tag)
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300'
                            }`}
                  onClick={() => toggleTag(tag)}
                  style={{ cursor: 'pointer' }}
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
