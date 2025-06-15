const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  let sortedPeople = people.sort((a, b) => {
    const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return ageB - ageA;
  });

  return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
