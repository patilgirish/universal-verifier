import axios from "axios";
import { Resolver } from "did-resolver";
import { getResolver } from "web-did-resolver";

const webResolver = getResolver();
const didResolver = new Resolver(
  {
    ...webResolver,
  },
  {
    cache: true,
  }
);

export const resolvers = {
  http: async (url) => {
    // Do not cache http requests because revocation status can change
    if (url.includes("x25519-2018")) {
      url = url.replace("x25519-2018", "x25519-2020");
    }
    const resp = await axios.get(url, {
      headers: {
        accept: "application/json",
      },
    });
    return resp.data;
  },
  resolve: async (did) => {
    if (did.startsWith("did:web")) {
      const { didDocument } = await didResolver.resolve(did);
      return didDocument;
    }
    throw new Error("Unsupported did method");
  },
};
