// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver_rev) {
    return driver_rev > revenue;
  });
}