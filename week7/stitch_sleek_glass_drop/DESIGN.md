---
name: Fluidity & Light
colors:
  surface: '#faf8fe'
  surface-dim: '#dad9df'
  surface-bright: '#faf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf3'
  surface-container-high: '#e9e7ed'
  surface-container-highest: '#e3e2e7'
  on-surface: '#1a1b1f'
  on-surface-variant: '#414755'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe1'
  on-secondary-container: '#616365'
  tertiary: '#5a5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#737575'
  on-tertiary-container: '#fcfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf8fe'
  on-background: '#1a1b1f'
  surface-variant: '#e3e2e7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is anchored in a high-fidelity, premium aesthetic that blends Apple-inspired minimalism with an organic "Water Drop" motif. The target audience values sophistication, clarity, and tactile digital experiences. The emotional response should be one of calm, precision, and effortless luxury.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It leverages heavy whitespace and a restricted color palette to establish focus, while employing layered transparency and background blurs to create a sense of physical depth. The "Water Drop" narrative manifests through organic, hyper-rounded corners and fluid transitions, making the interface feel less like a machine and more like a natural, responsive surface.

## Colors
The palette is intentionally restrained to maximize the impact of content and transparency effects.
- **Primary:** A vibrant, high-saturation blue used sparingly for calls to action, active states, and essential interactive indicators.
- **Secondary:** A soft, "Off-White" or light gray used for background surfaces to reduce eye strain and provide a canvas for glass elements.
- **Tertiary:** Pure white, reserved for the highest level of elevation or internal card backgrounds.
- **Neutral:** A range of grays used for secondary text and subtle borders.

Transparency is a core "color" in this design system. Glass surfaces should use a white tint at 70-80% opacity with a high-saturation background blur (20px-40px).

## Typography
This design system utilizes **Inter** for its systematic, neutral, and highly legible characteristics, mimicking the functional clarity of San Francisco. 

- **Hierarchy:** Use weight (Semibold/Bold) rather than size to differentiate headlines from body text where possible. 
- **Tracking:** Apply slight negative letter-spacing to larger display type to maintain a "tight," premium feel.
- **Readability:** Body text is set at 17px to align with modern mobile standards, ensuring high legibility on high-density displays.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to evoke a sense of breathing room and exclusivity.

- **Desktop:** 12-column grid, 24px gutters, and 64px outer margins. Content is centered with a max-width of 1200px.
- **Mobile:** 4-column grid, 16px gutters, and 20px outer margins.
- **Rhythm:** All spacing (padding, margins) must be increments of 8px. Use larger gaps (48px, 64px) between major sections to emphasize the minimalist aesthetic.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Ambient Shadows** rather than traditional solid fills.

1.  **The Base:** The bottom-most layer is the Secondary color (#F5F5F7).
2.  **The Glass Layer:** Floating elements (modals, navigation bars, cards) use a backdrop-filter blur (minimum 20px) and a white semi-transparent fill.
3.  **Shadows:** Use extremely soft, wide-spread shadows. A typical elevation shadow should be `0 20px 40px rgba(0,0,0,0.05)`. Avoid dark or high-contrast shadows.
4.  **Edge Treatment:** Glass elements should have a 1px inner border (stroke) with 20% white opacity to simulate the "catch-light" on the edge of a water drop or glass pane.

## Shapes
To align with the "Water Drop" theme, the shape language is aggressively rounded and organic. 

- **Standard Elements:** Buttons and small cards use a 1rem (16px) radius.
- **Large Containers:** Main sections and feature cards use "rounded-xl" (3rem/48px) to create the signature fluid look.
- **Inputs:** Text fields use a fully pill-shaped profile for a soft, approachable feel.

## Components
- **Buttons:** Primary buttons are pill-shaped with a solid Primary Blue fill and white text. Secondary buttons use the glass effect with a subtle 1px border.
- **Cards:** Use the glassmorphism stack: background blur, semi-transparent white fill, and a wide, soft shadow. Corners are heavily rounded (3rem).
- **Inputs:** Search bars and text fields are pill-shaped, using a light gray fill (#E8E8ED) that transitions to a glass effect upon focus.
- **Lists:** Items are separated by thin, full-width dividers or grouped into "InsetBackground" style containers with rounded corners.
- **Selection Controls:** Checkboxes and Radio buttons use the Primary Blue when active, featuring a soft "squishy" scale-down animation when pressed to reinforce the fluid narrative.
- **Navigation Bar:** Always pinned to the top or bottom as a floating glass "island" with a high backdrop-filter blur.