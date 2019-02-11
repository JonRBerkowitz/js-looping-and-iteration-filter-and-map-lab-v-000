// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver) {
    let match = false;

    for (const key in attribute) {
      debugger;
        match = driver[key] === attribute[key];
    }

    return match;
  });
}
