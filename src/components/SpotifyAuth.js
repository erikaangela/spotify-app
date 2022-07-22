import axios from "axios";

export const getAuth = async () => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;

  try {
    const response = await axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          window.btoa(REACT_APP_CLIENT_ID + ":" + REACT_APP_CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
    }).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};
