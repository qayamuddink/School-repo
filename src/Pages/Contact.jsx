import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">📞 Contact Us</h2>
        <p className="text-gray-600 mt-3">
          Have any questions? Feel free to reach out to us. Our team is always here to assist you.
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-12 text-gray-700">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-500">📍 Address</h3>
          <p>XYZ Road, Aligarh, Uttar Pradesh, India</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-500">📧 Email</h3>
          <p>info@navychildrenschool.com</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-blue-500">📞 Phone</h3>
          <p>+91-7351003754</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold text-blue-500 text-center">📩 Send a Message</h3>
        <form className="mt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md mb-4"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md mb-4"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-md mb-4"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Google Map (Replace src with actual location link) */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-blue-500 text-center">📍 Find Us on Map</h3>
        <div className="mt-4">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://maps.google.com/maps?q=Aligarh,+Uttar+Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
