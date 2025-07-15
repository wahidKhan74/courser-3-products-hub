import './Welcome.css';

function Welcome(props) {
   return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Hello, {props.name}!
      </h1>
      <p className="title text-lg text-gray-700">
        You are {props.age} years old.
      </p>
    </div>
  );
}

export default Welcome;