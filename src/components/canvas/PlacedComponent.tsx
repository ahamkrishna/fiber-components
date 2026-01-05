import type { PlacedComponent } from "@/types/component";
import { COMPONENT_ASSETS } from "../svg/assets";

type Props = {
  data: PlacedComponent;
  onRemove: (id: string) => void;
};

export default function PlacedComponentView({ data, onRemove }: Props) {
  const asset = COMPONENT_ASSETS.find(a => a.id === data.assetId);

  if (!asset) return null;

  const svgSrc = data.orientation === 'normal' ? asset.normal : asset.flipped;

  return (
    <div className="flex flex-col items-center flex-shrink-0">
      {/* Component - center-aligned with receiver */}
      <img
        src={svgSrc}
        alt={data.assetId}
        className="w-14 h-14 object-contain"
      />
      {/* Remove label - 8px below, 8px font */}
      <div
        className="font-bold cursor-pointer hover:underline"
        onClick={() => onRemove(data.id)}
        style={{ fontSize: '8px', marginTop: '8px', color: '#000000' }}
      >
        Remove
      </div>
    </div>
  );
}
