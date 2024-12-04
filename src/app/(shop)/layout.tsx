export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Implement navigation/header and footer
  return (
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  );
}
