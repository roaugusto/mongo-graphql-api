#!/usr/bin/env bash

console.log('Creating application user and db')

db.createUser({
  user: "admin",
  pwd: "graphqltest",
  roles: [{ role: "dbOwner", db: "local" }]
})
