/* eslint-disable prefer-destructuring */
const cassandra = require('cassandra-driver');

const lbp = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy();


const distance = cassandra.types.distance;

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 5,
      [distance.remote]: 1,
    },
    maxRequestsPerConnection: 1000,
  },
  policies: { loadBalancing: lbp },
});

const client2 = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 5,
      [distance.remote]: 1,
    },
    maxRequestsPerConnection: 1000,
  },
  policies: { loadBalancing: lbp },
});

module.exports = { client, client2 };
