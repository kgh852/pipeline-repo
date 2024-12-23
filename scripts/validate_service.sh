#!/bin/bash
curl -s http://localhost:3000 | grep "testing" || exit 1
