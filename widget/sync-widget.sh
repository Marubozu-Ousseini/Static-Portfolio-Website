#!/bin/bash
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$DIR")"

SUB_PATH="$ROOT/../portfolio-chatbot-widget"
DEST="$ROOT/widget"

if [ ! -d "$SUB_PATH" ]; then
  echo "Submodule portfolio-chatbot-widget not found at $SUB_PATH"
  exit 1
fi

mkdir -p "$DEST"
cp -f "$SUB_PATH/chatbot-widget.js" "$DEST/chatbot-widget.js"
cp -f "$SUB_PATH/chatbot-widget.css" "$DEST/chatbot-widget.css"
echo "Synced widget assets to $DEST"
