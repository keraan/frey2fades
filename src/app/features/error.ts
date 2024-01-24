import toast from "react-hot-toast";

export const toastError = (err: unknown) => {
  console.error(err);
  if (
    typeof err === "object" &&
    err &&
    "message" in err &&
    typeof err.message === "string"
  ) {
    toast.error(err.message);
  } else {
    toast.error("Oops! Somethine went wrong!");
  }
};