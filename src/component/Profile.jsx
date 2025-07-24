import useFetch from "../hook/useFetch";

function Profile() {

  // This component represents a user profile page.
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users/5');

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  
  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 border border-purple-100">
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-700">{data.name}</div>
          <p className="text-sm text-gray-500">{data.username}</p>
          <p className="text-sm text-gray-600 mt-2">{data.email}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-600">Contact Info</h3>
          <p className="text-sm text-gray-700 mt-1">
            📞 {data.phone}
          </p>
          <p className="text-sm text-gray-700">
            🌐 {data.website}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-600">Address</h3>
          <p className="text-sm text-gray-700 mt-1">
            {data.address.suite}, {data.address.street}, {data.address.city} - {data.address.zipcode}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-purple-600">Company</h3>
          <p className="text-sm text-gray-700 mt-1">
            🏢 {data.company.name}
          </p>
          <p className="text-xs text-gray-500 italic">
            "{data.company.catchPhrase}"
          </p>
        </div>
      </div>
    </div>
  );
};


export default Profile;