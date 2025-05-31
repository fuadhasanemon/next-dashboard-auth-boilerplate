"use client";

import { AuthProvider } from "@/lib/auth";
import type React from "react";

// import { AuthProvider } from "@/lib/auth"

export function Providers({ children }: { children: React.ReactNode }) {
	return <AuthProvider>{children}</AuthProvider>;
}
