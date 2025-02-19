import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 h-screen flex items-center justify-center"> {/* Gradient background */}
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96 transition duration-300 ease-in-out hover:scale-105"> {/* Increased padding, rounded corners, shadow, hover effect */}
        {isSignUp ? (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2> {/* Improved heading style */}
            <form className="space-y-4"> {/* Added spacing between form elements */}
              <input type="text" placeholder="Username" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" /> {/* Improved input styling */}
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />
              <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />
              <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />

              <select className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
                <option>Ngo</option>
                <option>oxxx</option>
                <option>yyyy</option>
              </select>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">Sign Up</button> {/* Improved button styling and transition */}
            </form>
            <p className="mt-6 text-center text-gray-600">Already have an account? <a href="#" onClick={handleLoginClick} className="text-blue-600 hover:underline transition duration-300">Login</a></p> {/* Improved text styling and transition */}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Welcome Back!</h2> {/* Improved heading style */}
            <p className="text-gray-600 mb-8 text-center">Sign in to your account.</p> {/* Increased margin bottom */}
            <form className="space-y-4"> {/* Added spacing between form elements */}
              <input type="text" placeholder="User ID" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" /> {/* Improved input styling */}
              <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />
              <div className="mb-6 flex items-center"> {/* Increased margin bottom */}
                <input type="checkbox" id="remember" className="mr-2 accent-blue-500" /> {/* Added accent color to checkbox */}
                <label htmlFor="remember" className="text-gray-700">Remember for 30 days</label>
              </div>
              <a href="#" className="text-blue-600 hover:underline block mb-6 text-center transition duration-300">Forgot Password?</a> {/* Improved text styling and transition */}
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">Login</button> {/* Improved button styling and transition */}
            </form>
            <div className="mt-6"> {/* Added margin top */}
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-300">Sign in with Google</button> {/* Improved button styling and transition */}
            </div>
            <p className="mt-6 text-center text-gray-600">Don't have an account? <a href="#" onClick={handleSignUpClick} className="text-blue-600 hover:underline transition duration-300">Sign Up</a></p> {/* Improved text styling and transition */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;