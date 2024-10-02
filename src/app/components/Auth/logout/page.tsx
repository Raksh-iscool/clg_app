import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import app from "../../../config.js"; // Ensure this path is correct

const handleLogout = async () => {
    const auth = getAuth(app); // Correctly initialize Firebase with app
    const router = useRouter();

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

export default handleLogout;
