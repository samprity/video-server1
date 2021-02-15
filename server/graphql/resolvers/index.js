const videoResolvers = require('./video');

module.exports = {
  Query: {
    ...videoResolvers.Query
  }
}