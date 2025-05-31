"use client";

// Simple authentication context
import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

interface User {
	id: string;
	email: string;
	name: string;
	role: string;
}

interface AuthContextType {
	user: User | null;
	login: (email: string, password: string) => Promise<boolean>;
	logout: () => void;
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users
const mockUsers = [
	{
		id: "1",
		email: "dh2u-admin@directhomes2u.com",
		password: "admin123",
		name: "Admin User",
		role: "admin",
	},
	{
		id: "2",
		email: "dh2u-manager@directhomes2u.com",
		password: "manager123",
		name: "Manager User",
		role: "manager",
	},
];

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check if user is logged in on mount
		const savedUser = localStorage.getItem("user");
		if (savedUser) {
			setUser(JSON.parse(savedUser));
		}
		setIsLoading(false);
	}, []);

	const login = async (email: string, password: string): Promise<boolean> => {
		const foundUser = mockUsers.find(
			(u) => u.email === email && u.password === password
		);

		if (foundUser) {
			const userData = {
				id: foundUser.id,
				email: foundUser.email,
				name: foundUser.name,
				role: foundUser.role,
			};
			setUser(userData);
			localStorage.setItem("user", JSON.stringify(userData));
			return true;
		}
		return false;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, isLoading }}>
			{" "}
			{children}{" "}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
}
