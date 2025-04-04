import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const { data } = await axios.get("/api/auth/user", { withCredentials: true });
                setUser(data);
            } catch (error) {
                setUser(null);
            }
        };
        checkLoginStatus();
    }, []);

    const logout = async () => {
        await axios.post("/api/auth/logout", {}, { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
