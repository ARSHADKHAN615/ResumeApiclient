import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// export const getResumeData = async () => {
//   const authUserId = useSelector((state) => state.auth.currentUser?._id);
//   return (await api.get("resume/" + authUserId)).data;
// };
