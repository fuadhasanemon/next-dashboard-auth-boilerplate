import { useAuth } from "@/lib/auth";
import React from "react";
import { Badge } from "./ui/badge";

const WelcomeSection = () => {
	const { user } = useAuth();
	return (
		<>
			{/* Welcome Section */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
					<p className="text-muted-foreground">
						Welcome back, {user?.name}! Here's what's happening with your
						properties.
					</p>
				</div>
				<div className="flex items-center space-x-2">
					<Badge variant="secondary" className="px-3 py-1">
						{user?.role || "Admin"}
					</Badge>
				</div>
			</div>
		</>
	);
};

export default WelcomeSection;
