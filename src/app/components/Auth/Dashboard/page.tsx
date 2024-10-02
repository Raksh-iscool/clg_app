"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../config";

function Dashboard() {
    const auth = getAuth(app); // Correctly initialize Firebase with app
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/src/app/page"); // Redirect to the home page if the user is authenticated
            } else {
                setUser(null); // Ensure user state is null if not authenticated
            }
        });
        return () => unsubscribe();
    }, [auth, router]);

    const handleLogout = async () => { // Moved async to the correct position
        try {
            await signOut(auth);
            router.push("/"); // Redirect to the login page after logout
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error signing out:", error.message);
            } else {
                console.error("Error signing out:", error);
            }
        }
    };

    return null; // No need to render anything if the user is authenticated
}

export default Dashboard;
