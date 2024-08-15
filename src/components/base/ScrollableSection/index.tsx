import React from "react";

type ScrollableSectionProps = {
  children: React.ReactNode;
};

function ScrollableSection({ children }: ScrollableSectionProps) {
  return <div className="overflow-y-auto flex-1 pr-4">{children}</div>;
}

export default ScrollableSection;
