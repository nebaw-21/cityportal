import Footer from "../components/Footer";
import HorizontalCard from "../components/horzontalCard";
import MaxWidth from "../components/MaxWidth";
import NavBar from "../components/NavBar";
import Gallery from "../components/Gallary";

function NewsPage() {
  return (
    <>
      <MaxWidth>
        <NavBar />

        {/* Main News Section */}
        <div className="py-8 px-4 sm:px-8 lg:px-16">
          {/* Header Section */}
          <header className="mb-6 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">Latest</h2>
            <h1 className="underline text-xl sm:text-2xl ml-0 sm:ml-2 font-semibold">News</h1>
          </header>

          <section className="bg-white shadow-md p-4 sm:p-8 rounded-lg">
            {/* News Image */}
            <img
              src="https://via.placeholder.com/800x400"
              alt="News Image"
              className="w-full h-48 sm:h-60 object-cover rounded-md mb-4"
            />

            {/* News Details */}
            <div className="text-green-600 font-semibold text-base sm:text-lg mb-2">Green</div>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h3 className="font-bold text-base sm:text-lg">New Investment Opportunity</h3>
              <div className="flex gap-2 items-center mt-2 sm:mt-0">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Author"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">Biruk Lema</span>
                  <span className="text-gray-500">Dec 5, 2024</span>
                </div>
              </div>
            </div>

            {/* News Description */}
            <p className="text-gray-700 text-sm sm:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ipsa
              reiciendis officiis adipisci dolorem animi. Saepe, est neque
              perspiciatis minima quasi soluta beatae cupiditate quaerat sed
              iste. Quos atque odit maiores soluta esse vero repellendus saepe
              necessitatibus, inventore sapiente placeat dignissimos quod
              voluptatum ea. Magni optio numquam amet illo saepe.
            </p>

            {/* Actions Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
              {/* Social Share */}
              <div className="flex gap-4 items-center mb-4 sm:mb-0">
                <span className="font-medium">Share:</span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-pink-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </div>
              </div>

              {/* Interaction Buttons */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm sm:text-base">
                  👍 Like
                </button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm sm:text-base">
                  🔥 Fire
                </button>
                <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm sm:text-base">
                  ✋ Limb Hand
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Secondary News Section */}
        <div className="p-4 sm:p-8">
          {/* Header Section */}
          <header className="mb-6 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold">Recent</h2>
            <h1 className="underline text-xl sm:text-2xl ml-0 sm:ml-2 font-semibold">News</h1>
          </header>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg flex flex-col"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-base sm:text-lg mb-2">{news.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{news.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{news.author}</span>
                  <span>{news.date}</span>
                </div>
                <button className="self-start px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>

        <Gallery />

        <Footer />
      </MaxWidth>
    </>
  );
}

const newsData = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "Investment Opportunities in Green Tech",
    description: "Explore new advancements and opportunities in the green technology sector.",
    author: "Biruk Lema",
    date: "Dec 5, 2024",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Smart Cities: The Future of Urban Development",
    description: "Discover how smart cities are revolutionizing urban living through technology.",
    author: "Sara Mulu",
    date: "Nov 28, 2024",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "AI and Healthcare Innovation",
    description: "Learn how artificial intelligence is transforming the healthcare industry.",
    author: "Miki Yohannes",
    date: "Oct 15, 2024",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Renewable Energy Trends for 2025",
    description: "A sneak peek into upcoming trends in the renewable energy sector.",
    author: "Abel Guta",
    date: "Sep 12, 2024",
  },
];

export default NewsPage;
