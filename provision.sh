#!/usr/bin/env bash

# Abort on first failure
set -e
export CI=true

echo "Updating package repository"
sudo apt-get update >/dev/null 2>&1

echo "Installing build essentials"
sudo apt-get install -y build-essential >/dev/null 2>&1

echo "Installing Git"
sudo apt-get install -y git >/dev/null 2>&1

echo "Installing Node"
sudo apt-get install -y nodejs-legacy >/dev/null 2>&1

echo "Installing NPM"
sudo apt-get install -y npm >/dev/null 2>&1

echo "Installing Grunt and Bower"
sudo npm install -g grunt-cli bower >/dev/null 2>&1

echo "Installing NPM & Bower dependencies"
cd /vagrant
npm install >/dev/null 2>&1
