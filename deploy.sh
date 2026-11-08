#!/usr/bin/env bash
set -euo pipefail

# ====================================================================
# Deployment script for Smart Finance (smartfinance.montewebs.com)
# Target: spaceship-vps (Spaceship USA)
# ====================================================================

REMOTE_HOST="spaceship-vps"
REMOTE_DIR="/root/projects/smartfinance"
LOCAL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "===================================================================="
echo " Deploying Smart Finance to ${REMOTE_HOST}..."
echo "===================================================================="

# 1. Ensure remote directory exists
echo "▶ Ensuring remote directory ${REMOTE_DIR} exists..."
ssh "${REMOTE_HOST}" "mkdir -p ${REMOTE_DIR}"

# 2. Sync project files
echo "▶ Syncing project files to ${REMOTE_HOST}:${REMOTE_DIR}..."
rsync -avz \
  --exclude ".git" \
  --exclude "node_modules" \
  --exclude ".next" \
  --exclude ".DS_Store" \
  "${LOCAL_DIR}/" "${REMOTE_HOST}:${REMOTE_DIR}/"

# 3. Build & start container
echo "▶ Building & starting smartfinance-web container..."
ssh "${REMOTE_HOST}" "
  cd ${REMOTE_DIR}
  if [ ! -f .env ]; then
    cp .env.example .env
  fi
  docker compose build web
  docker compose up -d web
  docker compose ps
"

echo "===================================================================="
echo "✓ Smart Finance web container deployed successfully on 127.0.0.1:3200"
echo "===================================================================="
