import { Ed25519Signature2018 } from "@digitalbazaar/ed25519-signature-2018";
import { Ed25519Signature2020 } from "@digitalbazaar/ed25519-signature-2020";

import { verifyCredential } from "@digitalbazaar/vc";
import { checkStatus } from "@digitalbazaar/vc-revocation-list";
import { JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./documentLoader.js";

export const suite = [
  new Ed25519Signature2018(),
  new Ed25519Signature2020(),
  new JsonWebSignature(),
];

/**
 * Handler to verify a verifiable credential, using the suite and documentLoader defined above.
 *
 * @param {*} req  request object
 * @param {*} res  response object
 * @returns {Promise<void>}  returns a promise
 *
 */
export const verifyCredentialsHandler = async (req, res) => {
  const { verifiableCredential } = req.body;
  if (!verifiableCredential) {
    res
      .status(400)
      .json({ error: "Missing verifiableCredential in request body" });
    return;
  }
  const result = await verifyCredential({
    credential: verifiableCredential,
    suite,
    documentLoader,
    checkStatus: checkStatus,
  });
  res.status(200).json(result);
};
