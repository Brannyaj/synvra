#!/bin/bash

# Create PNG versions
convert public/favicon.svg -resize 32x32 public/icon.png
convert public/favicon.svg -resize 180x180 public/apple-icon.png

# Create ICO version
convert public/icon.png public/favicon.ico

# Create Safari pinned tab version
cp public/favicon.svg public/safari-pinned-tab.svg
