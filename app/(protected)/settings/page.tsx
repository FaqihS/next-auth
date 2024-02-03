import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session?.user.id)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </div>
  );
}
