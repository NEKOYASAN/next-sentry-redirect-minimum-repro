"use server";

import { redirect } from "next/navigation";

export async function redirectToExampleAction() {
  redirect("/example");
}
