import { v4 as uuidv4 } from "uuid";

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
    id: uuidv4(), // unique id / key
    position: "",
    employer: "",
    city: "",
    start: "",
    end: "",
    description: "",
  };
}

export { getPersonalObjects, getEducationObjects, getEmploymentObjects };
