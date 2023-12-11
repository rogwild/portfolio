import { variants as spsLiteVariants } from "./sps-lite";
import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/pricing-block/interfaces";

export interface IPageBlock extends IBackendComponentPageBlock {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
};

export default function Pricings(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
