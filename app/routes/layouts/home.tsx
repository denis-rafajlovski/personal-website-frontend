import { Outlet } from 'react-router';
import Hero from '~/components/Hero';

const HomeLayout = () => {
  return (
    <>
      <Hero name="Denis" />
      <section className="max-w-6xl mx-auto px-6 my-6">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
