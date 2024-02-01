db.traffic_violations.aggregate([
    {
      $addFields: {
        'Issue Year': { $substr: [ "$Issue Date", 6, 4 ] }
      }
    }
  ])

db.traffic_violations.createIndex({ 'Issue Year': 1 })

sh.shardCollection("bd.traffic_violations", { 'Issue Year': 1 })