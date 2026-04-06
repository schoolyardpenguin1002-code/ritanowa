import ReactMarkdown from "react-markdown";

type MarkdownBodyProps = {
  content: string;
  className?: string;
};

export function MarkdownBody({ content, className }: MarkdownBodyProps) {
  return (
    <div
      className={[
        "prose-article min-w-0 max-w-full text-base leading-relaxed text-foreground sm:text-lg",
        "[&_p]:mb-4 [&_p]:last:mb-0",
        "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-4 sm:[&_ul]:pl-6",
        "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-4 sm:[&_ol]:pl-6",
        "[&_a]:break-words [&_a]:font-medium [&_a]:text-[var(--ritanowa-terracotta)] [&_a]:underline-offset-4",
        "[&_strong]:font-semibold",
        "[&_img]:h-auto [&_img]:max-w-full",
        "[&_pre]:max-w-full [&_pre]:overflow-x-auto",
        className ?? "",
      ].join(" ")}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
