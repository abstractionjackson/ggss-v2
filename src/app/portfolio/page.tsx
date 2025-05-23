import PageHero from '@/components/hero/PageHero';
import PortfolioCardContainer from '@/components/portfolio/PortfolioCardContainer';

export default function PortfolioPage() {
  return (
    <>
      <PageHero heading="Portfolio" />
      <main className="min-h-screen flex flex-col items-center pt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Work
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mb-8">
          Explore a selection of projects that showcase our expertise in web development, design, and digital solutions.
        </p>
        <div className='px-4'>
        <PortfolioCardContainer />
        </div>
      </main>
    </>
  );
}
