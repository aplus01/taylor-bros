#!/usr/bin/env bash
set -euo pipefail

INCLUDE_IMAGES=true

while [[ $# -gt 0 ]]; do
  case "$1" in
    --no-images) INCLUDE_IMAGES=false; shift ;;
    -*) echo "Unknown flag: $1"; exit 1 ;;
    *) DEST="$1"; shift ;;
  esac
done

if [ -z "${DEST:-}" ]; then
  echo "Usage: $0 [--no-images] user@host:/path/to/directory"
  exit 1
fi

if [ "$INCLUDE_IMAGES" = true ]; then
  scp -r index.html style.css script.js images/ "$DEST"
else
  scp index.html style.css script.js "$DEST"
fi
