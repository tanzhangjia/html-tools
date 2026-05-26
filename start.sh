#!/bin/bash
# Start the HTML tools server on port 1200
# Usage: ./start.sh [restart]

DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$DIR/server.pid"

if [ "$1" = "restart" ]; then
  if [ -f "$PID_FILE" ]; then
    kill $(cat "$PID_FILE") 2>/dev/null
    rm -f "$PID_FILE"
  fi
  fuser -k 1200/tcp 2>/dev/null
  sleep 1
fi

# Check if already running
if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
  echo "Server already running (PID $(cat $PID_FILE))"
  exit 0
fi

node "$DIR/server.js" &
echo $! > "$PID_FILE"
echo "Server started on port 1200 (PID $!)"
