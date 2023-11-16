// 1. Write a query to show all documents in the Restaurants collection.
db.Restaurant.find({})

// 2. Write a query to show (restaurant_id + name + borough + cuisine) for all documents in the Restaurants collection.
db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 3. Write a query to show (restaurant_id + name + borough + cuisine) exclude _id for all documents in the Restaurants collection.
db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1, _id:0})

// 4. Write a query to show (restaurant_id + name + borough + zip code) exclude _id for all documents in the Restaurants collection.
db.Restaurant.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1, _id:0, 'address.zipcode': 1})

// 5. Write a query to show all the restaurants that are in the Bronx.
db.Restaurant.find({ borough : "Bronx" })

// 6. Write a query to show the first 5 restaurants that are in the Bronx.
db.Restaurant.find({ borough : "Bronx" }).limit(5)

// 7. Enter a query to show the next 5 restaurants after skipping the first 5 in the Bronx.
db.Restaurant.find({ borough : "Bronx" }).skip(5).limit(5)

// 8. Write a query to find the restaurants that have a score > 90.
db.Restaurant.find({ 'grades.score':{$gt:90} })

// 9. Write a query to find restaurants that have a score > 80 and < 100.
db.Restaurant.find({ 'grades.score':{$gt:80, $lt:100} })

// 10. Enter a query to find restaurants that are located at a latitude value < -95.754168.
db.Restaurant.find({'address.coord.1’: {$lt: -95.754168}})

// 11. Write a query to find restaurants that don’t serve any 'American' cuisine and have a score > 70 and longitude < -65.754168.
db.Restaurant.find({$and:[ {cuisine: {$ne: "American"}}, {'grades.score': {$gt: 70}}, {'address.coord.0': {$lt: -65.754168 }}]})

// 12. Write a query to find the restaurants that don’t prepare any 'American' cuisine and got a score > 70 and located in the longitude < -65.754168. Note: Do this query without using the $and operator.
db.Restaurant.find({ cuisine : {$ne: "American"}, 'grades.score': {$gt: 70}, 'address.coord.0’: {$lt: -65.754168}})

// 13. Enter a query to find restaurants that don’t serve any 'American' cuisine and received an 'A' grade point not belonging to Brooklyn. Order by cuisine ASC.
db.Restaurant.find({ cuisine : {$ne: "American"}, 'grades.grade': "A", borough: {$ne: "Brooklyn"}}).sort({cuisine: -1})

// 14. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'Wil' as the first three letters in their name.
db.Restaurant.find({name: /^Wil/}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 15. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that contain 'ces' as the last three letters in their name.
db.Restaurant.find({name: /ces$/}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 16. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that contain 'Reg' as three letters somewhere in their name.
db.Restaurant.find({name: /Reg/}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 17. Write a query to find restaurants that belong to the Bronx and prepare any American or Chinese dish.
db.Restaurant.find({$and: [{ $or: [{ cuisine: "American"}, { cuisine: "Chinese"}]}, {borough : "Bronx"}]})

// 18. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.
db.Restaurant.find({$or: [{borough: "Staten Island"}, {borough: "Queens"}, {borough: "Bronx"}, {borough: "Brooklyn"}]}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 19. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that aren’t in Staten Island or Queens or Bronx or Brooklyn.
db.Restaurant.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 20. Write a query to find the restaurant_id, name, borough, and cuisine for those restaurants that get a score that is no more than 10.
db.Restaurant.find({'grades.score': {$lte: 10}}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1})

// 21. Write a query to find the restaurant_id, name, borough and cuisine for those restaurants that prepare fish except 'American' and 'Chinese' or the restaurant name starts with the letters 'Wil'.

// 22. Write a query to find the restaurant_id, name, and grades for those restaurants that have an "A" grade and a score of 11 on study data ISODate "2014-08-11T00:00:00Z".
db.Restaurant.find({grades: {$elemMatch: {grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z")}}}, {restaurant_id: 1, name: 1, grades: 1}) 

// 23. Write a query to find the restaurant_id, name, and grades for those restaurants where the 2nd grade array element contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
db.Restaurant.find({$and: [{'grades.1.grade': "A", 'grades.1.score': 9, 'grades.1.date': ISODate("2014-08-11T00:00:00Z")}]}, {restaurant_id: 1, name: 1, grades: 1})

// 24. Write a query to find the restaurant_id, name, address, and geographic location for those restaurants where the second element of the coord array contains a value > 42 and < 52.
db.Restaurant.find({'address.coord.1': {$gt: 42, $lte: 52}}, {restaurant_id: 1, name: 1, address:1})

// 25. Write a query to arrange the restaurant name in ascending order along with all the columns.
db.Restaurant.find({}).sort({name: 1})

// 26. Write a query to show the restaurant name in descending order along with all the columns.
db.Restaurant.find({}).sort({name: -1})

// 27. Write a query to organize the cuisine name in ascending order and by the same cuisine district descending order.
db.Restaurant.find({}).sort({cuisine: 1, borough: -1})

// 28. Write a query to find out all the addresses that don’t contain street.
db.Restaurant.find({‘address.street’: {$exists: false}})

// 29. Write a query that will select all documents in the restaurants collection where the value of the coord field is Double.
db.Restaurant.find({'address.coord': {$type: "double"}})

// 30. Write a query that will select the restaurant_id, name, and grade for those restaurants that return 0 as the remainder after dividing the score by 7.
db.Restaurant.find({'grades.score': {$mod: [7, 0]}}, {restaurant_id: 1, name: 1, 'grades.grade': 1})

// 31. Write a query to find the restaurant name, borough, longitude and altitude and cook for those restaurants that contain 'mon' as three letters somewhere in their name.
db.Restaurant.find({name: /mon/}, {name: 1, borough: 1, 'address.coord': 1, cuisine: 1})

// 32. Write a query to find the restaurant name, borough, longitude and latitude and cook for those restaurants that contain 'Mad' as the first three letters of their name.
db.Restaurant.find({name: /^Mad/}, {name: 1, borough: 1, 'address.coord': 1, cuisine: 1})
