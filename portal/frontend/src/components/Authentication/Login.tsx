import React, { useState } from 'react';
import apiService from '../../services/ApiService';
import { BaseConstants } from '../../Utils/BaseConstants';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const login = async () => {
        try {
            const response = await apiService.post("/auth/login", { email: email, password: password });
            console.log(response);

            if (response.status === BaseConstants.AUTHORIZED_STATUS_CODE) {
                sessionStorage.setItem("token", response.data.token);
                location.reload();
            } else {
                sessionStorage.removeItem("token");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        // <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <div className="w-full max-w-md p-8 space-y-6">
            <h2 className="text-3xl font-bold text-center" style={{ color: "#123089" }}>Patient Login</h2>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200" style={{ backgroundColor: "#123089" }} onClick={login}>
                Login
            </button>
            <div className="text-sm text-center text-gray-500">
                <a href="#" className="text-indigo-600 hover:underline">
                    Forgot password?
                </a>
            </div>
        </div>
    );
};

export default Login;
