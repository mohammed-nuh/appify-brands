# TODO: Make Services Page Table and Why Choose Us Responsive

- [x] Update src/app/services/page.tsx: Make pricing table scale responsive (scale-[1] on mobile, scale-[1.1] on md, scale-[1.2] on lg)
- [x] Update "Why Choose Us" scale to be responsive (scale-[0.8] on mobile, scale-[0.9] on md, scale-[1] on lg)
- [x] Make "Why Choose Us" heading responsive (text-3xl sm:text-4xl md:text-5xl)
- [x] Adjust SkiperCard min-height to be responsive in src/components/ui/skiper-card.tsx (min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px])
- [x] Fix image cutting in services cards by changing object-cover to object-scale-down in src/components/ui/minimal-card.tsx
- [x] Implement simple image loading for mobile devices in ServicesSection.tsx instead of hover expand component
- [ ] Test the changes on mobile to ensure proper scaling and no overflow
