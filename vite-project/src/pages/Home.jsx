import React from "react";
import image1 from "../assets/letslearn.jpg";
import image2 from "../assets/image2.webp";

const Home = () => {
    const course=[
            {
            image:Image,
            title:"Software Development Course in Nepal",
            Description:"Learn full-stack software development with Java, C++, Python, .NET and other technologies.",
            Duration:"2.5 Months",
            Enrolled:"120+ enrolled",
            Price:"NRP. 18000 /-"
            },
           {
            image:Image,
            title:"Digital Marketing Course",
            Description:"Learn Digital Marketing including SEO, email Marketing, social media marketing .",
            Duration:"2.5 Months",
            Enrolled:"100+ enrolled",
            Price:"NRP. 12000 /-"
            },
            {
            image:Image,
            title:"UI/UX Design",
            Description:"Learn UI/UX Design including Figma and other Canva Tools.",
            Duration:"2.5 Months",
            Enrolled:"100+ enrolled",
            Price:"NRP. 12000 /-"
            },

          ]
  return (
    <>
      <div className="flex items-center justify-between bg-blue-600 px-16 py-12 min-h-screen">
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

      <div>
        <div>
          <h1 className="text-4xl">Our Popular Computer & IT Courses</h1>
          <p>
            We provide in-person and online IT and computer class in Nepal
            taught by proficient educators. IT training classes at LetsLearn
            include Q&A sessions, weekly tests, projects with personal feedbacks
            to guide your IT & computer training development.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
