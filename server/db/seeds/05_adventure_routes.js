
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventure_routes').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventure_routes').insert([
        {
          "route_title": "The Plot Thickens",
          "adventure_id": 1
        },
        {
          "route_title": "You're Going to Die",
          "adventure_id": 2
        },
        {
          "route_title": "Who's This?",
          "adventure_id": 3
        },
        {
          "route_title": "Turning Point",
          "adventure_id": 4
        },
        {
          "route_title": "Wrong Decision",
          "adventure_id": 5
        },
        {
          "route_title": "Really Bad Idea",
          "adventure_id": 6
        },
        {
          "route_title": "Now We're Getting Somewhere",
          "adventure_id": 7
        },
        {
          "route_title": "Some Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "This is Some Stuff Here",
          "adventure_id": 9
        },
        {
          "route_title": "You're About to Catch the Murderer",
          "adventure_id": 10
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 11
        },
        {
          "route_title": "Route Title",
          "adventure_id": 12
        },
        {
          "route_title": "Example Route Title",
          "adventure_id": 13
        },
        {
          "route_title": "Route Title Here",
          "adventure_id": 14
        },
        {
          "route_title": "Check Out This Route Title",
          "adventure_id": 15
        },
        {
          "route_title": "Finally a Route Title",
          "adventure_id": 16
        },
        {
          "route_title": "Title for Route",
          "adventure_id": 1
        },
        {
          "route_title": "Title of Route",
          "adventure_id": 2
        },
        {
          "route_title": "Route's Title",
          "adventure_id": 3
        },
        {
          "route_title": "The Route's Title",
          "adventure_id": 4
        },
        {
          "route_title": "Route Title Variation 1",
          "adventure_id": 5
        },
        {
          "route_title": "Route Title Variation A",
          "adventure_id": 6
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 7
        },
        {
          "route_title": "Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "Route Title Interesting",
          "adventure_id": 9
        },
        {
          "route_title": "Hyped Route Title",
          "adventure_id": 10
        },
        {
          "route_title": "Overhyped Route Title",
          "adventure_id": 11
        },
        {
          "route_title": "Route Title to End All Route Titles",
          "adventure_id": 12
        },
        {
          "route_title": "The Plot Thickens",
          "adventure_id": 13
        },
        {
          "route_title": "You're Going to Die",
          "adventure_id": 14
        },
        {
          "route_title": "Who's This?",
          "adventure_id": 15
        },
        {
          "route_title": "Turning Point",
          "adventure_id": 16
        },
        {
          "route_title": "Wrong Decision",
          "adventure_id": 1
        },
        {
          "route_title": "Really Bad Idea",
          "adventure_id": 2
        },
        {
          "route_title": "Now We're Getting Somewhere",
          "adventure_id": 3
        },
        {
          "route_title": "Some Route Title",
          "adventure_id": 4
        },
        {
          "route_title": "This is Some Stuff Here",
          "adventure_id": 5
        },
        {
          "route_title": "You're About to Catch the Murderer",
          "adventure_id": 6
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 7
        },
        {
          "route_title": "Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "Example Route Title",
          "adventure_id": 9
        },
        {
          "route_title": "Route Title Here",
          "adventure_id": 10
        },
        {
          "route_title": "Check Out This Route Title",
          "adventure_id": 11
        },
        {
          "route_title": "Finally a Route Title",
          "adventure_id": 12
        },
        {
          "route_title": "Title for Route",
          "adventure_id": 13
        },
        {
          "route_title": "Title of Route",
          "adventure_id": 14
        },
        {
          "route_title": "Route's Title",
          "adventure_id": 15
        },
        {
          "route_title": "The Route's Title",
          "adventure_id": 16
        },
        {
          "route_title": "Route Title Variation 2",
          "adventure_id": 1
        },
        {
          "route_title": "Route Title Variation A",
          "adventure_id": 2
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 3
        },
        {
          "route_title": "Route Title",
          "adventure_id": 4
        },
        {
          "route_title": "Route Title Interesting",
          "adventure_id": 5
        },
        {
          "route_title": "Hyped Route Title",
          "adventure_id": 6
        },
        {
          "route_title": "Overhyped Route Title",
          "adventure_id": 7
        },
        {
          "route_title": "Route Title to End All Route Titles",
          "adventure_id": 8
        },
        {
          "route_title": "The Plot Thickens",
          "adventure_id": 9
        },
        {
          "route_title": "You're Going to Die",
          "adventure_id": 10
        },
        {
          "route_title": "Who's This?",
          "adventure_id": 11
        },
        {
          "route_title": "Turning Point",
          "adventure_id": 12
        },
        {
          "route_title": "Wrong Decision",
          "adventure_id": 13
        },
        {
          "route_title": "Really Bad Idea",
          "adventure_id": 14
        },
        {
          "route_title": "Now We're Getting Somewhere",
          "adventure_id": 15
        },
        {
          "route_title": "Some Route Title",
          "adventure_id": 16
        },
        {
          "route_title": "This is Some Stuff Here",
          "adventure_id": 1
        },
        {
          "route_title": "You're About to Catch the Murderer",
          "adventure_id": 2
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 3
        },
        {
          "route_title": "Route Title",
          "adventure_id": 4
        },
        {
          "route_title": "Example Route Title",
          "adventure_id": 5
        },
        {
          "route_title": "Route Title Here",
          "adventure_id": 6
        },
        {
          "route_title": "Check Out This Route Title",
          "adventure_id": 7
        },
        {
          "route_title": "Finally a Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "Title for Route",
          "adventure_id": 9
        },
        {
          "route_title": "Title of Route",
          "adventure_id": 10
        },
        {
          "route_title": "Route's Title",
          "adventure_id": 11
        },
        {
          "route_title": "The Route's Title",
          "adventure_id": 12
        },
        {
          "route_title": "Route Title Variation 3",
          "adventure_id": 13
        },
        {
          "route_title": "Route Title Variation A",
          "adventure_id": 14
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 15
        },
        {
          "route_title": "Route Title",
          "adventure_id": 16
        },
        {
          "route_title": "Route Title Interesting",
          "adventure_id": 1
        },
        {
          "route_title": "Hyped Route Title",
          "adventure_id": 1
        },
        {
          "route_title": "Overhyped Route Title",
          "adventure_id": 2
        },
        {
          "route_title": "Route Title to End All Route Titles",
          "adventure_id": 2
        },
        {
          "route_title": "The Plot Thickens",
          "adventure_id": 3
        },
        {
          "route_title": "You're Going to Die",
          "adventure_id": 3
        },
        {
          "route_title": "Who's This?",
          "adventure_id": 4
        },
        {
          "route_title": "Turning Point",
          "adventure_id": 5
        },
        {
          "route_title": "Wrong Decision",
          "adventure_id": 5
        },
        {
          "route_title": "Really Bad Idea",
          "adventure_id": 6
        },
        {
          "route_title": "Now We're Getting Somewhere",
          "adventure_id": 6
        },
        {
          "route_title": "Some Route Title",
          "adventure_id": 6
        },
        {
          "route_title": "This is Some Stuff Here",
          "adventure_id": 7
        },
        {
          "route_title": "You're About to Catch the Murderer",
          "adventure_id": 7
        },
        {
          "route_title": "Another Route Title",
          "adventure_id": 7
        },
        {
          "route_title": "Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "Example Route Title",
          "adventure_id": 8
        },
        {
          "route_title": "Route Title Here",
          "adventure_id": 9
        },
        {
          "route_title": "Check Out This Route Title",
          "adventure_id": 9
        },
        {
          "route_title": "Finally a Route Title",
          "adventure_id": 10
        },
        {
          "route_title": "Title for Route",
          "adventure_id": 11
        },
        {
          "route_title": "Title of Route",
          "adventure_id": 12
        },
        {
          "route_title": "Route's Title",
          "adventure_id": 13
        },
        {
          "route_title": "The Route's Title",
          "adventure_id": 14
        },
        {
          "route_title": "Route Title Variation 4",
          "adventure_id": 15
        },
        {
          "route_title": "Route Title Variation A",
          "adventure_id": 16
        }
      ]);
    });
};
