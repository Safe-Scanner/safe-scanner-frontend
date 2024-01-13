import React from "react";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/failure.css";
import "./toastStyle.css";

toastConfig({ theme: "failure", className: "my-toast" });

const FailureToast = (message: string) => {
	if (message) {
		return toast(`${message}`, 3000);
	}
};

export default FailureToast;
