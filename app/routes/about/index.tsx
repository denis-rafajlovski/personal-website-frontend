const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-5 bg-gray-900 rounded-2xl">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-40 h-55 rounded-full object-cover border-4 border-blue-500 shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, i'm Denis 👋{' '}
          </h1>
          <p className="text-gray-300 text-lg">
            I’m a passionate web developer who enjoys turning ideas into clean,
            intuitive, and engaging digital experiences. Coming from an
            accounting background, I’ve traded spreadsheets for code — combining
            analytical thinking with creativity to build things that are both
            functional and enjoyable to use.
          </p>
        </div>
      </div>
      {/* Bio Section */}

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to turn complex ideas into simple digital experiences
          that people genuinely enjoy using.
        </p>
      </div>

      {/* Tech Stack */}

      <h2 className="text-2xl font-semibold text-white mb-4"> 🚀 Tech i Use</h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {[
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Tailwind CSS',
          'TypeScript',
          'Git & GitHub',
        ].map((tech) => (
          <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
