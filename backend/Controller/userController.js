import Model from '../Models/userModels.js';

export const createUser = (req, res) => {
  const {
    first_name,
    last_name,
    company_name,
    password,
    city,
    state,
    web,
    email,
  } = req.body;
  const id = Number(req.body.id);
  const zip = Number(req.body.zip);
  const age = Number(req.body.age);

  const newModel = new Model({
    id,
    first_name,
    last_name,
    company_name,
    email,
    city,
    state,
    zip,
    password,
    web,
    age,
  })
    .save()
    .then(() =>
      res.status(201).json({ success: true, msg: 'User created successfully' })
    )
    .catch((err) => res.status(500).json(`Error:${err}`));
};

export const getAllUsers = (req, res) => {
  Model.find()
    .then((users) => res.status(200).json({ users }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const getUser = (req, res) => {
  const { id: userID } = req.params;
  Model.findById(userID)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

export const deleteUser = (req, res) => {
  const { id: userID } = req.params;
  Model.findByIdAndDelete(userID)
    .then(() =>
      res.status(200).json({ success: true, msg: 'User deleted successfully' })
    )
    .catch((err) => res.status(400).json(`Error: ${err}`));
};
