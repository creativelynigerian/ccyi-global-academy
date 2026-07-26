export default function Moodle() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Moodle</h1>
      <p>Covenant University's learning management system.</p>
      <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
        <h2 className='text-xl font-semibold'>Access Moodle</h2>
        <p className='mt-2'>Access your courses, submit assignments, and participate in discussions.</p>
        <a 
          href='https://moodle.covenantuniversity.edu.ng' 
          target='_blank' 
          rel='noopener noreferrer'
          className='inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
        >
          Open Moodle →
        </a>
      </div>
    </div>
  );
}
