export type Orientation = "normal" | "flipped";

export type ComponentAsset = {
  id: string;
  normal: string;
  flipped: string;
};

export type PlacedComponent = {
  id: string;
  assetId: string;
  orientation: Orientation;
};
