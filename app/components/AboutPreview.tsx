import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-100 dark:bg-gray-900 rounded-2xl">
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="w-30 h-45 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          👋 About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4 max-w-4xl">
          I'm Denis - a self-taught developer passionate about building friendly
          digital experiences.
        </p>
        <Link
          to="/about"
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
