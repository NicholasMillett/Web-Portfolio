'use client';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { About } from '../components/About';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <div className="pt-16 md:pt-24">
        <About />
        
        {/* Additional sections could be added here */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
                <div className="mt-4 h-1 w-20 bg-blue-600"></div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="prose max-w-none">
                  <p>
                    My path into web development began during my college years when I first 
                    discovered HTML and CSS. What started as a hobby quickly grew into a passion 
                    as I delved deeper into JavaScript and modern frameworks.
                  </p>
                  
                  <p>
                    After graduating with a degree in Computer Science, I joined a startup where 
                    I had the opportunity to work on a variety of projects and technologies. This 
                    experience taught me how to adapt quickly, work efficiently in a team, and 
                    deliver quality results under tight deadlines.
                  </p>
                  
                  <p>
                    In recent years, I've focused on mastering modern JavaScript frameworks like 
                    React and Next.js, while also developing a strong understanding of backend 
                    technologies. I'm passionate about creating seamless user experiences and 
                    building applications that are both beautiful and functional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
} 