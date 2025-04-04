'use client';

export const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left column with section title */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600"></div>
          </div>

          {/* Right column with content */}
          <div className="lg:col-span-3">
            <div className="prose max-w-none">
              <p>
                I'm a passionate web developer with a focus on creating clean, user-friendly, and 
                performant web applications. With a background in both design and development,
                I bring a unique perspective to every project I work on.
              </p>
              
              <p>
                My journey in web development started 5 years ago, and since then, I've worked 
                on a variety of projects ranging from small business websites to complex web 
                applications. I believe in writing clean, maintainable code and staying up-to-date 
                with the latest technologies and best practices.
              </p>

              <p>
                When I'm not coding, you can find me exploring new hiking trails, reading science fiction, 
                or experimenting with new recipes in the kitchen.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 