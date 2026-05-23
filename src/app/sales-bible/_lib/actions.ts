"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ACCESS_COOKIE, VALID_TOKEN, checkPassword } from "./auth";

export type UnlockState = { error: string };

export async function unlock(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const password = String(formData.get("password") ?? "");

  if (!checkPassword(password)) {
    return { error: "Mot de passe incorrect." };
  }

  const store = await cookies();
  store.set(ACCESS_COOKIE, VALID_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/sales-bible",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/sales-bible");
}
