import { auth } from "@clerk/nextjs/server";

const role = async () => {
  const { userId, sessionClaims } = await auth();
  return {
    role: (sessionClaims?.metadata as { role?: string })?.role,
    currentUserId: userId,
  };
};

export default role;
