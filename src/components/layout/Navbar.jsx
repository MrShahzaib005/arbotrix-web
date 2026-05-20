import { createClient } from "@/utils/supabase/server";
import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
  // Securely check session on the server before any HTML is rendered
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Pass the user data down to your animated client component
  return <NavbarClient user={user} />;
}