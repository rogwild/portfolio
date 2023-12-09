import { ISpsLiteBackendFont } from "types/components/elements/sps-lite";
import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

export interface ISpsLiteBackendTheme {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  theme: any;
  fonts?: ISpsLiteBackendFont[] | null;
  _meta?: any;
}
