// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.map(function(driver) {
    const d = driver.revenue > revenue;
    return d.name;
    debugger;

  });
}
