# Design System Strategy: The Confectioner’s Canvas

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Confectioner’s Canvas."** 

Digital products often suffer from a rigid, "box-heavy" industrial look. This system intentionally rebels against that rigidity. By leaning into the organic, hand-crafted spirit of a boutique patisserie, we move away from standard grids toward an editorial layout characterized by **whimsical asymmetry, layered depth, and "sculpted" surfaces.** 

The experience should feel as though it was hand-assembled on a marble pastry counter. We achieve this high-end editorial feel by using overlapping elements (e.g., a "sprinkle" accent breaking the container boundary), extreme roundedness (`xl` scales), and a typography scale that treats headlines as brand signatures rather than mere labels.

## 2. Colors: Tonal Palettes & Edible Depths
The palette is a sophisticated interplay of strawberry reds, whipped creams, and soft pastels. This is not just a "pink app"—it is a study in warm, appetizing neutrals and vibrant accents.

*   **Primary (`#9c3b3e` / `#fc8585`):** Use the strawberry red primarily for interaction and high-priority brand moments.
*   **Surface Hierarchy & Nesting:** We define space through temperature and tone, not lines.
    *   **The "No-Line" Rule:** Never use 1px solid borders to separate sections. If a menu item needs to be distinguished from the background, place a `surface_container_lowest` card on a `surface` background. The subtle shift from `#fff4f4` to `#ffffff` is enough to signal a change in context to a sophisticated eye.
    *   **The "Glass & Gradient" Rule:** For floating carts or "Special of the Day" modals, use Glassmorphism. A container using `surface_container_lowest` with a 60% opacity and a 20px backdrop blur creates a "frosted sugar" effect that feels premium and light.
*   **Signature Textures:** For main CTAs, apply a subtle linear gradient from `primary` (#9c3b3e) to `primary_container` (#fc8585) at a 135-degree angle. This mimics the natural sheen of a glazed fruit or a polished ceramic plate.

## 3. Typography: The Editorial Hand
The typography is a dialogue between the artisanal and the functional.

*   **The Signature (Display & Headline):** `plusJakartaSans` is our voice. For Display and Headline levels, we treat the text as an illustrative element. Use `display-lg` (3.5rem) for hero titles to evoke the feel of a hand-painted shop window. The generous tracking and rounded letterforms of this font mimic the friendly, hand-drawn script requested while maintaining high-end legibility.
*   **The Ledger (Title & Body):** `beVietnamPro` provides the grounding. It is clean, modern, and highly legible. Use `body-lg` for item descriptions to ensure a "sweet" reading experience that doesn't strain the eye.
*   **The Accent (Label):** Labels should be used sparingly, often in `on_secondary_variant` to denote metadata like "Calorie Count" or "Gluten Free" without distracting from the beauty of the dish.

## 4. Elevation & Depth: Tonal Layering
We avoid the "Material 1.0" look of heavy drop shadows. Instead, we use **Tonal Layering.**

*   **The Layering Principle:** Treat the UI as stacked sheets of parchment. 
    *   Base: `surface` (#fff4f4)
    *   Sub-section: `surface_container_low` (#fcedee)
    *   Featured Card: `surface_container_lowest` (#ffffff)
*   **Ambient Shadows:** When an element must "float" (like a floating action button for "Order Now"), use a shadow with a 24px blur and 6% opacity. The shadow color should not be black; use `primary` at 10% opacity to create a "warm glow" shadow that feels like natural light hitting a dessert.
*   **The "Ghost Border" Fallback:** If accessibility requirements demand a border (e.g., in a high-contrast mode), use the `outline_variant` (#b6aaab) at **15% opacity**. It should be a whisper, not a shout.

## 5. Components: Sculpted Elements

*   **Buttons:**
    *   **Primary:** Fully rounded (`full`), using the signature strawberry gradient. 
    *   **Secondary:** `surface_container_high` background with `on_surface` text. No border.
*   **Cards & Lists:** **Forbid all divider lines.** To separate menu items (e.g., Chocolate Fudge Cake vs. Milk Cake), use `Spacing 6` (2rem) of vertical white space or alternate the background color of the list item container between `surface` and `surface_container_low`.
*   **Inputs:** Use `surface_container` with a `sm` (0.5rem) roundedness for the field itself. The label should always sit *above* the field in `label-md` to maintain an editorial, "form-style" look.
*   **Chips:** Use for categories like {cakes} or {pudding}. Use `tertiary_container` (#fef8c3) for the background to provide a "custard" yellow pop that breaks the pink monotony.
*   **Illustrative Accents (The "Sprinkle" System):** Scatter small, non-interactive SVG "sprinkles" (using `primary_fixed` and `tertiary_fixed` colors) in the margins. These should be positioned using absolute coordinates to break the grid and add whimsical charm.

## 6. Do's and Don'ts

### Do:
*   **Embrace White Space:** Use the `16` and `20` spacing scales for page margins. Luxury is defined by the space you don't use.
*   **Use Intentional Asymmetry:** If you have an image of a cupcake, let it "bleed" off the edge of its container or overlap a text block.
*   **Soft Corners:** Everything must have at least a `DEFAULT` (1rem) radius. Sharp corners are forbidden in "The Confectioner's Canvas."

### Don't:
*   **Don't use pure black (#000000):** It kills the "sweet" vibe. Always use `on_surface` (#342d2e) for text.
*   **Don't use 1px dividers:** They make the menu look like a spreadsheet. Use tonal shifts or white space.
*   **Don't crowd the plate:** Keep the number of elements per screen low. Like a high-end dessert, the presentation is as important as the content.