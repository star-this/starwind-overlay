// sw-overlay.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwOverlayLayout = createStarwindElement({
  inset: { var: "--sw-overlay-inset", type: "raw" },
  place: { var: "--sw-overlay-place", type: "raw" },
  z: { var: "--sw-overlay-z", type: "raw" },
});

export function defineSwOverlay() {
  defineElement("sw-overlay", SwOverlayLayout);
}
