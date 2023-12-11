import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentButton } from "../../../elements/button/interfaces/sps-lite";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: "simple-centered";
  className: string | null;
  title: string | null;
  description: string | null;
  buttons?: ISpsLiteBackendComponentButton[] | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[];
}
