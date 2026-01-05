import React from 'react';
import type { PlacedComponent } from "@/types/component";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import PlacedComponentView from "./PlacedComponent";

/**
 * Props for the FiberCanvas component
 */
type Props = {
  /** Array of components currently placed in the sequence */
  components: PlacedComponent[];
  /** Callback function to handle component removal */
  onRemove: (id: string) => void;
};

/**
 * FiberCanvas Component
 * 
 * Renders the fiber optic component sequence visualization with dynamic receiver positioning.
 * Displays a start receiver, component sequence, end receiver, and numbered placeholder slots.
 * 
 * The layout adapts based on the number of components:
 * - Empty state: Start receiver → 12 placeholders → End receiver
 * - With components: Start receiver → Components → End receiver → Remaining placeholders
 * 
 * @component
 * @param {Props} props - Component props
 * @returns {JSX.Element} The fiber canvas visualization
 */
export default function FiberCanvas({ components, onRemove }: Props) {
  const MAX_SLOTS = 12;

  return (
    <div className="bg-white border border-gray-300 rounded-sm p-6">
      <div className="flex items-center gap-2">
        {/* Fixed start receiver on the left */}
        <StartNode />

        {components.length === 0 ? (
          // Initial state: Display all placeholder slots before the end receiver
          <>
            {Array.from({ length: MAX_SLOTS }).map((_, index) => (
              <div key={`placeholder-${index}`} className="flex-shrink-0 flex items-center justify-center" style={{ width: '56px' }}>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-100">
                  <span className="text-xs font-semibold text-gray-500">{index + 1}</span>
                </div>
              </div>
            ))}
            <EndNode />
          </>
        ) : (
          // Active state: Components followed by end receiver and remaining placeholders
          <>
            {/* Render each component with connection lines between them */}
            {components.map((component, index) => (
              <React.Fragment key={component.id}>
                {/* Connection line between components (skip for first component) */}
                {index > 0 && (
                  <div className="w-3 flex-shrink-0" style={{ height: '1px', backgroundColor: '#808080', borderTop: '1px dashed #808080' }}></div>
                )}
                <PlacedComponentView data={component} onRemove={onRemove} />
              </React.Fragment>
            ))}

            {/* Dynamic end receiver positioned after the last component */}
            <EndNode />

            {/* Remaining placeholder slots after the end receiver */}
            {Array.from({ length: MAX_SLOTS - components.length }).map((_, index) => (
              <div key={`placeholder-${index}`} className="flex-shrink-0 flex items-center justify-center" style={{ width: '56px' }}>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center bg-gray-100">
                  <span className="text-xs font-semibold text-gray-500">{components.length + index + 1}</span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
