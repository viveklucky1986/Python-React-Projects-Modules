import { Handle, Position } from 'reactflow';
import { useState } from 'react';

const typeColors = {
  input: '#2563eb',
  text: '#7c3aed',
  llm: '#059669',
  output: '#ea580c'
};

export default function BaseNode({
  type,
  defaultLabel,
  inputs = [],
  outputs = [],
  children,
  isInputNode = false
}) {
  const [label, setLabel] = useState(defaultLabel);
  const color = typeColors[type] || '#374151';

  return (
    <div
      style={{
        // width: isInputNode ? 220 : 180,
        width: '100%',
        border: `1px solid ${color}`,
        borderRadius: 6,
        background: '#ffffff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        fontSize: 13,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <div
        style={{
          background: color,
          color: '#fff',
          padding: '6px 8px',
          fontWeight: 600,
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6
        }}
      >
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={{
            width: '100%',
            border: 'none',
            background: 'transparent',
            color: '#fff',
            fontWeight: 600,
            outline: 'none'
          }}
        />
      </div>

      {/* BODY — THIS IS THE CRITICAL PART */}
      <div
        style={{
          minHeight: 56,          // 👈 FIXED BODY HEIGHT
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}
      >
        {children || (
          <span style={{ fontSize: 11, color: '#9ca3af' }}>
            {/* intentionally empty */}
          </span>
        )}
      </div>

      {/* INPUT HANDLES */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          type="target"
          position={Position.Left}
          id={id}
          style={
            inputs.length === 1
              ? { top: '50%', transform: 'translateY(-50%)' }
              : { top: 46 + index * 20 }
          }
        />
      ))}

      {/* OUTPUT HANDLES */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={
            outputs.length === 1
              ? { top: '50%', transform: 'translateY(-50%)' }
              : { top: 46 + index * 20 }
          }
        />
      ))}
    </div>
  );
}
