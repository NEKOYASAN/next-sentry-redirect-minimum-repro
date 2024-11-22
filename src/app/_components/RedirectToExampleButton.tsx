"use client";

import { redirectToExampleAction } from "~/app/_components/RedirectToExampleAction";

export const RedirectToExampleButton = () => {
  const handleClick = async () => {
    await redirectToExampleAction();
  };
  return (
    <button onClick={handleClick} type={"button"}>
      Redirect to example page
    </button>
  );
};
