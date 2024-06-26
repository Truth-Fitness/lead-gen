import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Node, Document } from "@contentful/rich-text-types";

import RichTextAsset from "./RichTextAsset";

const customMarkdownOptions = () => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
      return <RichTextAsset nodeData={node.data} />;
    },
  },
});

export default function PostBody({ content }: { content: Document }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose md:prose-lg lg:prose-xl text-white">
        {documentToReactComponents(content, customMarkdownOptions())}
      </div>
    </div>
  );
}
