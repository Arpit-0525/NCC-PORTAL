"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

type Item = {
  img: string;
  title: string;
  description: string;
};

const data: Record<string, { title: string; description: string; items: Item[] }> = {
  sports: {
    title: "Sports",
    description: "NCC cadets actively participate in various sports events at national and international levels.",
    items: [
      {
        img: "/images/sports1.jpg",
        title: "Football Championship",
        description: "Cadets competing in inter-unit football tournament.",
      },
      {
        img: "/images/sports2.jpg",
        title: "Athletics",
        description: "Track and field events showcasing endurance and speed.",
      },
    ],
  },

  camps: {
    title: "National Camps",
    description: "Cadets attend camps for discipline, training, and leadership development.",
    items: [
      {
        img: "/images/camps1.jpg",
        title: "Republic Day Camp",
        description: "Prestigious RDC camp held in Delhi.",
      },
    ],
  },

  achievements: {
    title: "Achievements",
    description: "Recognizing excellence and accomplishments of NCC cadets.",
    items: [
      {
        img: "/images/achievements1.jpg",
        title: "Award Ceremony",
        description: "Cadets receiving national awards.",
      },
    ],
  },

  training: {
    title: "Training",
    description: "Rigorous training programs to build discipline and leadership.",
    items: [
      {
        img: "/images/training1.jpg",
        title: "Obstacle Training",
        description: "Physical endurance and obstacle drills.",
      },
    ],
  },

  social: {
    title: "Social Activities",
    description: "Community service initiatives led by NCC cadets.",
    items: [
      {
        img: "/images/social1.jpg",
        title: "Cleanliness Drive",
        description: "Swachh Bharat initiative participation.",
      },
    ],
  },

  adventure: {
    title: "Adventure",
    description: "Adventure activities like trekking, mountaineering, and expeditions.",
    items: [
      {
        img: "/images/adventure1.jpg",
        title: "Mountain Expedition",
        description: "Cadets participating in high-altitude expeditions.",
      },
    ],
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  const section = data[category];

  const [selected, setSelected] = useState<Item | null>(null);

  if (!section) {
    return <div className="p-6">Section not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="h-64 bg-blue-900 flex items-center justify-center text-white text-center px-4">
        <div>
          <h1 className="text-3xl font-bold">{section.title}</h1>
          <p className="mt-2 text-gray-200 max-w-xl">
            {section.description}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 max-w-6xl mx-auto">

        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Activities & Highlights
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {section.items.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelected(item)}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <img
                src={item.img}
                className="w-full h-48 object-cover"
              />

              <div className="p-3">
                <p className="font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden"
          >
            <img
              src={selected.img}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {selected.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {selected.description}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}