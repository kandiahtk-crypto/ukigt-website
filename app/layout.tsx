import "./globals.css";

export const metadata = {
title: "UK Inbound Ground Transport",
description: "Luxury transport for UK & Ireland tours",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
