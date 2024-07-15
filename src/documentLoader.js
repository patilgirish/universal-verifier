import { contexts } from "./contexts/index.js";
import { resolvers } from "./resolvers.js";

export const documentLoader = async (iri) => {
  if (iri) {
    if (contexts[iri]) {
      return { document: contexts[iri] };
    }

    if (iri.startsWith("did:web")) {
      const document = await resolvers.resolve(iri);
      return { document };
    }

    if (iri.startsWith("http")) {
      // remove trailing slash
      const url = iri.endsWith("/") ? iri.slice(0, -1) : iri;
      const document = await resolvers.http(url);
      return { document };
    }
  }

  const message = "Unsupported iri: " + iri;
  throw new Error(message);
};
