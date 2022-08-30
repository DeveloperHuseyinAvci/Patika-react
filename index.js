import axios from "axios";

const getData = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const dataUser = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );
    const dataPost = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + user_id
    );

    dataUser.data.post = [dataPost.data];
    console.log(dataUser.data);
  });
};

export default getData;
