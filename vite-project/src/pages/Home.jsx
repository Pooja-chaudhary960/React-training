import React from "react";
import image1 from "../assets/letslearn.jpg";
import image2 from "../assets/image2.webp";
import CourseCard from "../components/CourseCard";
import Logo3 from "../assets/logo3.png";
import Freelance from "../assets/freelance.webp";
import { Briefcase, Globe, DollarSign, BadgeHelp } from "lucide-react";

const Home = () => {
  const course = [
    {
      image: image1,
      title: "Digital Marketing Course",
      description:
        "Master SEO, social media marketing, email marketing, Google Ads, content strategy, analytics, and practical digital marketing campaigns.",
      duration: "2.5 Months",
      enrolled: "100+ enrolled",
      price: "NRP. 12,000 /-",
    },
    {
      image: image1,
      title: "UI/UX Design Course",
      description:
        "Learn UI/UX design using Figma, Canva, wireframing, prototyping, design principles, and user-centered design with practical projects.",
      duration: "2.5 Months",
      enrolled: "100+ enrolled",
      price: "NRP. 12,000 /-",
    },
    {
      image: image1,
      title: "MERN Stack Training",
      description:
        "Build modern web applications using MongoDB, Express.js, React, Node.js, Next.js, REST APIs, authentication, and deployment techniques.",
      duration: "3 Months",
      enrolled: "130+ enrolled",
      price: "NRP. 25,000 /-",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between bg-amber-400 px-16 py-12 min-h-screen border-2">
        {/* Left Side */}
        <div className="w-1/2 space-y-5">
          <div>
            <h1 className="text-2xl font-semibold">
              Trusted by 4000+ Students
            </h1>
          </div>

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Best IT Training Institute in Nepal
            </h1>
          </div>

          <div>
            <p className="text-lg leading-8 text-gray-100">
              LetsLearn is the best computer training and IT training institute
              in Kathmandu, Nepal established in 2015 with the goal of providing
              professional IT training and computer training in Kathmandu and
              various parts of Nepal. We are dedicated to the goal of educating
              and enhancing IT skills through rigorous computer training based
              on our latest computer courses & IT courses in Nepal. Get expert
              guidance from experienced trainers along with internship
              opportunities and verified certification to experience the best
              learning experience.
            </p>
          </div>

          <div className="flex gap-5">
            <button className="bg-blue text-white-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Enroll Now
            </button>

            <button className="border border-black px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600">
              View All Courses
            </button>
          </div>

          <div className="flex gap-16 pt-8">
            <div>
              <h1 className="text-4xl text-orange-100 font-bold">4000+</h1>
              <p>Student Trained</p>
            </div>

            <div>
              <h1 className="text-4xl font-bold">98%</h1>
              <p>Success Rate</p>
            </div>

            <div>
              <h1 className="text-4xl font-bold">10+</h1>
              <p>Year Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-center">
          <img
            src={image1}
            alt="Let's Learn image"
            className="w-[500px] rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className="py-16 px-10 bg-gray-100">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Complete IT Training in Nepal
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Learn from the latest courseware physically or online with expert
            mentorship, practical training to stand yourself in the front of
            your IT sector.
          </p>
        </div>

        <div className="flex items-center justify-between gap-12">
          {/* Left Side */}
          <div className="w-1/2 flex justify-center">
            <img
              src={image2}
              className="w-[500px] rounded-xl shadow-2xl"
              alt="Training"
            />
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
              WHY LETSLEARN IT TRAINING INSTITUTE?
            </h1>

            <p className="text-gray-700 leading-8 mb-6">
              LetsLearn is committed to building <strong>"Future Ready"</strong>{" "}
              IT professionals. As one of the best IT training institutes in
              Nepal, we provide professional computer classes for various IT
              courses with expert trainers providing hands-on training on each
              subject to prepare students for today's demanding tech industry.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
              <li>Practical, project-based learning approach</li>
              <li>Modern computer labs with the latest tools</li>
              <li>Industry-recognized courses and IT certifications</li>
              <li>Internship opportunities and career support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        {/* Heading Section */}
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Popular Computer & IT Courses
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto leading-8">
            We provide in-person and online IT and computer classes in Nepal
            taught by experienced instructors. Our training includes Q&A
            sessions, weekly tests, practical projects, and personalized
            feedback to help you build real-world IT skills.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-14 px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {course.map((items, index) => (
              <CourseCard
                key={index}
                Image={items.image}
                Title={items.title}
                Description={items.description}
                Duration={items.duration}
                Enrolled={items.enrolled}
                Price={items.price}
              />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#24365C] to-[#55688D] py-10 border-2 border-black-500 mt-10">
          <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
            {/* Left Content */}
            <div className="w-[48%]">
              <h1 className="text-5xl font-bold text-black leading-tight">
                We Are Affiliated to
                <br />
                American Institute of Technology
              </h1>

              <p className="mt-8 text-gray-300 text-xl leading-9">
                Our graduates receive internationally recognized certifications,
                opening doors to global career opportunities and top freelancing
                platforms.
              </p>
            </div>

            {/* Center Logo */}
            <div className="w-[15%] flex justify-center">
              <div className="bg-white rounded-2xl shadow-xl px-10 py-8">
                <img
                  src={Logo3}
                  alt="AIT Logo"
                  className="w-72 h-auto object-contain"
                />
              </div>
            </div>

            {/* Right Button */}
            <div className="w-[24%] flex justify-end">
              <button className="bg-[#FF7A1A] hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition duration-300">
                Get Certified →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        {/* Heading */}
        <div className="text-center">
          <p className="text-blue-600 font-semibold tracking-widest uppercase">
            — Freelancing Skills
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Start Your Freelancing Journey
          </h1>

          <p className="text-gray-500 text-xl mt-6">
            Learn, Earn & Grow with real-world freelancing skills
          </p>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto mt-16 flex justify-between gap-8">
          {/* Left */}
          <div className="w-1/2 flex flex-wrap gap-6">
            {/* Card */}
            <div className="w-[48%] bg-[#FFF5EE] rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Briefcase />
              </div>

              <h2 className="text-3xl font-bold mt-6">Real Projects</h2>

              <p className="text-gray-500 mt-4 text-xl leading-9">
                Work on live client projects and build a strong portfolio.
              </p>
            </div>

            {/* Card */}
            <div className="w-[48%] bg-[#FFF5EE] rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Globe />
              </div>

              <h2 className="text-3xl font-bold mt-6">Global Platforms</h2>

              <p className="text-gray-500 mt-4 text-xl leading-9">
                Learn Fiverr, Upwork & Freelancer from scratch.
              </p>
            </div>

            {/* Card */}
            <div className="w-[48%] bg-[#FFF5EE] rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <DollarSign />
              </div>

              <h2 className="text-3xl font-bold mt-6">Earn Online</h2>

              <p className="text-gray-500 mt-4 text-xl leading-9">
                Turn your skills into real income step-by-step.
              </p>
            </div>

            {/* Card */}
            <div className="w-[48%] bg-[#FFF5EE] rounded-2xl shadow-lg p-8">
              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <BadgeHelp />
              </div>

              <h2 className="text-3xl font-bold mt-6">Mentorship</h2>

              <p className="text-gray-500 mt-4 text-xl leading-9">
                Get expert guidance until you land your first client.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2">
            <img
              src={Freelance}
              alt=""
              className="rounded-2xl h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-orange-600 text-black text-lg font-semibold px-8 py-3 border rounded-lg transition duration-300">
            Start Learning Today
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
