import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string;
  className?: string;
};

export function MarkdownBody({ content, className }: MarkdownBodyProps) {
  return (
    <div
      className={[
        "prose-article text-lg leading-relaxed text-foreground",
        "[&_p]:mb-4 [&_p]:last:mb-0",
        "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6",
        "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_a]:font-medium [&_a]:text-[var(--ritanowa-terracotta)] [&_a]:underline-offset-4",
        "[&_strong]:font-semibold",
        className ?? "",
      ].join(" ")}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
