/* 
 * In the example below, the function countryGroup() takes as input the name of the country code field and returns a CASE statement that maps country codes to country groups
 * You can learn more about functions on https://docs.dataform.co/guides/includes
 */

function countryGroup(countryCodeField) {
    return `CASE
            WHEN ${countryCodeField} IN ("US", "CA") THEN "NA"
            WHEN ${countryCodeField} IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
            WHEN ${countryCodeField} IN ("AU") THEN ${countryCodeField}
            ELSE "Other countries"
            END`;
}
module.exports = { countryGroup };

/*
 * You can call the function from any of your SQL scripts. For example, if this file is named includes/country_mapping.js, you can use the function as below:
    
    SELECT ${country_mapping.countryGroup("country_code")} AS country_group 
    ...

  * The query will be compiled into the following SQL before it is run:
    SELECT
    CASE
        WHEN country_code IN ("US", "CA") THEN "NA"
        WHEN country_code IN ("GB", "FR", "DE", "IT", "PL") THEN "EU"
        WHEN country_code IN ("AU") THEN country_code
        ELSE "Other countries"
    END AS country_group
*/
  