import { section } from 'framer-motion/client';
import type { Project } from '~/types';
import ProjectCard from './ProjectCard';

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  if (projects.length === 0) return null;

  // console.log('Received projects:', projects);
  // console.log('Is array:', Array.isArray(projects));

  // const featured = Array.isArray(projects)
  //   ? projects.filter((p) => p.featured).slice(0, count)
  //   : [];

  // const featured = projects.filter((p) => p.featured).slice(0, count);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
