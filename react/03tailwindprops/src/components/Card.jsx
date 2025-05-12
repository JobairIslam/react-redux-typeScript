import React from 'react'

function Card({title="jobair islam", pra="this is a card", tag1, tag2, tag3}) {
  return (
    <div>
        {/* Card Component */}
    <div className="ml-10 max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://placehold.co/400x250" alt="Placeholder Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {pra}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag1}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag2}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag3}</span>
      </div>
    </div>
    </div>
  )
}

export default Card