'use client';

import React, { useState, useEffect } from 'react';
import Art from './components/art';

export default function Home() {
  const [allImages, setAllImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const images = await response.json();
        setAllImages(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        {allImages.map((item, index) => (
          <Art key={index} props={item} />
        ))}
      </div>
    </main>
  );
}
