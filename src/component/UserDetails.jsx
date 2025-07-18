import { useParams } from "react-router-dom";

function UserDetails() {
    // This component can be used to display user details
    const { userId } = useParams(); // Assuming you want to use a userId parameter

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">User ID: {userId}</h2>
            <p className="text-gray-600">Fetching user details for ID #{userId}...</p>
        </div>
    );
}

export default UserDetails;