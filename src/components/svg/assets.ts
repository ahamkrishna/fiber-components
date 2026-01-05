/**
 * Fiber Optic Component SVG Assets
 * 
 * This module centralizes all SVG asset imports for fiber optic components.
 * Each component has two variants: normal and flipped orientation.
 * 
 * Asset Organization:
 * - LC Connectors: Standard duplex connectors
 * - MPO Connectors: Multi-fiber push-on connectors (8, 12, 16, 24 fiber)
 * - Transition Modules: MPO-to-LC breakout modules
 * - Conversion Modules: MPO-to-MPO fiber count converters
 * - Splice Components: Fusion splice connections
 * - Receivers: Start and end point transceivers
 */

import LCOM5 from "@/assets/svg/LC-OM5-LC.svg";
import LCOM5Flipped from "@/assets/svg/LC-OM5-LC-Flipped.svg";

import LCSPLICEOM5 from "@/assets/svg/LC-SPLICE-OM5-LC.svg";
import LCSPLICEOM5Flipped from "@/assets/svg/LC-SPLICE-OM5-LC-Flipped.svg";

import MPO8OM5LC from "@/assets/svg/MPO8-OM5-LC.svg";
import MPO8OM5LCFlipped from "@/assets/svg/MPO8-OM5-LC-Flipped.svg";

import MPO8MPO8 from "@/assets/svg/MPO8-MPO8.svg";
import MPO8MPO8Flipped from "@/assets/svg/MPO8-MPO8-Flipped.svg";

import MPO12OM5LC from "@/assets/svg/MPO12-OM5-LC.svg";
import MPO12OM5LCFlipped from "@/assets/svg/MPO12-OM5-LC-Flipped.svg";

import MPO12MPO12 from "@/assets/svg/MPO12-MPO12.svg";
import MPO12MPO12Flipped from "@/assets/svg/MPO12-MPO12-Flipped.svg";

import MPO122x3CMMPO8 from "@/assets/svg/MPO12-2x3CM-MPO8.svg";
import MPO122x3CMMPO8Flipped from "@/assets/svg/MPO12-2x3CM-MPO8-Flipped.svg";

import MPO16OM5LC from "@/assets/svg/MPO16-OM5-LC.svg";
import MPO16OM5LCFlipped from "@/assets/svg/MPO16-OM5-LC-Flipped.svg";

import MPO16MPO16 from "@/assets/svg/MPO16-MPO16.svg";
import MPO16MPO16Flipped from "@/assets/svg/MPO16-MPO16-Flipped.svg";

import MPO161x2CMMPO8 from "@/assets/svg/MPO16-1x2CM-MPO8.svg";
import MPO161x2CMMPO8Flipped from "@/assets/svg/MPO16-1x2CM-MPO8-Flipped.svg";

import MPO164x3CMMPO12 from "@/assets/svg/MPO16-4x3CM-MPO12.svg";
import MPO164x3CMMPO12Flipped from "@/assets/svg/MPO16-4x3CM-MPO12-Flipped.svg";

import MPO24OM5LC from "@/assets/svg/MPO24-OM5-LC.svg";
import MPO24OM5LCFlipped from "@/assets/svg/MPO24-OM5-LC-Flipped.svg";

import MPO24MPO24 from "@/assets/svg/MPO24-MPO24.svg";
import MPO24MPO24Flipped from "@/assets/svg/MPO24-MPO24-Flipped.svg";

import MPO241x3CMMPO8 from "@/assets/svg/MPO24-1x3CM-MPO8.svg";
import MPO241x3CMMPO8Flipped from "@/assets/svg/MPO24-1x3CM-MPO8-Flipped.svg";

import MPO242x3CMMPO16 from "@/assets/svg/MPO24-2x3CM-MPO16.svg";
import MPO242x3CMMPO16Flipped from "@/assets/svg/MPO24-2x3CM-MPO16-Flipped.svg";

import ReceiverLeft from "@/assets/svg/Receiver-Left.svg";
import ReceiverRight from "@/assets/svg/Receiver-Right.svg";

import type { ComponentAsset } from "@/types/component";

/**
 * Component Assets Array
 * 
 * Ordered to match the CommScope reference site grouping:
 * - Row 1 (indices 0-8): MPO-LC Transition Modules (4) + Conversion Modules (5)
 * - Row 2 (indices 9-14): Standard Connectors (5) + Splice (1)
 * 
 * This ordering ensures the palette displays components in the correct layout.
 */
export const COMPONENT_ASSETS: ComponentAsset[] = [
  // Row 1: Transition Modules (MPO to LC)
  {
    id: "MPO8-OM5-LC",
    normal: MPO8OM5LC,
    flipped: MPO8OM5LCFlipped,
  },
  {
    id: "MPO12-OM5-LC",
    normal: MPO12OM5LC,
    flipped: MPO12OM5LCFlipped,
  },
  {
    id: "MPO16-OM5-LC",
    normal: MPO16OM5LC,
    flipped: MPO16OM5LCFlipped,
  },
  {
    id: "MPO24-OM5-LC",
    normal: MPO24OM5LC,
    flipped: MPO24OM5LCFlipped,
  },
  // Row 1: Conversion Modules
  {
    id: "MPO12-2x3CM-MPO8",
    normal: MPO122x3CMMPO8,
    flipped: MPO122x3CMMPO8Flipped,
  },
  {
    id: "MPO16-1x2CM-MPO8",
    normal: MPO161x2CMMPO8,
    flipped: MPO161x2CMMPO8Flipped,
  },
  {
    id: "MPO16-4x3CM-MPO12",
    normal: MPO164x3CMMPO12,
    flipped: MPO164x3CMMPO12Flipped,
  },
  {
    id: "MPO24-1x3CM-MPO8",
    normal: MPO241x3CMMPO8,
    flipped: MPO241x3CMMPO8Flipped,
  },
  {
    id: "MPO24-2x3CM-MPO16",
    normal: MPO242x3CMMPO16,
    flipped: MPO242x3CMMPO16Flipped,
  },
  // Row 2: Standard Connectors
  {
    id: "LC-OM5-LC",
    normal: LCOM5,
    flipped: LCOM5Flipped,
  },
  {
    id: "MPO8-MPO8",
    normal: MPO8MPO8,
    flipped: MPO8MPO8Flipped,
  },
  {
    id: "MPO12-MPO12",
    normal: MPO12MPO12,
    flipped: MPO12MPO12Flipped,
  },
  {
    id: "MPO16-MPO16",
    normal: MPO16MPO16,
    flipped: MPO16MPO16Flipped,
  },
  {
    id: "MPO24-MPO24",
    normal: MPO24MPO24,
    flipped: MPO24MPO24Flipped,
  },
  // Row 2: Splice
  {
    id: "LC-SPLICE-OM5-LC",
    normal: LCSPLICEOM5,
    flipped: LCSPLICEOM5Flipped,
  },
];

export { ReceiverLeft, ReceiverRight };
