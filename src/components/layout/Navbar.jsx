import { createClient } from "@/utils/supabase/server";
import { NavbarClient } from "./NavbarClient";

export const Navbar = async () => {
  // Securely check session on the server before any HTML is rendered
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Pass the user data down to your animated client component
  return (
    <>
      {/* NO wrapper divs, NO fixed classes here! Let NavbarClient handle the layout. */}
      <NavbarClient user={user} />
    </>
  );
}