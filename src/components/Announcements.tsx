const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-sm'>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Annoucements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
        <div className="flex flex-col gap-4 mt-4">

        <div className="bg-AmedSkyLight rounded-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Ahmed Omar Sacad Kalileh Hirsi Bahdon Warsame</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">One day Palestine will be free, Everything will be ok, we are witnessed they steadfast people.</p>
        </div>

        <div className="bg-AmedPurpleLight rounded-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Ahmed Omar Sacad Kalileh Hirsi Bahdon Warsame</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">One day Palestine will be free, Everything will be ok, we are witnessed they steadfast people.</p>
        </div>

        <div className="bg-AmedLight rounded-sm p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Ahmed Omar Sacad Kalileh Hirsi Bahdon Warsame</h2>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2025-01-01</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">One day Palestine will be free, Everything will be ok, we are witnessed they steadfast people.</p>
        </div>
      </div>
    </div>
  )
}

export default Announcements;