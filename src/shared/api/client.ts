import { getFetcher, postFetcher } from "./fetcher";
import type { Document } from "../../entities/document/model/types";

export const fetchDocuments = () => {
  return getFetcher<Document[]>("/documents");
};

export const fetchDocumentById = (id: number) => {
  return getFetcher<Document>(`/documents?id=eq.${id}`);
};

export const postDocument = (data: Document) => {
  return postFetcher<Document, Document>("/documents", data);
};
