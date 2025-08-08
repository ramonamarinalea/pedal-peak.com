#!/bin/bash

echo "🔧 Fixing localhost connection for Pedal Peak..."

# Kill any existing Next.js processes
echo "Stopping any running servers..."
pkill -f "next"
sleep 2

# Clear Next.js cache
echo "Clearing Next.js cache..."
rm -rf .next

# Try different ports in sequence
echo "Starting server on available port..."

# Try port 3000
echo "Trying port 3000..."
npx next dev -p 3000 --hostname 0.0.0.0 &
SERVER_PID=$!
sleep 3

# Check if server started
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Server running on http://localhost:3000"
    wait $SERVER_PID
else
    echo "Port 3000 failed, trying 3001..."
    kill $SERVER_PID 2>/dev/null
    
    npx next dev -p 3001 --hostname 0.0.0.0 &
    SERVER_PID=$!
    sleep 3
    
    if curl -s http://localhost:3001 > /dev/null; then
        echo "✅ Server running on http://localhost:3001"
        wait $SERVER_PID
    else
        echo "Port 3001 failed, trying 3002..."
        kill $SERVER_PID 2>/dev/null
        
        npx next dev -p 3002 --hostname 0.0.0.0 &
        SERVER_PID=$!
        sleep 3
        
        if curl -s http://localhost:3002 > /dev/null; then
            echo "✅ Server running on http://localhost:3002"
            wait $SERVER_PID
        else
            echo "❌ All ports failed. Trying basic server..."
            kill $SERVER_PID 2>/dev/null
            npx next dev --hostname 0.0.0.0
        fi
    fi
fi