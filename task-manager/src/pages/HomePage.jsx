import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, complete, and delete tasks with ease. Filter tasks by status and keep track of your progress.',
      icon: '📝',
      link: '/tasks',
      color: 'blue'
    },
    {
      title: 'API Integration',
      description: 'Fetch and display data from external APIs with search functionality and pagination.',
      icon: '🌐',
      link: '/api-data',
      color: 'green'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for a comfortable viewing experience.',
      icon: '🌙',
      link: '#',
      color: 'purple'
    },
    {
      title: 'Responsive Design',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices.',
      icon: '📱',
      link: '#',
      color: 'orange'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'React Router', icon: '🛣️' },
    { name: 'JSONPlaceholder API', icon: '📡' },
    { name: 'Local Storage', icon: '💾' },
    { name: 'Vite', icon: '⚡' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-600">Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          A modern React application built with Tailwind CSS, featuring task management, 
          API integration, and a beautiful responsive design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button size="lg">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/api-data">
            <Button variant="secondary" size="lg">
              Explore API Data
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200" hover>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  {feature.link !== '#' && (
                    <Link to={feature.link}>
                      <Button variant="secondary" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Built With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="text-center py-6 hover:shadow-lg transition-shadow duration-200" hover>
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {tech.name}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Manage Your Tasks
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create, organize, and track your tasks with our intuitive task manager.
            </p>
            <Link to="/tasks">
              <Button size="lg" className="w-full">
                Go to Tasks
              </Button>
            </Link>
          </Card>
          
          <Card className="p-8">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Explore API Data
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Browse posts from JSONPlaceholder API with search and pagination.
            </p>
            <Link to="/api-data">
              <Button size="lg" className="w-full">
                View API Data
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 