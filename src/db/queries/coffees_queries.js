/**
 * All queries related to the "coffees" table.
 */
export const selectAllCoffees = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
`;
export const selectCoffeeById = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.coffee_id = $1
`;
export const selectCoffeesByName = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE LOWER(coffees.name) LIKE LOWER($1)
`;
export const selectCoffeesByRoasterId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.roaster_id = $1
`;
export const selectCoffeesByOriginId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.origin_id = $1
`;
export const selectCoffeesByProcessId = `
  SELECT
  coffees.coffee_id AS coffee_id,
  coffees.name AS coffee_name,
  coffees.roaster_id AS roaster_id,
  roasters.name AS roaster_name,
  roasters.city AS roaster_city,
  roasters.state AS roaster_state,
  roasters.country AS roaster_country,
  roasters.website AS roaster_website,
  coffees.origin_id AS origin_id,
  origins.name AS origin_name,
  coffees.process_id AS process_id,
  processes.name AS process_name
  FROM coffees
  INNER JOIN roasters ON coffees.roaster_id = roasters.roaster_id
  INNER JOIN origins ON coffees.origin_id = origins.origin_id
  INNER JOIN processes ON coffees.process_id = processes.process_id
  WHERE coffees.process_id = $1
`;
export const insertIntoCoffees =
  'INSERT INTO coffees (name, roaster_id, origin_id, process_id) VALUES ($1, $2, $3, $4) RETURNING *';
