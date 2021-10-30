export const resetFrom = (initialState, setState, validator) => {
  setState(initialState);
  Object.keys(validator.current.fields).forEach((e) => {
    validator.current.hideMessageFor(e);
    validator.current.fields[e] = true;
  });
};
