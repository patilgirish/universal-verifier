import credsv1 from "./credentials-v1.json" assert { type: "json" };

import didsv1 from "./did-v1.json" assert { type: "json" };

import ed25519v1 from "./ed25519-v1.json" assert { type: "json" };
import jwsv1 from "./jws-v1.json" assert { type: "json" };
import odrlV1 from "./odrl-v1.json" assert { type: "json" };
import revv1 from "./rev-v1.json" assert { type: "json" };
import x25519v1 from "./x25519-v1.json" assert { type: "json" };
import x25519v2 from "./x25519-v2.json" assert { type: "json" };

import secv1 from "./sec-v1.json" assert { type: "json" };
import secv2 from "./sec-v2.json" assert { type: "json" };

import didConfigv1 from "./did-config-v1.json" assert { type: "json" };

export const contexts = {
  "https://www.w3.org/2018/credentials/v1": credsv1,
  "https://www.w3.org/ns/did/v1": didsv1,
  "https://w3id.org/security/suites/jws-2020/v1": jwsv1,
  "https://ns.did.ai/suites/jws-2020/v1": jwsv1,
  "https://w3id.org/vc-revocation-list-2020/v1": revv1,
  "https://w3id.org/security/suites/ed25519-2018/v1": ed25519v1,
  "https://ns.did.ai/suites/ed25519-2018/v1": ed25519v1,
  "https://ns.did.ai/suites/x25519-2018/v1": x25519v1,
  "https://w3id.org/security/suites/x25519-2019/v1": x25519v1,
  "https://w3id.org/security/suites/x25519-2020/v1": x25519v2,
  "https://www.w3.org/ns/odrl.jsonld": odrlV1,
  "https://w3id.org/security/v2": secv2,
  "https://w3id.org/security/v1": secv1,

  "https://identity.foundation/.well-known/contexts/did-configuration-v0.2.jsonld":
    didConfigv1,
};
