"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Building2,
	Upload,
	CreditCard,
	Users,
	TrendingUp,
	Plus,
	Settings,
	BarChart3,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import StatesGrid from "@/components/states-grid";
import WelcomeSection from "@/components/welcome-section";
import RecentActivity from "@/components/recent-activity";

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<WelcomeSection />

			<StatesGrid />

			<RecentActivity />
		</div>
	);
}
