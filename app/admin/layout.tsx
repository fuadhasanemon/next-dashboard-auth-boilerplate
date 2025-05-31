"use client";

import type React from "react";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Building2,
	LayoutDashboard,
	Upload,
	CreditCard,
	Users,
	Settings,
	LogOut,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import Image from "next/image";

const navigation = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
	{ name: "Properties", href: "/admin/properties", icon: Building2 },
	{ name: "Upload", href: "/admin/upload", icon: Upload },
	{ name: "Payments", href: "/admin/payments", icon: CreditCard },
	{ name: "Users", href: "/admin/users", icon: Users },
	{ name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { user, logout, isLoading } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!isLoading && !user) {
			router.replace("/login");
		}
	}, [user, isLoading, router]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	if (!user) {
		return null;
	}

	const handleLogout = () => {
		logout();
		router.replace("/login");
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center ">
						<div className="flex items-center">
							{/* <Building2 className="h-8 w-8 text-blue-600" /> */}
							<Image
								className="mx-auto my-4"
								src={"/directhomes2u-logo.svg"}
								width={150}
								height={150}
								alt="directhomes2u-logo"
							/>
							{/* <span className="ml-2 text-xl font-bold text-gray-900">
								PropertyAdmin
							</span> */}
						</div>
						<div className="flex items-center space-x-4">
							<span className="text-sm text-gray-700">
								Welcome, {user.name}
							</span>
							<Button variant="outline" size="sm" onClick={handleLogout}>
								<LogOut className="h-4 w-4 mr-2" />
								Logout
							</Button>
						</div>
					</div>
				</div>
			</header>

			<div className="flex">
				{/* Sidebar */}
				<nav className="w-64 bg-white shadow-sm min-h-screen border-r">
					<div className="p-4">
						<ul className="space-y-2">
							{navigation.map((item) => {
								const isActive = pathname === item.href;
								return (
									<li key={item.name}>
										<Link
											href={item.href}
											className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
												isActive
													? "bg-[#75AB11]/90 text-white"
													: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
											}`}
										>
											<item.icon className="mr-3 h-5 w-5" />
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>

				{/* Main Content */}
				<main className="flex-1 p-6">{children}</main>
			</div>
		</div>
	);
}
