"use client";

import { useState } from "react";

const Projects = () => {
  const [page] = useState(1);

  const projects = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/1200/900?random=${i + 1}`,
    title: `Project ${i + 1}`,
  }));

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb + Title */}
        <div className="text-center">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            Home &nbsp;&gt;&nbsp; Work
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-12">
            Portfolio
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="overflow-hidden bg-gray-50">
              <div className="aspect-[4/3] w-full bg-gray-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav
            className="inline-flex items-center gap-3"
            aria-label="Pagination"
          >
            <button className="w-10 h-10 rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
              &lt;
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`w-10 h-10 rounded border border-gray-200 flex items-center justify-center font-semibold ${
                  n === page
                    ? "bg-yellow-300 text-white border-transparent"
                    : "bg-white text-gray-700"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="w-10 h-10 rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Projects;
