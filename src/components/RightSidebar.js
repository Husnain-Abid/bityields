"use client"

import annoement from "../asset/annoucement.png";
import checked from "../asset/checked.png";



export default function RightSidebar() {
  // Sample tweet data
  const tweets = [
    {
      id: 1,
      name: "BitYields",
      username: "@usedbitsghost",
      timeAgo: "1h",
      text: "Everyone loves giving away company swag, until it's taking up your spare bedroom and dominating your schedule.",
      link: "tradinghost.com",
      image: annoement,
    //   stats: {
    //     comments: 0,
    //     retweets: 5,
    //     likes: 12,
    //   },
    },
    {
      id: 2,
      name: "BitYields",
           username: "@usedbitsghost",
      timeAgo: "1h",
      text: "Everyone loves giving away company swag, until it's taking up your spare bedroom and dominating your schedule.",
      link: "tradinghost.com",
      image: annoement,
    //   stats: {
    //     comments: 2,
    //     retweets: 8,
    //     likes: 15,
    //   },
    },
    {
      id: 3,
      name: "BitYields",
      username: "@usedbitsghost",
      timeAgo: "1h",
      text: "Everyone loves giving away company swag, until it's taking up your spare bedroom and dominating your schedule.",
      link: "tradinghost.com",
      image: annoement,
    //   stats: {
    //     comments: 1,
    //     retweets: 3,
    //     likes: 9,
    //   },
    },
  ]

  return (
    <aside className="w-[280px] border-l border-gray-200 h-screen overflow-y-auto hidden lg:block">
      <div className="p-4">
        {tweets.map((tweet) => (
          <article key={tweet.id} className="pb-4 mb-4 border-b border-gray-100">
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-300" />
              </div>

              {/* Tweet Content */}
              <div className="flex-1 min-w-0">
                {/* Tweet Header */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900 text-sm flex items-center gap-1">{tweet.name} <img src={checked} alt="checked"  /> <span className="text-gray-500 font-normal text-xs"> {tweet.username}  </span> </span>
                  <span className="text-gray-500 text-sm">·</span>
                  <span className="text-gray-500 text-sm">{tweet.timeAgo}</span>
                </div>

                {/* Tweet Text */}
                <p className="text-gray-900 text-sm mb-2">{tweet.text}</p>

                {/* Tweet Link */}
                <a
                  href={`https://${tweet.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2D9CE6] hover:underline mb-3 block"
                >
                  {tweet.link}
                </a>

                {/* Tweet Image */}
                <div className="rounded-xl overflow-hidden mb-3 border border-gray-100">
                  <img
                    src={tweet.image || "/placeholder.svg"}
                    alt="Tweet media"
                    width={500}
                    height={280}
                    className="w-full h-auto"
                  />
                </div>

                {/* Tweet Actions */}
                <div className="flex items-center justify-between text-gray-500">
                  {/* Comment */}
                  <button className="group flex items-center gap-2 hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {/* <span className="text-xs">{tweet.stats.comments}</span> */}
                  </button>

                  {/* Retweet */}
                  <button className="group flex items-center gap-2 hover:text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    {/* <span className="text-xs">{tweet.stats.retweets}</span> */}
                  </button>

                  {/* Like */}
                  <button className="group flex items-center gap-2 hover:text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {/* <span className="text-xs">{tweet.stats.likes}</span> */}
                  </button>

                  {/* Bookmark */}
                  <button className="group hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </aside>
  )
}

