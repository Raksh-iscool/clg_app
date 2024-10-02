"use client";
import { useState, useEffect } from "react";
import app from "../../config"; // config.js

import { getAuth, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Dashboard from "./Dashboard/page";

const Home = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                router.push("/app/page"); // Redirect to /app/page if user is logged in
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [router]);

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push("/app/page");
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error signing in with Google:", error.message);
            } else {
                console.error("Error signing in with Google:", error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {user ? (
                // User is logged in, render dashboard or redirect to the dashboard
                <Dashboard />
            ) : (
                // User is not logged in, render the login button
                <button
                    onClick={signInWithGoogle}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In with Google
                </button>
            )}
        </div>
    );
};

export default Home;