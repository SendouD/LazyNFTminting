import { createThirdwebClient } from "thirdweb";
import {arbitrumSepolia} from "thirdweb/chains"

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;
const chain=arbitrumSepolia;
const client = createThirdwebClient({
  clientId: clientId,
});
export { client, chain };
