export default function RegisterPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border rounded"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
} 