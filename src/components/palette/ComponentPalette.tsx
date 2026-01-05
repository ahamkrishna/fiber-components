import type { Orientation } from "@/types/component";
import { COMPONENT_ASSETS } from "../svg/assets";
import ComponentButton from "./ComponentButton";

type Props = {
  flipMode: Orientation;
  onAdd: (assetId: string) => void;
  disabled?: boolean;
};

export default function ComponentPalette({ flipMode, onAdd, disabled = false }: Props) {
  // Split into two rows matching CommScope layout
  const row1 = COMPONENT_ASSETS.slice(0, 9); // Transition + Conversion modules
  const row2 = COMPONENT_ASSETS.slice(9, 15); // Connectors + Splice

  return (
    <div className="space-y-6">
      {/* Row 1: 9 items (4 transitions + 5 conversions) - LEFT ALIGNED */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(9, 80px)', justifyContent: 'start' }}>
        {row1.map(asset => (
          <ComponentButton
            key={asset.id}
            asset={asset}
            orientation={flipMode}
            onClick={onAdd}
            disabled={disabled}
          />
        ))}
      </div>

      {/* Row 2: 6 items (5 connectors + splice) - LEFT ALIGNED */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(6, 80px)', justifyContent: 'start' }}>
        {row2.map(asset => (
          <ComponentButton
            key={asset.id}
            asset={asset}
            orientation={flipMode}
            onClick={onAdd}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
