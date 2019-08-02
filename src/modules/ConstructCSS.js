const ConstructCSS = (...args) => args
  .filter(argument => argument) // Get truthy only
  .map(argument => argument.split(' ')) // Split by spaces
  .reduce((accmulator, currentClasses) => { // Combine all classes
    accmulator.push(...currentClasses);
    return accmulator;
  }, [])
  .filter(argument => argument) // Get truthy only
  .join(' '); // Join back into a single class

export default ConstructCSS;
