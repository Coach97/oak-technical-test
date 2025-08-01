import { useEffect } from "react";
import "./Container.css";

export interface ContainerProps {
  active: boolean;
  onActiveChange: (active: boolean) => void;
  title?: string;
  name?: string;
}

export function Container({
  active,
  onActiveChange,
  title,
  name,
}: ContainerProps) {
  useEffect(() => {
    if (!active) return;

    const reset = () => {
      onActiveChange(false);
      clearTimeout(timeout);
    };

    const timeout = setTimeout(reset, 2000);
    return () => clearTimeout(timeout);
  }, [active, onActiveChange]);

  const toggle = () => {
    onActiveChange(!active);
  };

  return (
    <input
      type="checkbox"
      name={name}
      title={title}
      className="container"
      checked={active}
      onChange={toggle}
      role="checkbox"
      aria-checked={active}
    />
  );
}
