function getPersonalObjects() {
  return {
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    tel: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  };
}

function getEducationObjects() {
  return {
    education: "",
    school: "",
    city: "",
    start: "",
    end: "",
    description: "",
  };
}

function getEmploymentObjects() {
  return {
    position: "",
    employer: "",
    city: "",
    start: "",
    end: "",
    description: "",
  };
}

export { getPersonalObjects, getEducationObjects, getEmploymentObjects };
