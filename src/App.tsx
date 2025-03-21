import './App.css';

function Homepage() {
  return (
    <div className="flex flex-col overflow-auto bg-gray-700 text-gray-900 bg-white  p-4 flex justify-between items-center  top-30 left-0 right-0 z-10 w-full">
      <header className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 w-full">
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

      <section
  id="home"
  className=" h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg')",
    backgroundSize: "100vw 100vh", // Forces full width & height
  }}
>
  {/* Overlay for readability */}
  <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center px-6">
    <h2 className="text-5xl font-bold text-white drop-shadow-lg">Welcome to ArtGallery</h2>
    <p className="text-xl text-gray-900 mt-4 max-w-2xl">
      Discover and appreciate stunning art pieces from talented artists around the world.
    </p>
    <a href="#gallery" className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition">
      Explore Gallery
    </a>
  </div>
</section>
<br></br>
<br></br>
      {/* Gallery Section */}
      <section id="gallery" className="py-20  text-center">
  <h2 className="text-2xl font-bold text-black mb-8">Gallery</h2>
  <br></br>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6">
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Art 1" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Art 2" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="Art 3" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="Art 4" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Art 5" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="Art 6" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="Art 7" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="Art 8" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="Art 9" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="Art 10" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="Art 11" />
    </div>
    <div>
      <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="Art 12" />
    </div>
  </div>
</section>

<br></br>
    <br></br>  
    {/* about */}
    <section
  id="about"
  className="h-screen w-full py-20 px-6 bg-cover bg-center text-center"
  style={{
    backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg')", 
    backgroundSize: "cover",
  }}
>
  {/* Overlay for better readability */}
  <div className="h-screen py-20  text-center flex flex-col items-center justify-center">
  <div className="relative z-10 bg-gray-200 bg-opacity-80 p-8">
    <h2 className="text-2xl font-semibold text-black mb-6 drop-shadow-lg">About Us</h2>
    <p className="max-w-4xl mx-auto text-xl text-black max-w-3xl mx-auto">
      We are an art gallery that showcases a variety of beautiful art pieces from emerging and established artists. Our goal is to bring art closer to the community and inspire creativity.
    </p>
  </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
        <p className="text-xl text-gray-700 mb-4">We'd love to hear from you! Reach out to us via the contact form or our social media channels.</p>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="mb-4 p-3 w-full rounded bg-gray-200 text-black" />
          <input type="email" placeholder="Your Email" className="mb-4 p-3 w-full rounded bg-gray-200 text-black" />
          <textarea placeholder="Your Message" className="mb-4 p-3 w-full rounded bg-gray-200 text-black" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"> Send Message </button>
        </form>
      </section>
    </div>
  );
}

export default Homepage;
