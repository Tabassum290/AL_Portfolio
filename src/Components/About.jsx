import React, { useEffect } from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "/src/image/banner.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <section id="about" className="w-full about py-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side: Image + Icons */}
        <div
          className="w-full flex flex-col items-center lg:items-start"
          data-aos="fade-right"
        >
          <img
            src={image}
            alt="Psychologist"
            className="w-80 h-auto object-contain items-center my-16 rounded-2xl shadow-lg mb-6"
          />
          <div
            className="flex justify-center lg:justify-start gap-6 bg-gray-200 -mt-10 lg:ml-24 p-4 rounded-md w-36"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.facebook.com/share/1CvchLAs9a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded-md transition">
                Facebook
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/al-imran-bhuiya-a634a0272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs py-1 px-2 rounded-md transition">
                LinkedIn
              </span>
            </a>
            <a
              href="https://wa.me/8801740366889?text=Hello%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-600 text-2xl cursor-pointer hover:text-blue-800 transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Right side: Text Section */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-purple-600 mb-4">About Me</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Who I Am</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Psychologist with a strong focus on mental health and behavior
                support
              </li>
              <li>Experienced ABA (Applied Behavior Analysis) Therapist</li>
              <li>Former Research Assistant with UNESCO Bangladesh</li>
              <li>Dedicated to providing ethical, evidence-based psychological care</li>
              <li>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                  Gmail: alimranbhuiya@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">What I Do</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Help individuals manage stress, anxiety, and emotional challenges</li>
              <li>Support behavioral development through structured ABA techniques</li>
              <li>Offer personalized therapy plans tailored to each client’s needs</li>
              <li>Create a safe, confidential, and non-judgmental space for healing</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">My Approach</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Client-centered, empathetic, and research-informed</li>
              <li>Combines scientific understanding with practical therapeutic tools</li>
              <li>Focus on long-term emotional well-being and healthy behavior change</li>
              <li>Encourages personal growth, resilience, and self-awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
