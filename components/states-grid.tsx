import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building2, CreditCard, TrendingUp, Users } from "lucide-react";

const StatesGrid = () => {
	const stats = [
		{
			title: "Total Properties",
			value: "24",
			description: "Active listings",
			icon: Building2,
			trend: "+12%",
		},
		{
			title: "Total Revenue",
			value: "$45,231",
			description: "This month",
			icon: TrendingUp,
			trend: "+8%",
		},
		{
			title: "Active Users",
			value: "573",
			description: "Registered buyers",
			icon: Users,
			trend: "+23%",
		},
		{
			title: "Pending Payments",
			value: "12",
			description: "Awaiting confirmation",
			icon: CreditCard,
			trend: "-5%",
		},
	];

	return (
		<>
			{/* Stats Grid */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat, index) => (
					<Card key={index}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								{stat.title}
							</CardTitle>
							<stat.icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<p className="text-xs text-muted-foreground">
								<span
									className={`${
										stat.trend.startsWith("+")
											? "text-green-600"
											: "text-red-600"
									}`}
								>
									{stat.trend}
								</span>{" "}
								{stat.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
};

export default StatesGrid;
