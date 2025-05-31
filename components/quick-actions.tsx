import { BarChart3, CreditCard, Plus, Settings, Upload } from "lucide-react";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const QuickActions = () => {
	const quickActions = [
		{
			title: "Upload Property",
			description: "Add a new property listing",
			icon: Upload,
			action: () => console.log("Upload property"),
			color: "bg-blue-500",
		},
		{
			title: "Payment Management",
			description: "View and manage payments",
			icon: CreditCard,
			action: () => console.log("Manage payments"),
			color: "bg-green-500",
		},
		{
			title: "Analytics",
			description: "View detailed reports",
			icon: BarChart3,
			action: () => console.log("View analytics"),
			color: "bg-purple-500",
		},
		{
			title: "Settings",
			description: "Configure system settings",
			icon: Settings,
			action: () => console.log("Open settings"),
			color: "bg-gray-500",
		},
	];

	return (
		<>
			{/* Quick Actions */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{quickActions.map((action, index) => (
					<Card
						key={index}
						className="cursor-pointer hover:shadow-md transition-shadow"
					>
						<CardHeader className="pb-3">
							<div
								className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-2`}
							>
								<action.icon className="h-5 w-5 text-white" />
							</div>
							<CardTitle className="text-lg">{action.title}</CardTitle>
							<CardDescription>{action.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Button
								variant="outline"
								className="w-full"
								onClick={action.action}
							>
								<Plus className="mr-2 h-4 w-4" />
								Get Started
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
};

export default QuickActions;
