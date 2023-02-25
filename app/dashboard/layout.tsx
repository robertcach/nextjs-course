interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div
      style={{
        color: 'red',
        padding: '15px',
      }}
    >
      {children}
    </div>
  );
}
