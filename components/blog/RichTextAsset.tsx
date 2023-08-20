import Image from "next/image";
import { NodeData } from "@contentful/rich-text-types";

export default function RichTextAsset({
  nodeData,
}: {
  nodeData: NodeData;
}) {

  if (nodeData.target && "fields" in nodeData.target) {
    const asset = nodeData.target.fields.file;
    return <div className="next-image-container"><Image src={"https:" + asset.url} layout="fill" alt={asset.description} className="next-image" /></div>;
  }

  return null;
}
