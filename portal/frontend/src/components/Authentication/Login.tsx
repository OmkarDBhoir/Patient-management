import React from 'react';

const Login: React.FC = () => {
    return (
        // <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="w-full max-w-md p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center" style={{ color: "#123089" }}>Patient Login</h2>

            <form className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200" style={{backgroundColor:"#123089"}}>
                    Login
                </button>
            </form>
            <div className="text-sm text-center text-gray-500">
                <a href="#" className="text-indigo-600 hover:underline">
                    Forgot password?
                </a>
            </div>
        </div>
    );
};

export default Login;
