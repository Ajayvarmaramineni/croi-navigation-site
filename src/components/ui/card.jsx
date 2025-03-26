export function Card({ children }) {
    return (
      <div className="border p-4 rounded shadow bg-white">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="mt-2 text-gray-700">{children}</div>;
  }
  