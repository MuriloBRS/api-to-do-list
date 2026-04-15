const createTask = (id, title, completed = false) => {
  return {
    id,
    title,
    completed: completed
  };
};

module.exports = { createTask };
