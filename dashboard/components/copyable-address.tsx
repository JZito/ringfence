"use client";

import { useState } from "react";
import { truncateAddress, basescanAddressUrl, basescanTxUrl } from "@/lib/format";

interface CopyableAddressProps {
  value: string;
  type?: "address" | "tx";
  linked?: boolean;
}

export function CopyableAddress({ value, type = "address", linked = true }: CopyableAddressProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const display = truncateAddress(value);
  const url = type === "tx" ? basescanTxUrl(value) : basescanAddressUrl(value);

  return (
    <span className="inline-flex items-center gap-1.5 group">
      {linked ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-accent-blue hover:text-text-primary transition-colors"
          title={value}
        >
          {display}
        </a>
      ) : (
        <span className="font-mono text-xs text-text-muted" title={value}>
          {display}
        </span>
      )}
      <button
        onClick={handleCopy}
        className="text-text-muted hover:text-text-primary text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
        title="Copy"
      >
        {copied ? "✓" : "⧉"}
      </button>
    </span>
  );
}
