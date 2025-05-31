"use client";

import WelcomeSection from "@/components/welcome-section";
import RecentActivity from "@/components/recent-activity";
import QuickActions from "@/components/quick-actions";

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<WelcomeSection />

			<QuickActions />

			<RecentActivity />
		</div>
	);
}
