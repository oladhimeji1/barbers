# TODO - Fix Navigation Issues

## Issues Identified
1. `app/types/navigation.ts` has duplicate App component code mixed with type definitions
2. `app/_layout.tsx` has conflicting React Navigation imports with Expo Router

## Tasks
- [x] Fix `app/types/navigation.ts` - Remove App component code, keep only type definitions
- [x] Fix `app/_layout.tsx` - Use Expo Router's native Stack properly

