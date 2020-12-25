export default {
  data: () => ({
    rules: {
      required: value => !!value || "Required field", // Check that value is provided by user or not
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      }, // Checking email correctness with regex
      min: value => {
        if (value) {
          return value.length >= 8 || "At least 8 characters";
        } else {
          return "Provide a pass";
        }
      }
    }
  })
};
