import { FC } from "react";
import Simple from "./Simple";
import { IBackendPublicPageTopbar } from "types/single-types/sps-lite";

export interface IBackendPublicPageBlock extends IBackendPublicPageTopbar {}

const variants = {
  simple: Simple,
};

export default function PublicPageTopbars(props: IBackendPublicPageBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IBackendPublicPageBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
