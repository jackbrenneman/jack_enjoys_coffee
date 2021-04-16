/**
 * All queries related to the "coffee_entries" table.
 */
export const selectAllCoffeeEntries = 'SELECT * FROM coffee_entries';
export const selectCoffeeEntriesByUserId = `
  SELECT
    coffee_entries.coffee_entry_id,
    coffee_entries.brewer_id,
    coffee_entries.date,
    coffee_entries.user_id,
    coffee_entries.grinder_id,
    coffee_entries.coffee_id,
    coffee_entries.drink_id,
    coffee_entries.method_id,
    coffees.name AS coffee_name,
    methods.name AS method_name,
    origins.origin_id AS origin_id,
    origins.name AS origin_name,
    processes.process_id AS process_id,
    processes.name AS process_name,
    roasters.roaster_id AS roaster_id,
    roasters.name AS roaster_name,
    drinks.name AS drink_name,
    brewers.name AS brewer_name,
    grinders.name AS grinder_name,
    waters.name AS water_name,
    coffee_entries.coffee_in,
    coffee_entries.liquid_out,
    coffee_entries.water_id,
    coffee_entries.water_in,
    coffee_entries.steep_time,
    coffee_entries.grinder_setting,
    coffee_entries.rating,
    coffee_entries.notes
  FROM coffee_entries
  INNER JOIN users ON coffee_entries.user_id = users.user_id
  INNER JOIN coffees ON coffee_entries.coffee_id = coffees.coffee_id
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN methods ON coffee_entries.method_id = methods.method_id
  INNER JOIN drinks ON coffee_entries.drink_id = drinks.drink_id
  INNER JOIN brewers ON coffee_entries.brewer_id = brewers.brewer_id
  INNER JOIN grinders ON coffee_entries.grinder_id = grinders.grinder_id
  INNER JOIN waters ON coffee_entries.water_id = waters.water_id
  WHERE coffee_entries.user_id = $1
`;
