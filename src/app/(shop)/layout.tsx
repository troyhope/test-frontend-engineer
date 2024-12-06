import { Nav } from "@/components/layout/Nav";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
