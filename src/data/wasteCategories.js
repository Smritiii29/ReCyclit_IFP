// Central data source for waste category information.
// Keeping this separate from UI components means the category list,
// descriptions, and bin colors can later be swapped for a real API
// response (e.g. a campus-specific configuration) without touching
// any component code.

export const wasteCategories = [
  {
    id: "recyclable-plastic",
    name: "Recyclable Plastic",
    shortName: "Recyclable",
    colorVar: "--color-cat-recyclable",
    description:
      "Plastics that can be reprocessed into new materials, such as bottles, containers, and clean packaging.",
    examples: ["Plastic bottle", "Detergent container", "Clean food packaging"],
    icon: "Recycle",
  },
  {
    id: "non-recyclable-plastic",
    name: "Non-Recyclable Plastic",
    shortName: "Non-Recyclable",
    colorVar: "--color-cat-nonrecyclable",
    description:
      "Plastics that current recycling streams can't process, often due to mixed materials or contamination.",
    examples: ["Chip packet", "Styrofoam cup", "Cling film"],
    icon: "Ban",
  },
  {
    id: "metal",
    name: "Metal",
    shortName: "Metal",
    colorVar: "--color-cat-metal",
    description:
      "Metallic waste identified through inductive sensing, including cans and small metal items.",
    examples: ["Aluminum can", "Metal bottle cap", "Tin container"],
    icon: "CircleDot",
  },
  {
    id: "organic",
    name: "Organic",
    shortName: "Organic",
    colorVar: "--color-cat-organic",
    description:
      "Biodegradable waste such as food scraps, identified in part through moisture sensing.",
    examples: ["Fruit peel", "Food scraps", "Tea leaves"],
    icon: "Leaf",
  },
];

export function getCategoryById(id) {
  return wasteCategories.find((category) => category.id === id);
}
