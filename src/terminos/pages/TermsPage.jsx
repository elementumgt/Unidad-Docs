import LegalDocumentPage from "../../shared/legal/components/LegalDocumentPage.jsx";
import { termsDocument } from "../content/termsDocument.js";

export default function TermsPage() {
  return <LegalDocumentPage document={termsDocument} />;
}
