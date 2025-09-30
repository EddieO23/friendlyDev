import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[70vh] px-6 text-white'>
      <h1 className='text-6xl font-extrabold text-white mb-2'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-100 mb-2'>
        Page not found
      </h2>
      <p className='text-gray-400 mb-6 max-w-md'>
        The page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition'
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
