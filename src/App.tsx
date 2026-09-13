import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import type { ITechnology } from './types/technology';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechnologyCard } from './components/TechnologyCard';
import { StackSidebar } from './components/StackSidebar';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [stack, setStack] = useState<ITechnology[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/technologies.json');
        if (!res.ok) throw new Error('Failed to fetch technologies');
        const data: ITechnology[] = await res.json();
        setTechnologies(data);
      } catch (error) {
        toast.error('Failed to load technologies dataset.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (tech: ITechnology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedItem = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removedItem) {
      toast.info(`${removedItem.name} removed from stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} />
      
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 space-y-4">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 text-sm font-medium">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">Explore Technologies</h2>
                <p className="text-sm text-gray-500">Pick frameworks and services to compose your stack</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <TechnologyCard
                    key={tech.id}
                    technology={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={handleAddToStack}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <StackSidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;