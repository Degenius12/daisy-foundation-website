#!/bin/bash
# Fix all apostrophes and quotes in React components
find src/components -name "*.tsx" -type f -exec sed -i "s/don't/don\&apos;t/g" {} \;
find src/components -name "*.tsx" -type f -exec sed -i "s/We'll/We\&apos;ll/g" {} \;
find src/components -name "*.tsx" -type f -exec sed -i "s/they're/they\&apos;re/g" {} \;
find src/components -name "*.tsx" -type f -exec sed -i "s/I've/I\&apos;ve/g" {} \;
