import React from "react";

function withSize(WrappedComponent, color) {
  const EnhancedComponent = function({ style, ...props }) {
    return (
      <WrappedComponent
        style={{
          color,
          ...style
        }}
        {...props}
      />
    );
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name;
  EnhancedComponent.displayName = `withSize(${displayName}, ${color})`;

  return EnhancedComponent;
}

function Text(props) {
  return <span {...props} />;
}

export const BlueText = withSize(Text, 'blue');
export const OrangeText = withSize(Text, 'orange');
export const RedText = withSize(Text, 'red');
export const GreenText = withSize(Text, 'green');