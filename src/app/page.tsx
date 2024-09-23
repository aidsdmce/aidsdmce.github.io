export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <main className="flex flex-col items-center gap-8">
        {/* Logo */}
         
        {/* Coming Soon Message */}
        <h1 className="text-4xl font-bold text-gray-800">AIDS - DMCE</h1>
        <p className="text-xl text-gray-600">Our website is coming soon. Stay tuned!</p>

        {/* Social Media Links (Optional) */}
        <div className="flex gap-4 mt-8">
          
         
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16">
        <p className="text-gray-500">&copy; 2024 AIDS - DMCE. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
