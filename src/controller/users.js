const getAllUsers = (req, res) => {
  res.json({
    message: "GET All Users Success",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "CREATE New Users Success",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
