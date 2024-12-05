import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID as string;

if (!CLIENT_ID) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
});
