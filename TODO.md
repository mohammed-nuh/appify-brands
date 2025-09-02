# TODO: Unify Image Positions in SkiperCard

## Tasks
- [x] Wrap step1 images in a positioning div matching step4's container and adjust Image classes to remove translate-x offsets and match step4's Image styles.
- [x] Wrap step2 images in a positioning div matching step4's container and adjust Image classes to remove translate-x offsets and match step4's Image styles.
- [x] Wrap step3 image in a positioning div matching step4's container and adjust Image class to remove translate-x offsets and match step4's Image styles.
- [x] Verify that all images now display at the same position as the last image when their respective steps are active.
- [x] Test the component visually to ensure proper alignment and responsiveness.

## Notes
- Changes are only in src/components/ui/skiper-card.tsx.
- Preserve the step-based visibility logic (opacity-0 when not active).
- Apply the same absolute positioning container as step4 to all steps.
- Remove conditional translate-x classes from Image components and unify their styles.
