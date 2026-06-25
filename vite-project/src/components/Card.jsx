import React from 'react'

const Card = ({ Name, Id, Faculty, Address }) => {
  return (
     <div className="bg-white shadow-lg rounded-xl p-5 w-64 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600 mb-3">
        {Name}
      </h2>

      <p className="mb-1">
        <span className="font-semibold">ID:</span> {Id}
      </p>

      <p className="mb-1">
        <span className="font-semibold">Faculty:</span> {Faculty}
      </p>

      <p>
        <span className="font-semibold">Address:</span> {Address}
      </p>
    </div>

  )
}

export default Card;