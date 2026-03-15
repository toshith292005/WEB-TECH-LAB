// Query 1
// Find the states that contain the city BOSTON

db.zips.aggregate([
{ $match: { city: "BOSTON" } },
{ $group: { _id: "$state" } }
])



// Query 2
// Find cities that contain the substring BOST

db.zips.aggregate([
{ $match: { city: /BOST/ } },
{ $project: { city: 1, state: 1, _id: 0 } }
])



// Query 3
// Find the city with the most zip codes

db.zips.aggregate([
{
$group:{
_id:{ city:"$city", state:"$state" },
zipCount:{ $sum:1 }
}
},
{ $sort:{ zipCount:-1 } },
{ $limit:1 }
])
