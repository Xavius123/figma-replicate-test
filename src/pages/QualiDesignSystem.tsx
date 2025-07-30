import React from 'react';

const QualiDesignSystem: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-100'>
      {/* Header */}
      <header className='bg-white/90 backdrop-blur-sm border-b border-gray-200 px-8 py-6 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>Q</span>
            </div>
            <div>
              <h1 className='text-xl font-bold text-gray-900'>Quali</h1>
              <p className='text-sm text-gray-600'>Design System</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <span className='text-sm text-gray-600'>
              Enterprise Ready • Open Source • React Native
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-8 py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center gap-2 mb-6'>
                <svg
                  className='w-6 h-6 text-blue-600'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.091zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  />
                </svg>
                <span className='text-sm font-medium text-blue-600 tracking-wide uppercase'>
                  Next Generation
                </span>
              </div>

              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                The Design System
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  {' '}
                  Built for Scale
                </span>
              </h1>

              <p className='text-xl text-gray-600 mb-8 leading-relaxed max-w-lg'>
                Quali delivers enterprise-grade components, design tokens, and
                tools that accelerate development while ensuring consistent,
                accessible user experiences.
              </p>

              <div className='flex flex-col gap-4 mb-12'>
                <a
                  href='#'
                  className='inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5'
                >
                  Get Started Free
                  <svg className='w-5 h-5 ml-2' viewBox='0 0 24 24' fill='none'>
                    <path
                      d='M5 12h14m-7-7l7 7-7 7'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl text-lg transition-all duration-200 hover:bg-gray-50'
                >
                  View Documentation
                </a>
              </div>

              <div className='grid grid-cols-3 gap-8'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900 mb-1'>
                    200+
                  </div>
                  <div className='text-sm text-gray-600'>Components</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900 mb-1'>
                    50+
                  </div>
                  <div className='text-sm text-gray-600'>Design Tokens</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-gray-900 mb-1'>
                    99.9%
                  </div>
                  <div className='text-sm text-gray-600'>Uptime</div>
                </div>
              </div>
            </div>

            <div>
              <div className='relative'>
                {/* Main Component Showcase */}
                <div className='bg-white rounded-2xl shadow-2xl p-8 border border-gray-200'>
                  <div className='flex items-center justify-between mb-6'>
                    <h3 className='text-lg font-semibold text-gray-900'>
                      Component Library
                    </h3>
                    <div className='flex gap-2'>
                      <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    {/* Buttons */}
                    <div className='flex gap-3'>
                      <button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                        Primary
                      </button>
                      <button className='border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium'>
                        Secondary
                      </button>
                      <button className='bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium'>
                        Tertiary
                      </button>
                    </div>

                    {/* Form Elements */}
                    <div className='space-y-3'>
                      <input
                        type='text'
                        placeholder='Search components...'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all duration-200'
                      />
                      <div className='flex gap-3'>
                        <select className='flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600'>
                          <option>Select option</option>
                        </select>
                        <div className='flex items-center gap-2'>
                          <input
                            type='checkbox'
                            className='w-4 h-4 text-blue-600 rounded focus:ring-blue-600'
                          />
                          <label className='text-sm text-gray-700'>
                            Enable notifications
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Cards */}
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200'>
                        <div className='w-8 h-8 bg-blue-500 rounded-lg mb-3'></div>
                        <h4 className='font-medium text-gray-900 mb-1'>
                          Analytics
                        </h4>
                        <p className='text-xs text-gray-600'>
                          Track performance
                        </p>
                      </div>
                      <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200'>
                        <div className='w-8 h-8 bg-purple-500 rounded-lg mb-3'></div>
                        <h4 className='font-medium text-gray-900 mb-1'>
                          Reports
                        </h4>
                        <p className='text-xs text-gray-600'>
                          Generate insights
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Design Tokens */}
                <div className='absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200'>
                  <h4 className='text-sm font-medium text-gray-900 mb-3'>
                    Design Tokens
                  </h4>
                  <div className='space-y-2'>
                    <div className='flex items-center gap-3'>
                      <div className='w-4 h-4 bg-blue-600 rounded'></div>
                      <span className='text-xs text-gray-600'>Primary</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-4 h-4 bg-purple-600 rounded'></div>
                      <span className='text-xs text-gray-600'>Secondary</span>
                    </div>
                    <div className='flex items-center gap-3'>
                      <div className='w-4 h-4 bg-gray-300 rounded'></div>
                      <span className='text-xs text-gray-600'>Neutral</span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className='absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-green-600'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <path
                          d='M5 13l4 4L19 7'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div>
                      <div className='text-sm font-medium text-gray-900'>
                        100% Coverage
                      </div>
                      <div className='text-xs text-gray-600'>
                        Accessibility tested
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-white py-20'>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Quali?
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Built for modern teams who need speed, consistency, and
              scalability without compromising on quality or accessibility.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center transition-transform duration-200 hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M7 7h10v3l4-4-4-4v3H5v6h2V7zM17 17H7v-3l-4 4 4 4v-3h12v-6h-2v4z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Design Tokens
              </h3>
              <p className='text-gray-600'>
                Centralized design decisions that scale across platforms and
                ensure visual consistency.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center transition-transform duration-200 hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M16 18l2-2h3a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h3l2 2v-2zm0-2V8H8v8h8z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Developer First
              </h3>
              <p className='text-gray-600'>
                TypeScript support, comprehensive docs, and CLI tools for
                seamless integration.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center transition-transform duration-200 hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Lightning Fast
              </h3>
              <p className='text-gray-600'>
                Optimized components and tree-shaking support for minimal bundle
                sizes.
              </p>
            </div>

            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center transition-transform duration-200 hover:scale-105'>
              <div className='w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-white'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                Enterprise Ready
              </h3>
              <p className='text-gray-600'>
                WCAG 2.1 AA compliant, security audited, and enterprise support
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 py-20'>
        <div className='max-w-4xl mx-auto text-center px-8'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
            Ready to Transform Your Design Workflow?
          </h2>
          <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto'>
            Join leading companies who trust Quali to deliver consistent,
            accessible, and scalable user experiences.
          </p>

          <div className='flex flex-col gap-4 justify-center mb-12'>
            <a
              href='#'
              className='inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-xl text-lg transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5'
            >
              Start Free Trial
              <svg className='w-5 h-5 ml-2' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M5 12h14m-7-7l7 7-7 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-xl text-lg transition-all duration-200 hover:bg-white/10'
            >
              Book a Demo
            </a>
          </div>

          <div className='flex items-center justify-center gap-8 text-blue-200 flex-wrap'>
            <div className='flex items-center gap-2 text-sm'>
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M5 13l4 4L19 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Free 30-day trial</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M5 13l4 4L19 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <svg className='w-4 h-4' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M5 13l4 4L19 7'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span>Enterprise support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-16'>
        <div className='max-w-7xl mx-auto px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>Q</span>
                </div>
                <div>
                  <h3 className='text-xl font-bold'>Quali</h3>
                  <p className='text-gray-400'>Design System</p>
                </div>
              </div>
              <p className='text-gray-400 max-w-md mb-6'>
                The enterprise design system that scales with your business.
                Built for teams who demand excellence.
              </p>
              <div className='flex gap-4'>
                <a
                  href='#'
                  className='px-4 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm hover:bg-gray-800 transition-colors'
                >
                  GitHub
                </a>
                <a
                  href='#'
                  className='px-4 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm hover:bg-gray-800 transition-colors'
                >
                  Twitter
                </a>
                <a
                  href='#'
                  className='px-4 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm hover:bg-gray-800 transition-colors'
                >
                  Discord
                </a>
              </div>
            </div>

            <div>
              <h4 className='font-semibold mb-4'>Product</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Components
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Design Tokens
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    CLI Tools
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Figma Plugin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold mb-4'>Resources</h4>
              <ul className='space-y-2 text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Community
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 Quali Design System. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm text-gray-400 mt-4 md:mt-0'>
              <a href='#' className='hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QualiDesignSystem;
