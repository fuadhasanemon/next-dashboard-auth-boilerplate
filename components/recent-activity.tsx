import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Building2, CreditCard } from "lucide-react";
import { Badge } from "./ui/badge";

const RecentActivity = () => {
	return (
		<>
			{/* Recent Activity */}
			<div className="grid gap-4 md:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Recent Properties</CardTitle>
						<CardDescription>Latest property listings</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{[1, 2, 3].map((item) => (
								<div key={item} className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
										<Building2 className="h-6 w-6 text-gray-500" />
									</div>
									<div className="flex-1 space-y-1">
										<p className="text-sm font-medium">Modern Villa #{item}</p>
										<p className="text-xs text-muted-foreground">
											Added 2 hours ago
										</p>
									</div>
									<Badge variant="outline">Active</Badge>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Recent Payments</CardTitle>
						<CardDescription>Latest payment transactions</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{[1, 2, 3].map((item) => (
								<div key={item} className="flex items-center space-x-4">
									<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
										<CreditCard className="h-6 w-6 text-green-600" />
									</div>
									<div className="flex-1 space-y-1">
										<p className="text-sm font-medium">Payment #{item}234</p>
										<p className="text-xs text-muted-foreground">$2,500.00</p>
									</div>
									<Badge variant="default">Completed</Badge>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default RecentActivity;
