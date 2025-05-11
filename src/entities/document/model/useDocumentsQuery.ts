import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  fetchDocuments,
  postDocument,
  fetchDocumentById,
} from "../../../shared/api/client";
import { Document } from "./types";

export const useCreateDocument = () => {
  const queryClient = useQueryClient();

  return useMutation<Document, Error, Document>({
    mutationFn: postDocument,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents-create"] });
    },
  });
};

export const useDocumentsQuery = () => {
  return useQuery<Document[]>({
    queryKey: ["documents"],
    queryFn: fetchDocuments,
  });
};

export const useDocumentQuery = (id: number) => {
  return useQuery({
    queryKey: ["document", id],
    queryFn: () => fetchDocumentById(id),
    enabled: !!id, // запрос не выполнится, если id — 0 или undefined
  });
};
