import React from 'react';
import type { PlacedComponent } from "@/types/component";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import PlacedComponentView from "./PlacedComponent";

type Props = {
  components: PlacedComponent[];
  onRemove: (id: string) => void;
};

export default function FiberCanvas({ components, onRemove }: Props) {
  return (
    <div className="bg-white border border-gray-300 rounded-sm p-6">
      {/* Use items-center for proper horizontal center alignment */}
      <div className="flex items-center gap-1">
        {/* Start Receiver */}
        <StartNode />

        {/* Added Components with connection lines only between them */}
        {components.map((component, index) => (
          <React.Fragment key={component.id}>
            {/* Connection line before component (except first) - center-aligned */}
            {index > 0 && (
              <div className="w-3 flex-shrink-0" style={{ height: '1px', backgroundColor: '#808080', borderTop: '1px dashed #808080' }}></div>
            )}
            <PlacedComponentView
              data={component}
              onRemove={onRemove}
            />
          </React.Fragment>
        ))}

        {/* End Receiver - moves dynamically */}
        <EndNode />
      </div>
    </div>
  );
}
