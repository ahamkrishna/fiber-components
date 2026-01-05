import type { ComponentAsset, Orientation } from "@/types/component";

type Props = {
  asset: ComponentAsset;
  orientation: Orientation;
  onClick: (assetId: string) => void;
  disabled?: boolean;
};

export default function ComponentButton({ asset, orientation, onClick, disabled = false }: Props) {
  const svgSrc = orientation === 'normal' ? asset.normal : asset.flipped;

  return (
    <button
      onClick={() => !disabled && onClick(asset.id)}
      disabled={disabled}
      className={`
        flex items-center justify-center transition-opacity
        ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer hover:opacity-80'}
      `}
      title={asset.id}
    >
      <img
        src={svgSrc}
        alt={asset.id}
        className="w-20 h-20 object-contain"
      />
    </button>
  );
}
