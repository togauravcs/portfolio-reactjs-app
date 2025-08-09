import * as React from "react";

export function Tabs({ children, defaultValue, className }) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) return React.cloneElement(child, { value, setValue });
        if (child.type === TabsContent) return value === child.props.value ? child : null;
        return child;
      })}
    </div>
  );
}

export function TabsList({ children, value, setValue, className }) {
  return (
    <div className={`flex ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: value === child.props.value,
          onClick: () => setValue(child.props.value),
        })
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-t ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="border-t p-4">{children}</div>;
}