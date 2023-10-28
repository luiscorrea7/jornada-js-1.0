const URL = "http://localhost:3000"

const getAllUsers = async () => {
  try {
    const firstData = await fetch(`${URL}/usuarios`);
    const finalData = await firstData.json();
    console.log(finalData)
  } catch (error) {
    console.log(error.message)
  }
};

const getUsersById = async (id) => {

}

const editUser = async (id) => {

}

const createUser = async () => {

}

const deleteUser = async (id) => {

}

// post, patch, delete, getByID