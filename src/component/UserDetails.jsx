import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function UserDetails() {
    // This component can be used to display user details
    const { userId } = useParams(); // Assuming you want to use a userId parameter

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            try {
                if( userId ) {
                    // Fetch a specific user if userId is provided
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                    const data = await response.json(); 
                    setSelectedUser(data);
                    setUsers([data]); // Set users to an array with the selected user
                } else {
                    // Fetch all users if no userId is provided
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    const data = await response.json();
                    setUsers(data);
                }

            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, [userId]); // Fetch users when component mounts or userId changes

    // If a specific user is selected, display their details
    const UserCard  = ({ user }) => {
            return (
                   <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                    <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
                    <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
                    <p className="text-gray-600">
                        <strong>Website:</strong>{" "}
                        <a
                            href={`https://${user.website}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {user.website}
                        </a>
                    </p>
                </div>
            );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">User Details</h1>

            { loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : userId && selectedUser ? (
                <div className="max-w-md mx-auto">
                    <UserCard user={selectedUser} />
                    </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {users.map((user) => (
                        <div key={user.id} className="max-w-sm mx-auto">
                            <Link to={`/users/${user.id}`} className="block">
                                <UserCard user={user} />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
                
        </div>
    );
}

export default UserDetails;