#!/bin/bash
set -e

# Set default values for environment variables if not provided
export DB_USER=${DB_USER:-postgres}
export DB_PASSWORD=${DB_PASSWORD:-postgres}
export DB_DATABASE=${DB_DATABASE:-mydatabase}
export DB_PORT=${DB_PORT:-5432}

export PGADMIN_DEFAULT_EMAIL=${PGADMIN_DEFAULT_EMAIL:-pgadmin4@pgadmin.org}
export PGADMIN_DEFAULT_PASSWORD=${PGADMIN_DEFAULT_PASSWORD:-admin}
export PGADMIN_PORT=${DB_PORT:-5050}

# Start PostgreSQL container
echo "Stopping and removing old Docker 'postgres' container and starting a new fresh instance"
docker-compose -f docker/docker-compose.yml up -d postgres

# Wait for PostgreSQL to start
echo "Sleeping to wait for PostgreSQL server to start..."
sleep 5

# Start pgAdmin container
echo "Stopping and removing old Docker 'pgadmin' container and starting a new fresh instance"
docker-compose -f docker/docker-compose.yml up -d pgadmin

echo "Docker containers 'postgres' and 'pgadmin' are now running."
