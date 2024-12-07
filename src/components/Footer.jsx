import logo from "../assets/logo.png";

function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Marketing", path: "/services/marketing" },
        { name: "Graphic Design", path: "/services/graphic-design" },
        { name: "App Development", path: "/services/app-development" },
        { name: "Web Development", path: "/services/web-development" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "History", path: "/history" },
        { name: "Our Team", path: "/our-team" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQs", path: "/faqs" },
        { name: "Contact", path: "/contact" },
        { name: "Live Chat", path: "/live-chat" },
      ],
    },
  ];

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Subscribe to our newsletter!
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="biruk@gmail.com"
              />
              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Send
              </button>
            </div>
          </form>
        </div>

        <div className=" grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-4">
            
            <div className="flex flex-col items-center justify-center ">
              <a href="/" className="">
                <img src={logo} width={80} height={30} alt="Sheger city logo" />
              </a>
              <strong className="font-medium text-gray-900">Sheger city administration</strong>
              <p className="mt-6 space-y-1">
              Shaggar city is composed of 12 wereda and kebele’s where a larger number of people reside in. It’s based on the city addis ababa and surrounds it.
              </p>
            </div>

            {/* Other Sections Using Array */}
            {footerSections.map((section, index) => (
              <div key={index} className="mt-14">
                <strong className="font-medium text-gray-900">{section.title}</strong>
                <ul className="mt-6 space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a className="text-gray-700 transition hover:text-gray-700/75" href={link.path}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2024. All rights reserved.
            <br />
            Created with
            <a href="#" className="text-gray-700 underline transition hover:text-gray-700/75"> aastu </a>

          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
