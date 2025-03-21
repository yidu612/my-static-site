import "./App.css";

function Homepage() {
  return (
    <div style={{ height: "87vh" }}
    className="flex flex-col gap-3 overflow-auto bg-gray-700 text-gray-900">
      <header className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <h1 className="text-2xl font-bold">ArtGallery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="relative  bg-cover bg-center flex items-center justify-center text-white text-center" >
        <div className="bg-black bg-opacity-50 p-12 rounded-lg">
          <h2 className="text-4xl font-bold">Discover Timeless Art</h2>
          <p className="text-lg mt-2">Experience creativity in its purest form</p>
        </div>
      </section>

    
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 min-h-screen">

          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
            </div>
          </div>
        </div>
      

      <section id="about" className="p-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="text-center mt-4">ArtGallery is a platform showcasing beautiful and inspiring artworks from various artists worldwide.</p>
      </section>

      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="text-center mt-4">Have inquiries? Reach out to us at <a href="mailto:info@artgallery.com" className="text-blue-600">info@artgallery.com</a></p>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p>&copy; 2025 ArtGallery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
